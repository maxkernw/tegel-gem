import './style.scss';
import { registerSW } from 'virtual:pwa-register';
import { auth, subscribeToEvents, addEvent, deleteEvent, deleteMultipleEvents } from './firebase';
import { initSynthBackground } from './synth-background';

initSynthBackground();

const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
        showToast("New version available! Refreshing...", 'info');
        setTimeout(() => {
            updateSW(true);
        }, 1500);
    },
    onOfflineReady() {
        showToast("App ready to work offline!", 'info');
    }
});

// Check for updates every hour
setInterval(() => {
    updateSW(true);
}, 60 * 60 * 1000);

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { generateMonthView, generateMultiMonthView, isOverlap, monthNames } from './calendar';
import { Event } from './types';
import { Chalkboard } from './chalkboard';
import { initAdSystem } from './ads';

const appDiv = document.querySelector<HTMLDivElement>('#app')!;
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

function hideSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.classList.add('fade-out');
        setTimeout(() => splash.remove(), 1000);
    }
}

// State
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let allEvents: Event[] = [];
let currentView: 'calendar' | 'yearOverview' | 'games' = 'calendar';

function showToast(message: string, type: 'info' | 'error' = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

initAdSystem(showToast);

function renderAuth() {
    appDiv.classList.add('auth-mode');
    appDiv.innerHTML = `
        <div class="top-bar">
            <h1>Tegel</h1>
            <button id="games-btn" class="games-link">Games</button>
        </div>
        <div class="auth-form">
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button id="login-btn">Login</button>
        </div>
    `;

    document.getElementById('games-btn')?.addEventListener('click', () => {
        currentView = 'games';
        renderGames();
    });

    const handleLogin = async () => {
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            showToast("Logged in successfully!");
        } catch (e: any) {
            showToast(e.message, 'error');
        }
    };

    document.getElementById('login-btn')?.addEventListener('click', handleLogin);

    document.getElementById('password')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    document.getElementById('email')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
}

export function showConfirmModal(message: string, onConfirm: () => void) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Are you sure?</h2>
            <p style="text-align: center; color: #9d00ff; margin-bottom: 20px;">${message}</p>
            <div class="modal-actions">
                <button id="confirm-yes">Yes, Delete</button>
                <button id="confirm-no" class="cancel-btn">No, Keep it</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    };

    document.getElementById('confirm-no')?.addEventListener('click', closeModal);

    document.getElementById('confirm-yes')?.addEventListener('click', () => {
        onConfirm();
        closeModal();
    });
}

function showBookingModal(dateStr: string, events: Event[]) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    const user = auth.currentUser;
    const defaultTitle = user?.email || '';

    modal.innerHTML = `
        <div class="modal-content">
            <h2>Book Event</h2>
            <p style="text-align: center; color: #9d00ff;">Date: ${dateStr}</p>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="event-title" placeholder="Synth Party" value="${defaultTitle}" />
            </div>
            <div class="form-group">
                <label>Start Time</label>
                <input type="time" id="event-start" value="12:00" />
            </div>
            <div class="form-group">
                <label>End Time</label>
                <input type="time" id="event-end" value="13:00" />
            </div>
            <div class="modal-actions">
                <button id="confirm-booking">Confirm</button>
                <button id="cancel-booking" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cancel-booking')?.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    const handleBooking = async () => {
        const title = (document.getElementById('event-title') as HTMLInputElement).value;
        const startTimeStr = (document.getElementById('event-start') as HTMLInputElement).value;
        const endTimeStr = (document.getElementById('event-end') as HTMLInputElement).value;

        if (!title) {
            showToast("Please enter a title", 'error');
            return;
        }

        const startTimestamp = new Date(`${dateStr}T${startTimeStr}`).getTime();
        const endTimestamp = new Date(`${dateStr}T${endTimeStr}`).getTime();

        if (endTimestamp <= startTimestamp) {
            showToast("End time must be after start time", 'error');
            return;
        }

        if (isOverlap({ start: startTimestamp, end: endTimestamp }, events)) {
            showToast("This time slot is already booked!", 'error');
            return;
        }

        const user = auth.currentUser;
        if (user) {
            try {
                await addEvent({
                    userId: user.uid,
                    title,
                    start: startTimestamp,
                    end: endTimestamp,
                    email: user.email || '',
                    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
                });
                showToast("Event booked!");
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            } catch (e: any) {
                showToast(e.message, 'error');
            }
        }
    };

    document.getElementById('confirm-booking')?.addEventListener('click', handleBooking);

    ['event-title', 'event-start', 'event-end'].forEach(id => {
        document.getElementById(id)?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleBooking();
        });
    });
}

function showMyBookingsModal(events: Event[]) {
    const now = Date.now();
    const userEvents = events.filter(e => e.email === auth.currentUser?.email);
    const upcomingEvents = userEvents.filter(e => e.end >= now).sort((a, b) => a.start - b.start);
    const pastEvents = userEvents.filter(e => e.end < now).sort((a, b) => b.start - a.start);

    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const renderEventItem = (ev: Event) => {
        const dateStr = new Date(ev.start).toLocaleDateString();
        const startStr = new Date(ev.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endStr = new Date(ev.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `
            <div class="my-booking-item" style="border-left-color: ${ev.color}">
                <div class="my-booking-info">
                    <div class="my-booking-title">${ev.title}</div>
                    <div class="my-booking-time">${dateStr} | ${startStr} - ${endStr}</div>
                </div>
                <button class="delete-my-booking" data-id="${ev.id}">&times;</button>
            </div>
        `;
    };

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content" style="max-height: 85vh; display: flex; flex-direction: column;">
            <h2>My Bookings</h2>
            <div class="my-bookings-list" style="overflow-y: auto; flex: 1; padding-right: 5px;">
                ${userEvents.length === 0 ? '<p style="text-align: center; color: #ff00ff;">No bookings found.</p>' : ''}
                
                ${upcomingEvents.length > 0 ? `
                    <div class="booking-section">
                        <h3 class="section-title upcoming">Upcoming</h3>
                        ${upcomingEvents.map(renderEventItem).join('')}
                    </div>
                ` : ''}

                ${pastEvents.length > 0 ? `
                    <div class="booking-section">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <h3 class="section-title past">Past</h3>
                            <button id="delete-all-past" class="tiny-btn-neon">Delete All Past</button>
                        </div>
                        ${pastEvents.map(renderEventItem).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="modal-actions">
                <button id="close-my-bookings">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('delete-all-past')?.addEventListener('click', () => {
        const pastIds = pastEvents.map(e => e.id).filter((id): id is string => !!id);
        if (pastIds.length > 0) {
            showConfirmModal(`Delete all ${pastIds.length} past bookings?`, async () => {
                try {
                    await deleteMultipleEvents(pastIds);
                    showToast("Past bookings cleared");
                    modal.remove();
                } catch (err: any) {
                    showToast(err.message, 'error');
                }
            });
        }
    });

    document.getElementById('close-my-bookings')?.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    document.querySelectorAll('.delete-my-booking').forEach(btn => {
        btn.addEventListener('click', async () => {
            const eventId = btn.getAttribute('data-id');
            if (eventId) {
                showConfirmModal("Delete this booking?", async () => {
                    try {
                        await deleteEvent(eventId);
                        showToast("Booking deleted");
                        modal.remove(); // Close modal to refresh
                    } catch (err: any) {
                        showToast(err.message, 'error');
                    }
                });
            }
        });
    });
}

function getGradientStyle(events: Event[]): string {
    if (events.length === 0) return '';
    if (events.length === 1) return `background: ${events[0].color || '#ff00ff'}`;

    const colors = events.map(e => e.color || '#ff00ff');
    const step = 100 / colors.length;
    let gradient = 'background: linear-gradient(135deg, ';
    colors.forEach((color, i) => {
        gradient += `${color} ${i * step}%, ${color} ${(i + 1) * step}%`;
        if (i < colors.length - 1) gradient += ', ';
    });
    gradient += ')';
    return gradient;
}

function renderGames() {
    appDiv.classList.remove('auth-mode');
    const isLoggedIn = !!auth.currentUser;

    appDiv.innerHTML = `
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                ${isLoggedIn ? `
                    <button id="back-to-calendar" class="small-btn-neon purple">Back to Calendar</button>
                    <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                    <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
                ` : `
                    <button id="back-to-auth" class="small-btn-neon purple">Back to Login</button>
                `}
            </div>
        </div>

        <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 20px 0; text-transform: uppercase; text-align: center;">Games</h2>

        <div class="games-grid">
            <a href="https://games.tegelhus.uk" class="game-card pink" target="_blank" rel="noopener noreferrer">
                <div class="game-card-icon">👾</div>
                <div class="game-card-title">Games</div>
                <div class="game-card-url">games.tegelhus.uk</div>
            </a>
            <a href="https://atlas.tegelhus.uk" class="game-card cyan" target="_blank" rel="noopener noreferrer">
                <div class="game-card-icon">🌍</div>
                <div class="game-card-title">Atlas</div>
                <div class="game-card-url">atlas.tegelhus.uk</div>
            </a>
        </div>
    `;

    document.getElementById('back-to-calendar')?.addEventListener('click', () => {
        currentView = 'calendar';
        renderCalendar();
    });

    document.getElementById('back-to-auth')?.addEventListener('click', () => {
        currentView = 'calendar';
        renderAuth();
    });

    document.getElementById('my-bookings-btn')?.addEventListener('click', () => {
        showMyBookingsModal(allEvents);
    });

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        signOut(auth);
        showToast("Logged out");
    });
}

function renderYearOverview() {
    appDiv.classList.remove('auth-mode');
    // Generate 12 months starting from current month
    const multiMonthView = generateMultiMonthView(currentYear, currentMonth, 12, allEvents);

    appDiv.innerHTML = `
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                <button id="games-btn" class="games-link">Games</button>
                <button id="back-to-calendar" class="small-btn-neon purple">Back to Calendar</button>
                <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
            </div>
        </div>
        
        <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 20px 0; text-transform: uppercase; text-align: center;">Yearly Overview</h2>

        <div class="year-overview-grid">
            ${multiMonthView.months.map(month => {
                const emptyDays = (month.firstDayOfWeek + 6) % 7; // Monday start padding
                const placeholders = Array(emptyDays).fill(null);
                
                return `
                <div class="month-tile" data-year="${month.year}" data-month="${month.month}">
                    <div class="month-tile-header">
                        ${month.monthName} ${month.year}
                    </div>
                    <div class="month-tile-grid">
                        <div class="mini-day-header">M</div>
                        <div class="mini-day-header">T</div>
                        <div class="mini-day-header">W</div>
                        <div class="mini-day-header">T</div>
                        <div class="mini-day-header">F</div>
                        <div class="mini-day-header">S</div>
                        <div class="mini-day-header">S</div>
                        ${placeholders.map(() => `<div class="mini-day empty"></div>`).join('')}
                        ${month.days.map(day => `
                            <div class="mini-day ${day.events.length > 0 ? 'has-events' : ''}" 
                                 title="${day.date}${day.events.length > 0 ? ': ' + day.events.length + ' events' : ''}"
                                 data-date="${day.date}"
                                 style="${getGradientStyle(day.events)}">
                                ${day.dayOfMonth}
                            </div>
                        `).join('')}
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    `;

    document.getElementById('games-btn')?.addEventListener('click', () => {
        currentView = 'games';
        renderGames();
    });

    document.getElementById('back-to-calendar')?.addEventListener('click', () => {
        currentView = 'calendar';
        renderCalendar();
    });

    document.getElementById('my-bookings-btn')?.addEventListener('click', () => {
        showMyBookingsModal(allEvents);
    });

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        signOut(auth);
        showToast("Logged out");
    });

    document.querySelectorAll('.month-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            currentYear = parseInt(tile.getAttribute('data-year') || '0');
            currentMonth = parseInt(tile.getAttribute('data-month') || '0');
            currentView = 'calendar';
            renderCalendar();
        });
    });

    document.querySelectorAll('.mini-day:not(.empty)').forEach(dayEl => {
        dayEl.addEventListener('click', (e: any) => {
            e.stopPropagation(); // Prevent tile click from triggering

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            dayEl.appendChild(ripple);
            const x = e.clientX - dayEl.getBoundingClientRect().left;
            const y = e.clientY - dayEl.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => ripple.remove(), 600);

            const date = dayEl.getAttribute('data-date');
            if (date) {
                showBookingModal(date, allEvents);
            }
        });
    });
}

function renderCalendar() {
    appDiv.classList.remove('auth-mode');
    const monthView = generateMonthView(currentYear, currentMonth, allEvents);

    const todayObj = new Date();
    const isCurrentMonth = currentYear === todayObj.getFullYear() && currentMonth === todayObj.getMonth();
    const todayStr = `${todayObj.getFullYear()}-${String(todayObj.getMonth() + 1).padStart(2, '0')}-${String(todayObj.getDate()).padStart(2, '0')}`;

    appDiv.innerHTML = `
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                <button id="games-btn" class="games-link">Games</button>
                <button id="chalkboard-btn" class="small-btn-neon pink">Anslagstavla</button>
                <button id="year-overview-btn" class="small-btn-neon cyan">Overview</button>
                ${!isCurrentMonth ? `<button id="go-today-btn" class="small-btn-neon purple">Current Month</button>` : ''}
                <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
            </div>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
            <button id="prev-month">&lt;</button>
            <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 0; text-transform: uppercase; font-size: 1.2rem;">
                ${monthNames[currentMonth]} ${currentYear}
            </h2>
            <button id="next-month">&gt;</button>
        </div>

        <div class="calendar-grid">
            ${monthView.days.map(day => `
                <div class="day-cell ${day.date === todayStr ? 'today' : ''}" data-date="${day.date}">
                    <div class="day-number">${day.dayOfMonth}</div>
                    <div class="event-list">
                        ${day.events.map(ev => {
        const isMine = ev.email === auth.currentUser?.email;
        const startStr = new Date(ev.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endStr = new Date(ev.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `
                                <div class="event ${isMine ? 'my-event' : ''}" 
                                     style="border-color: ${ev.color || '#ff00ff'}" 
                                     title="${startStr} - ${endStr}: ${ev.title}" 
                                     data-id="${ev.id}">
                                    <span class="event-time">${startStr}-${endStr}</span>
                                    <span class="event-title">${ev.title}${isMine ? ' (Me)' : ''}</span>
                                    ${isMine ? `<span class="delete-ev-btn" title="Delete">&times;</span>` : ''}
                                </div>
                            `;
    }).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('games-btn')?.addEventListener('click', () => {
        currentView = 'games';
        renderGames();
    });

    document.getElementById('year-overview-btn')?.addEventListener('click', () => {
        currentView = 'yearOverview';
        renderYearOverview();
    });

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        signOut(auth);
        showToast("Logged out");
    });

    document.getElementById('chalkboard-btn')?.addEventListener('click', () => {
        new Chalkboard(appDiv);
        document.getElementById('back-to-calendar')?.addEventListener('click', () => {
            renderCalendar();
        });
    });

    document.getElementById('my-bookings-btn')?.addEventListener('click', () => {
        showMyBookingsModal(allEvents);
    });

    document.getElementById('go-today-btn')?.addEventListener('click', () => {
        const now = new Date();
        currentYear = now.getFullYear();
        currentMonth = now.getMonth();
        renderCalendar();
    });

    document.getElementById('prev-month')?.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    document.getElementById('next-month')?.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    document.querySelectorAll('.delete-ev-btn').forEach(btn => {
        btn.addEventListener('click', async (e: any) => {
            e.stopPropagation();
            const eventDiv = btn.closest('.event') as HTMLDivElement;
            const eventId = eventDiv.getAttribute('data-id');
            const eventTitle = eventDiv.querySelector('.event-title')?.textContent?.replace(' (Me)', '');

            if (eventId) {
                showConfirmModal(`Delete event "${eventTitle}"?`, async () => {
                    try {
                        await deleteEvent(eventId);
                        showToast("Event deleted");
                    } catch (err: any) {
                        showToast(err.message, 'error');
                    }
                });
            }
        });
    });

    document.querySelectorAll('.day-cell').forEach(cell => {
        cell.addEventListener('click', (e: any) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            cell.appendChild(ripple);
            const x = e.clientX - cell.getBoundingClientRect().left;
            const y = e.clientY - cell.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => ripple.remove(), 600);

            const date = cell.getAttribute('data-date');
            if (date) {
                showBookingModal(date, allEvents);
            }
        });
    });

    const today = new Date();
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        const todayCell = document.querySelector(`.day-cell[data-date="${todayStr}"]`);
        if (todayCell) {
            setTimeout(() => {
                todayCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
                (todayCell as HTMLElement).style.boxShadow = `0 0 20px #00ffff`;
                setTimeout(() => {
                    (todayCell as HTMLElement).style.boxShadow = '';
                }, 2000);
            }, 100);
        }
    }
}

let initialLoad = true;
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal-overlay.active');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        subscribeToEvents((events) => {
            allEvents = events;
            if (currentView === 'yearOverview') {
                renderYearOverview();
            } else if (currentView === 'games') {
                renderGames();
            } else {
                renderCalendar();
            }
            if (initialLoad) {
                hideSplashScreen();
                initialLoad = false;
            }
        });
    } else {
        if (currentView === 'games') {
            renderGames();
        } else {
            renderAuth();
        }
        if (initialLoad) {
            hideSplashScreen();
            initialLoad = false;
        }
    }
});
