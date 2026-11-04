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

import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    sendPasswordResetEmail, 
    confirmPasswordReset, 
    verifyPasswordResetCode 
} from "firebase/auth";
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

// Check for Firebase password reset query parameters in URL
const urlParams = new URLSearchParams(window.location.search);
const authMode = urlParams.get('mode');
const resetOobCode = urlParams.get('oobCode');

// State
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let allEvents: Event[] = [];
let currentView: 'calendar' | 'yearOverview' | 'games' | 'board' | 'forgotPassword' | 'resetPassword' = 
    (authMode === 'resetPassword' && resetOobCode) ? 'resetPassword' : 'calendar';

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

const ICONS = {
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
    eyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19"/><path d="m1 1 22 22"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>`,
    key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M17 6l3 3M15 8l2 2"/></svg>`,
    inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
};

function escapeHtml(str: string) {
    return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

function friendlyAuthError(e: any): string {
    const code: string = e?.code || '';
    const map: Record<string, string> = {
        'auth/invalid-email': 'That email address looks invalid.',
        'auth/user-not-found': 'Wrong email or password.',
        'auth/wrong-password': 'Wrong email or password.',
        'auth/invalid-credential': 'Wrong email or password.',
        'auth/missing-password': 'Please enter your password.',
        'auth/too-many-requests': 'Too many attempts. Take a breather and try again later.',
        'auth/network-request-failed': 'Network error. Check your connection (or start the emulator locally).',
        'auth/expired-action-code': 'This reset link has expired. Request a new one.',
        'auth/invalid-action-code': 'This reset link is invalid or already used.',
        'auth/weak-password': 'Password is too weak. Use at least 6 characters.',
    };
    return map[code] || e?.message || 'Something went wrong.';
}

function authShell(inner: string) {
    // The login view shows the big TEGEL logo inside the card, so only show the small brand on the other views
    const hasCardLogo = inner.includes('class="auth-logo"');
    return `
        <div class="auth-topbar">
            ${hasCardLogo ? '<span></span>' : '<div class="cal-logo">TEGEL</div>'}
            <button id="games-btn" class="games-link">Games</button>
        </div>
        <div class="auth-card">
            <div class="auth-card-glow"></div>
            ${inner}
        </div>
    `;
}

function field(opts: { id: string; type: string; label: string; icon: string; autocomplete: string; disabled?: boolean; toggle?: boolean }) {
    return `
        <label class="auth-field ${opts.toggle ? 'has-toggle' : ''}" for="${opts.id}">
            <span class="auth-field-icon">${opts.icon}</span>
            <input type="${opts.type}" id="${opts.id}" placeholder=" " autocomplete="${opts.autocomplete}" ${opts.disabled ? 'disabled' : ''} />
            <span class="auth-field-label">${opts.label}</span>
            ${opts.toggle ? `<button type="button" class="auth-field-toggle" data-target="${opts.id}" aria-label="Show password">${ICONS.eye}</button>` : ''}
        </label>
    `;
}

function bindAuthCommon() {
    document.getElementById('games-btn')?.addEventListener('click', () => {
        currentView = 'games';
        renderGames();
    });

    document.querySelectorAll<HTMLButtonElement>('.auth-field-toggle').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const input = document.getElementById(btn.dataset.target!) as HTMLInputElement;
            const show = input.type === 'password';
            input.type = show ? 'text' : 'password';
            btn.innerHTML = show ? ICONS.eyeOff : ICONS.eye;
            btn.classList.toggle('active', show);
        });
    });
}

function setLoading(btn: HTMLButtonElement, loading: boolean, label: string) {
    btn.disabled = loading;
    btn.classList.toggle('loading', loading);
    btn.innerHTML = loading
        ? `<span class="spinner"></span><span>${label}</span>`
        : `<span>${label}</span>${ICONS.arrow}`;
}

function shake(el: Element | null) {
    if (!el) return;
    el.classList.remove('shake');
    void (el as HTMLElement).offsetWidth;
    el.classList.add('shake');
}

function renderAuth() {
    appDiv.classList.add('auth-mode');
    appDiv.innerHTML = authShell(`
        <div class="auth-header">
            <div class="auth-logo" data-text="TEGEL">TEGEL</div>
            <p class="auth-subtitle">// ACCESS TERMINAL</p>
        </div>
        <form class="auth-form" id="login-form" novalidate>
            ${field({ id: 'email', type: 'email', label: 'Email', icon: ICONS.mail, autocomplete: 'email' })}
            ${field({ id: 'password', type: 'password', label: 'Password', icon: ICONS.lock, autocomplete: 'current-password', toggle: true })}
            <div class="auth-row">
                <button id="forgot-password-btn" class="link-btn" type="button">Forgot password?</button>
            </div>
            <button id="login-btn" class="btn-neon" type="submit"><span>Login</span>${ICONS.arrow}</button>
        </form>
    `);

    bindAuthCommon();

    document.getElementById('forgot-password-btn')?.addEventListener('click', () => {
        currentView = 'forgotPassword';
        renderForgotPassword((document.getElementById('email') as HTMLInputElement)?.value);
    });

    const form = document.getElementById('login-form') as HTMLFormElement;
    const loginBtn = document.getElementById('login-btn') as HTMLButtonElement;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const password = (document.getElementById('password') as HTMLInputElement).value;
        if (!email || !password) {
            shake(document.querySelector('.auth-card'));
            showToast('Please enter email and password.', 'error');
            return;
        }
        try {
            setLoading(loginBtn, true, 'Connecting...');
            await signInWithEmailAndPassword(auth, email, password);
            showToast("Logged in successfully!");
        } catch (err: any) {
            setLoading(loginBtn, false, 'Login');
            shake(document.querySelector('.auth-card'));
            showToast(friendlyAuthError(err), 'error');
        }
    });
}

function renderForgotPassword(prefillEmail = '') {
    appDiv.classList.add('auth-mode');
    appDiv.innerHTML = authShell(`
        <div class="auth-header">
            <div class="auth-badge">${ICONS.key}</div>
            <h2 class="auth-title">Forgot password</h2>
            <p class="auth-description">No worries. Enter your email and we'll beam you a reset link.</p>
        </div>
        <form class="auth-form" id="forgot-form" novalidate>
            ${field({ id: 'reset-email', type: 'email', label: 'Email', icon: ICONS.mail, autocomplete: 'email' })}
            <button id="send-reset-btn" class="btn-neon" type="submit"><span>Send reset link</span>${ICONS.arrow}</button>
            <button id="back-to-login-btn" class="link-btn back" type="button">${ICONS.back}<span>Back to login</span></button>
        </form>
    `);

    bindAuthCommon();

    const emailInput = document.getElementById('reset-email') as HTMLInputElement;
    emailInput.value = prefillEmail;
    emailInput.focus();

    document.getElementById('back-to-login-btn')?.addEventListener('click', () => {
        currentView = 'calendar';
        renderAuth();
    });

    const sendBtn = document.getElementById('send-reset-btn') as HTMLButtonElement;

    document.getElementById('forgot-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
            shake(document.querySelector('.auth-card'));
            showToast("Please enter your email.", 'error');
            return;
        }
        try {
            setLoading(sendBtn, true, 'Sending...');
            await sendPasswordResetEmail(auth, email, { url: window.location.origin });
            renderForgotPasswordSent(email);
        } catch (err: any) {
            setLoading(sendBtn, false, 'Send reset link');
            shake(document.querySelector('.auth-card'));
            showToast(friendlyAuthError(err), 'error');
        }
    });
}

function renderForgotPasswordSent(email: string) {
    appDiv.innerHTML = authShell(`
        <div class="auth-header success">
            <div class="auth-badge success pulse">${ICONS.inbox}</div>
            <h2 class="auth-title">Check your inbox</h2>
            <p class="auth-description">
                If an account exists for <strong class="auth-email">${escapeHtml(email)}</strong>,
                a reset link is on its way. Don't forget to check spam.
            </p>
        </div>
        <div class="auth-form">
            <button id="back-to-login-btn" class="btn-neon" type="button"><span>Back to login</span>${ICONS.arrow}</button>
            <button id="resend-btn" class="link-btn" type="button">Didn't get it? Try again</button>
        </div>
    `);

    bindAuthCommon();

    document.getElementById('back-to-login-btn')?.addEventListener('click', () => {
        currentView = 'calendar';
        renderAuth();
    });
    document.getElementById('resend-btn')?.addEventListener('click', () => {
        renderForgotPassword(email);
    });
}

function passwordStrength(pw: string): number {
    let score = 0;
    if (pw.length >= 6) score++;
    if (pw.length >= 10) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;
    return score;
}

function renderResetPassword(oobCode: string) {
    appDiv.classList.add('auth-mode');
    appDiv.innerHTML = authShell(`
        <div class="auth-header">
            <div class="auth-badge" id="reset-badge">${ICONS.lock}</div>
            <h2 class="auth-title">New password</h2>
            <p class="auth-description" id="reset-status"><span class="spinner small"></span> Verifying reset link...</p>
        </div>
        <form class="auth-form" id="reset-form" novalidate>
            ${field({ id: 'new-password', type: 'password', label: 'New password', icon: ICONS.lock, autocomplete: 'new-password', disabled: true, toggle: true })}
            <div class="strength-meter" id="strength-meter" data-score="0">
                <span></span><span></span><span></span><span></span>
            </div>
            ${field({ id: 'confirm-password', type: 'password', label: 'Confirm password', icon: ICONS.lock, autocomplete: 'new-password', disabled: true, toggle: true })}
            <button id="save-new-password-btn" class="btn-neon" type="submit" disabled><span>Save new password</span>${ICONS.arrow}</button>
            <button id="cancel-reset-btn" class="link-btn back" type="button">${ICONS.back}<span>Back to login</span></button>
        </form>
    `);

    bindAuthCommon();

    const statusEl = document.getElementById('reset-status')!;
    const badge = document.getElementById('reset-badge')!;
    const newPasswordInput = document.getElementById('new-password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;
    const saveBtn = document.getElementById('save-new-password-btn') as HTMLButtonElement;
    const meter = document.getElementById('strength-meter')!;

    newPasswordInput.addEventListener('input', () => {
        meter.dataset.score = String(passwordStrength(newPasswordInput.value));
    });

    verifyPasswordResetCode(auth, oobCode)
        .then((email) => {
            statusEl.innerHTML = `Choose a new password for <strong class="auth-email">${escapeHtml(email)}</strong>`;
            newPasswordInput.disabled = false;
            confirmPasswordInput.disabled = false;
            saveBtn.disabled = false;
            newPasswordInput.focus();
        })
        .catch((e: any) => {
            badge.classList.add('error');
            badge.innerHTML = ICONS.alert;
            statusEl.textContent = friendlyAuthError(e);
            saveBtn.style.display = 'none';
            document.querySelectorAll('#reset-form .auth-field, #strength-meter').forEach((el) => ((el as HTMLElement).style.display = 'none'));
            const retry = document.createElement('button');
            retry.type = 'button';
            retry.className = 'btn-neon';
            retry.innerHTML = `<span>Request a new link</span>${ICONS.arrow}`;
            retry.addEventListener('click', () => {
                window.history.replaceState({}, document.title, window.location.pathname);
                currentView = 'forgotPassword';
                renderForgotPassword();
            });
            document.getElementById('reset-form')?.prepend(retry);
        });

    const cleanupUrlAndGoToLogin = () => {
        window.history.replaceState({}, document.title, window.location.pathname);
        currentView = 'calendar';
        renderAuth();
    };

    document.getElementById('cancel-reset-btn')?.addEventListener('click', cleanupUrlAndGoToLogin);

    document.getElementById('reset-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!newPassword || newPassword.length < 6) {
            shake(document.querySelector('.auth-card'));
            showToast("Password must be at least 6 characters.", 'error');
            return;
        }
        if (newPassword !== confirmPassword) {
            shake(document.querySelector('.auth-card'));
            showToast("Passwords do not match.", 'error');
            return;
        }

        try {
            setLoading(saveBtn, true, 'Saving...');
            await confirmPasswordReset(auth, oobCode, newPassword);
            window.history.replaceState({}, document.title, window.location.pathname);
            appDiv.innerHTML = authShell(`
                <div class="auth-header success">
                    <div class="auth-badge success pulse">${ICONS.check}</div>
                    <h2 class="auth-title">Password updated</h2>
                    <p class="auth-description">You're all set. Log in with your new password.</p>
                </div>
                <div class="auth-form">
                    <button id="go-login-btn" class="btn-neon" type="button"><span>Go to login</span>${ICONS.arrow}</button>
                </div>
            `);
            bindAuthCommon();
            document.getElementById('go-login-btn')?.addEventListener('click', () => {
                currentView = 'calendar';
                renderAuth();
            });
        } catch (err: any) {
            setLoading(saveBtn, false, 'Save new password');
            shake(document.querySelector('.auth-card'));
            showToast(friendlyAuthError(err), 'error');
        }
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

// ===================== Calendar helpers =====================
const CAL_ICONS = {
    chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
    year: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
    board: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
    games: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="12" rx="5"/><path d="M7 11v4M5 13h4M15.5 12h.01M18 14h.01"/></svg>`,
    list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
    logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
};

const EVENT_PALETTE = ['#ff00ff', '#00ffff', '#9d00ff', '#ff3d9a', '#39ff88', '#ffb84d', '#4d7cff', '#ff6b4d'];
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const pad2 = (n: number) => String(n).padStart(2, '0');
const toDateStr = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const parseDateStr = (s: string) => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
};
const fmtTime = (ts: number) => new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function eventsForDate(dateStr: string, events: Event[]) {
    const start = parseDateStr(dateStr).getTime();
    const end = start + 24 * 60 * 60 * 1000;
    return events.filter(e => e.start < end && e.end > start).sort((a, b) => a.start - b.start);
}

function relativeDayLabel(dateStr: string) {
    const today = new Date();
    const todayStr = toDateStr(today);
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    if (dateStr === todayStr) return 'Today';
    if (dateStr === toDateStr(tomorrow)) return 'Tomorrow';
    return parseDateStr(dateStr).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

let selectedDate: string | null = null;
let calendarSlideDir: 'left' | 'right' | null = null;
let calendarAnimateNext = true;

function changeMonth(delta: number) {
    currentMonth += delta;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    calendarSlideDir = delta > 0 ? 'left' : 'right';
    calendarAnimateNext = true;
    selectedDate = null;
    renderCalendar();
}

function closeModal(modal: HTMLElement) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
}

// ===================== Shared app header =====================
type MainView = 'calendar' | 'yearOverview' | 'board' | 'games';

function appHeader(active: MainView) {
    const user = auth.currentUser;
    const me = user?.email || '';
    const tab = (view: MainView, icon: string, label: string) =>
        `<button class="cal-tab ${active === view ? 'active' : ''}" data-view="${view}">${icon}<span>${label}</span></button>`;

    return `
        <header class="cal-header">
            <div class="cal-logo">TEGEL</div>
            ${user ? `
                <div class="user-menu">
                    <button class="user-avatar" id="user-avatar" aria-label="Account menu">${escapeHtml((me[0] || '?').toUpperCase())}</button>
                    <div class="user-dropdown" id="user-dropdown">
                        <div class="user-dropdown-email">${escapeHtml(me)}</div>
                        <button class="user-dropdown-item" id="my-bookings-btn">${CAL_ICONS.list}<span>My bookings</span></button>
                        <button class="user-dropdown-item danger" id="logout-btn">${CAL_ICONS.logout}<span>Log out</span></button>
                    </div>
                </div>
            ` : `
                <button class="cal-today-btn" id="header-login-btn">Log in</button>
            `}
        </header>
        ${user ? `
            <nav class="cal-tabs">
                ${tab('calendar', CAL_ICONS.calendar, 'Calendar')}
                ${tab('yearOverview', CAL_ICONS.year, 'Year')}
                ${tab('board', CAL_ICONS.board, 'Board')}
                ${tab('games', CAL_ICONS.games, 'Games')}
            </nav>
        ` : ''}
    `;
}

function navigateTo(view: MainView) {
    if (view === 'board') {
        currentView = 'board';
        new Chalkboard(appDiv);
        document.getElementById('back-to-calendar')?.addEventListener('click', () => navigateTo('calendar'));
        return;
    }
    currentView = view;
    if (view === 'calendar') renderCalendar();
    else if (view === 'yearOverview') renderYearOverview();
    else renderGames();
}

function bindAppHeader() {
    document.querySelectorAll<HTMLButtonElement>('.cal-tab[data-view]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            navigateTo(btn.dataset.view as MainView);
        });
    });

    const dropdown = document.getElementById('user-dropdown');
    document.getElementById('user-avatar')?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown?.classList.toggle('open');
    });

    document.getElementById('my-bookings-btn')?.addEventListener('click', () => {
        dropdown?.classList.remove('open');
        showMyBookingsModal(allEvents);
    });

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        signOut(auth);
        showToast("Logged out");
    });

    document.getElementById('header-login-btn')?.addEventListener('click', () => {
        currentView = 'calendar';
        renderAuth();
    });
}


function showBookingModal(dateStr: string, events: Event[]) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const user = auth.currentUser;
    const dateObj = parseDateStr(dateStr);
    const dayEvents = eventsForDate(dateStr, events);

    // Sensible default: next full hour if booking today, otherwise noon
    const now = new Date();
    let startHour = 12;
    if (dateStr === toDateStr(now)) startHour = Math.min(now.getHours() + 1, 22);
    const defaultStart = `${pad2(startHour)}:00`;
    const defaultEnd = `${pad2(startHour + 1)}:00`;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
                <div class="sheet-date-badge">
                    <span>${dateObj.toLocaleDateString('en-GB', { month: 'short' })}</span>
                    <strong>${dateObj.getDate()}</strong>
                </div>
                <div>
                    <h2>New booking</h2>
                    <p>${dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
            </div>
            <div class="form-group">
                <label for="event-title">Title</label>
                <input type="text" id="event-title" placeholder="Synth Party" value="${escapeHtml(user?.email || '')}" />
            </div>
            <div class="time-row">
                <div class="form-group">
                    <label for="event-start">Start</label>
                    <input type="time" id="event-start" value="${defaultStart}" />
                </div>
                <span class="time-arrow">${CAL_ICONS.chevronRight}</span>
                <div class="form-group">
                    <label for="event-end">End</label>
                    <input type="time" id="event-end" value="${defaultEnd}" />
                </div>
            </div>
            <div class="duration-chips">
                ${[30, 60, 120, 180].map(m => `<button type="button" class="duration-chip ${m === 60 ? 'active' : ''}" data-min="${m}">${m < 60 ? m + 'm' : m / 60 + 'h'}</button>`).join('')}
            </div>
            ${dayEvents.length ? `
                <div class="taken-slots">
                    <div class="taken-label">Already booked</div>
                    <div class="taken-list">
                        ${dayEvents.map(ev => `
                            <span class="taken-chip" style="--ev:${ev.color || '#ff00ff'}">
                                ${fmtTime(ev.start)}–${fmtTime(ev.end)} · ${escapeHtml(ev.title)}
                            </span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            <div class="modal-actions">
                <button id="confirm-booking" class="btn-neon"><span>Book it</span>${CAL_ICONS.bolt}</button>
                <button id="cancel-booking" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const startInput = document.getElementById('event-start') as HTMLInputElement;
    const endInput = document.getElementById('event-end') as HTMLInputElement;

    const setDuration = (minutes: number) => {
        const [h, m] = startInput.value.split(':').map(Number);
        const total = Math.min(h * 60 + m + minutes, 23 * 60 + 59);
        endInput.value = `${pad2(Math.floor(total / 60))}:${pad2(total % 60)}`;
    };

    modal.querySelectorAll<HTMLButtonElement>('.duration-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            modal.querySelectorAll('.duration-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            setDuration(Number(chip.dataset.min));
        });
    });

    startInput.addEventListener('change', () => {
        const active = modal.querySelector<HTMLButtonElement>('.duration-chip.active');
        if (active) setDuration(Number(active.dataset.min));
    });
    endInput.addEventListener('input', () => {
        modal.querySelectorAll('.duration-chip').forEach(c => c.classList.remove('active'));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
    document.getElementById('cancel-booking')?.addEventListener('click', () => closeModal(modal));

    const handleBooking = async () => {
        const title = (document.getElementById('event-title') as HTMLInputElement).value.trim();
        const startTimeStr = startInput.value;
        const endTimeStr = endInput.value;

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
            shake(modal.querySelector('.modal-content'));
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
                    color: EVENT_PALETTE[Math.floor(Math.random() * EVENT_PALETTE.length)]
                });
                showToast("Event booked!");
                selectedDate = dateStr;
                closeModal(modal);
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

const GAMES = [
    {
        url: 'https://games.tegelhus.uk',
        host: 'games.tegelhus.uk',
        title: 'Games',
        tagline: 'The Tegel arcade. Pick a cabinet and start playing.',
        icon: '👾',
        tag: 'ARCADE',
        theme: 'pink',
    },
    {
        url: 'https://atlas.tegelhus.uk',
        host: 'atlas.tegelhus.uk',
        title: 'Atlas',
        tagline: 'Explore the world, one map at a time.',
        icon: '🌍',
        tag: 'EXPLORE',
        theme: 'cyan',
    },
];

function renderGames() {
    appDiv.classList.remove('auth-mode');

    appDiv.innerHTML = `
        <div class="cal arcade">
            ${appHeader('games')}

            <section class="arcade-hero">
                <div class="arcade-hero-sun"></div>
                <div class="arcade-hero-grid"></div>
                <div class="arcade-hero-content">
                    <span class="arcade-kicker">// PLAYER ONE READY</span>
                    <h2 class="arcade-title" data-text="ARCADE">ARCADE</h2>
                    <p class="arcade-sub">Insert coin<span class="arcade-blink">_</span></p>
                </div>
            </section>

            <div class="arcade-grid">
                ${GAMES.map((g, i) => `
                    <a href="${g.url}" class="arcade-card ${g.theme}" target="_blank" rel="noopener noreferrer" style="--i:${i}">
                        <div class="arcade-card-art">
                            <div class="arcade-card-sun"></div>
                            <div class="arcade-card-floor"></div>
                            <div class="arcade-card-icon">${g.icon}</div>
                            <span class="arcade-card-tag">${g.tag}</span>
                        </div>
                        <div class="arcade-card-body">
                            <div class="arcade-card-title">${g.title}</div>
                            <p class="arcade-card-tagline">${g.tagline}</p>
                            <div class="arcade-card-footer">
                                <span class="arcade-card-host">${g.host}</span>
                                <span class="arcade-card-play">PLAY ${CAL_ICONS.chevronRight}</span>
                            </div>
                        </div>
                        <div class="arcade-card-glare"></div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    bindAppHeader();

    // 3D tilt + glare following the pointer (mouse only)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll<HTMLElement>('.arcade-card').forEach(card => {
            card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width;
                const y = (e.clientY - r.top) / r.height;
                card.style.setProperty('--rx', `${(0.5 - y) * 10}deg`);
                card.style.setProperty('--ry', `${(x - 0.5) * 12}deg`);
                card.style.setProperty('--gx', `${x * 100}%`);
                card.style.setProperty('--gy', `${y * 100}%`);
            });
            card.addEventListener('pointerleave', () => {
                card.style.setProperty('--rx', '0deg');
                card.style.setProperty('--ry', '0deg');
            });
        });
    }
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
    const me = auth.currentUser?.email || '';
    const nowTs = Date.now();

    const todayObj = new Date();
    const todayStr = toDateStr(todayObj);
    const isCurrentMonth = currentYear === todayObj.getFullYear() && currentMonth === todayObj.getMonth();
    const monthPrefix = `${currentYear}-${pad2(currentMonth + 1)}`;

    if (!selectedDate || !selectedDate.startsWith(monthPrefix)) {
        selectedDate = isCurrentMonth ? todayStr : monthView.days[0].date;
    }

    const leading = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7; // Monday start
    const totalCells = Math.ceil((leading + monthView.days.length) / 7) * 7;
    const trailing = totalCells - leading - monthView.days.length;

    const monthBookings = monthView.days.reduce((n, d) => n + d.events.length, 0);
    const nextBooking = allEvents
        .filter(e => e.email === me && e.end >= nowTs)
        .sort((a, b) => a.start - b.start)[0];

    const renderDay = (day: typeof monthView.days[number], index: number) => {
        const dow = (leading + index) % 7;
        const classes = [
            'cal-day',
            day.date === todayStr ? 'is-today' : '',
            day.date === selectedDate ? 'is-selected' : '',
            day.date < todayStr ? 'is-past' : '',
            dow >= 5 ? 'is-weekend' : '',
            day.events.length ? 'has-events' : '',
            day.events.some(e => e.email === me) ? 'has-mine' : '',
        ].filter(Boolean).join(' ');

        const dots = day.events.slice(0, 3).map(e => `<i style="--ev:${e.color || '#ff00ff'}"></i>`).join('');
        const more = day.events.length > 3 ? `<em>+${day.events.length - 3}</em>` : '';
        const chips = day.events.slice(0, 3).map(ev => {
            const mine = ev.email === me;
            return `
                <span class="cal-chip ${mine ? 'mine' : ''}" style="--ev:${ev.color || '#ff00ff'}" title="${fmtTime(ev.start)}–${fmtTime(ev.end)}: ${escapeHtml(ev.title)}">
                    <b>${fmtTime(ev.start)}</b> ${escapeHtml(ev.title)}
                </span>`;
        }).join('');
        const chipMore = day.events.length > 3 ? `<span class="cal-chip-more">+${day.events.length - 3} more</span>` : '';

        return `
            <div class="${classes}" role="button" tabindex="0" data-date="${day.date}" style="--i:${index}"
                 aria-label="${day.date}, ${day.events.length} bookings">
                <span class="cal-day-num">${day.dayOfMonth}</span>
                <span class="cal-dots">${dots}${more}</span>
                <span class="cal-chips">${chips}${chipMore}</span>
                <span class="cal-quick-add" data-date="${day.date}" title="Book">${CAL_ICONS.plus}</span>
            </div>`;
    };

    const selEvents = eventsForDate(selectedDate, allEvents);
    const selDateObj = parseDateStr(selectedDate);

    const agendaItems = selEvents.map(ev => {
        const mine = ev.email === me;
        const live = ev.start <= nowTs && ev.end > nowTs;
        return `
            <div class="agenda-item ${mine ? 'mine' : ''} ${ev.end < nowTs ? 'done' : ''}" style="--ev:${ev.color || '#ff00ff'}">
                <div class="agenda-time">
                    <span>${fmtTime(ev.start)}</span>
                    <span>${fmtTime(ev.end)}</span>
                </div>
                <div class="agenda-info">
                    <div class="agenda-title">${escapeHtml(ev.title)}${live ? '<span class="live-badge">LIVE</span>' : ''}</div>
                    <div class="agenda-owner">${mine ? 'You' : escapeHtml(ev.email || 'Unknown')}</div>
                </div>
                ${mine ? `<button class="agenda-delete" data-id="${ev.id}" data-title="${escapeHtml(ev.title)}" aria-label="Delete booking">${CAL_ICONS.trash}</button>` : ''}
            </div>`;
    }).join('');

    const slideClass = [
        calendarSlideDir ? `slide-${calendarSlideDir}` : '',
        calendarAnimateNext ? 'animate' : '',
    ].join(' ');
    calendarSlideDir = null;
    calendarAnimateNext = false;

    appDiv.innerHTML = `
        <div class="cal">
            ${appHeader('calendar')}

            ${nextBooking ? `
                <button class="cal-next-up" id="next-up" data-date="${toDateStr(new Date(nextBooking.start))}" style="--ev:${nextBooking.color || '#00ffff'}">
                    <span class="next-up-label">${nextBooking.start <= nowTs ? 'Now' : 'Next up'}</span>
                    <span class="next-up-title">${escapeHtml(nextBooking.title)}</span>
                    <span class="next-up-when">${relativeDayLabel(toDateStr(new Date(nextBooking.start)))} · ${fmtTime(nextBooking.start)}</span>
                </button>
            ` : ''}

            <div class="cal-body">
                <section class="cal-panel">
                    <div class="cal-monthbar">
                        <button class="cal-nav-btn" id="prev-month" aria-label="Previous month">${CAL_ICONS.chevronLeft}</button>
                        <div class="cal-month-title">
                            <h2>${monthNames[currentMonth]}</h2>
                            <span>${currentYear} · ${monthBookings} booking${monthBookings === 1 ? '' : 's'}</span>
                        </div>
                        ${!isCurrentMonth ? `<button class="cal-today-btn" id="go-today-btn">Today</button>` : ''}
                        <button class="cal-nav-btn" id="next-month" aria-label="Next month">${CAL_ICONS.chevronRight}</button>
                    </div>

                    <div class="cal-weekdays">
                        ${WEEKDAYS.map((d, i) => `<span class="${i >= 5 ? 'weekend' : ''}"><b>${d}</b><i>${d[0]}</i></span>`).join('')}
                    </div>

                    <div class="cal-grid ${slideClass}" id="cal-grid">
                        ${Array(leading).fill('<div class="cal-day is-blank"></div>').join('')}
                        ${monthView.days.map(renderDay).join('')}
                        ${Array(trailing).fill('<div class="cal-day is-blank"></div>').join('')}
                    </div>
                    <p class="cal-hint">Swipe to change month · tap a day to see bookings</p>
                </section>

                <aside class="cal-agenda" id="cal-agenda">
                    <div class="cal-agenda-head">
                        <div>
                            <div class="cal-agenda-weekday">${selectedDate === todayStr ? 'Today' : selDateObj.toLocaleDateString('en-GB', { weekday: 'long' })}</div>
                            <div class="cal-agenda-date">${selDateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</div>
                        </div>
                        <span class="cal-agenda-count">${selEvents.length} booked</span>
                    </div>
                    <div class="cal-agenda-list">
                        ${selEvents.length ? agendaItems : `
                            <div class="agenda-empty">
                                ${CAL_ICONS.moon}
                                <p>Nothing booked.<br/>The tegel is all yours.</p>
                            </div>
                        `}
                    </div>
                    <button class="btn-neon" id="book-day-btn">${CAL_ICONS.plus}<span>Book this day</span></button>
                </aside>
            </div>
        </div>
    `;

    bindAppHeader();

    // --- Month navigation ---
    document.getElementById('prev-month')?.addEventListener('click', () => changeMonth(-1));
    document.getElementById('next-month')?.addEventListener('click', () => changeMonth(1));

    document.getElementById('go-today-btn')?.addEventListener('click', () => {
        const now = new Date();
        calendarSlideDir = (now.getFullYear() * 12 + now.getMonth()) > (currentYear * 12 + currentMonth) ? 'left' : 'right';
        currentYear = now.getFullYear();
        currentMonth = now.getMonth();
        selectedDate = toDateStr(now);
        calendarAnimateNext = true;
        renderCalendar();
    });

    document.getElementById('next-up')?.addEventListener('click', (e) => {
        const date = (e.currentTarget as HTMLElement).dataset.date!;
        const d = parseDateStr(date);
        currentYear = d.getFullYear();
        currentMonth = d.getMonth();
        selectedDate = date;
        renderCalendar();
        document.getElementById('cal-agenda')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Swipe left/right on the grid to change month
    const grid = document.getElementById('cal-grid')!;
    let touchX = 0, touchY = 0;
    grid.addEventListener('touchstart', (e) => {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
    }, { passive: true });
    grid.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchX;
        const dy = e.changedTouches[0].clientY - touchY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            changeMonth(dx < 0 ? 1 : -1);
        }
    }, { passive: true });

    // --- Day selection ---
    const selectDay = (date: string) => {
        selectedDate = date;
        renderCalendar();
        if (window.matchMedia('(max-width: 1023px)').matches) {
            document.getElementById('cal-agenda')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    document.querySelectorAll<HTMLElement>('.cal-day:not(.is-blank)').forEach(cell => {
        cell.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.closest('.cal-quick-add')) {
                showBookingModal(cell.dataset.date!, allEvents);
                return;
            }
            if (cell.dataset.date === selectedDate) {
                showBookingModal(cell.dataset.date!, allEvents);
                return;
            }
            selectDay(cell.dataset.date!);
        });
        cell.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                cell.click();
            }
        });
    });

    document.getElementById('book-day-btn')?.addEventListener('click', () => {
        showBookingModal(selectedDate!, allEvents);
    });

    document.querySelectorAll<HTMLButtonElement>('.agenda-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const eventId = btn.dataset.id;
            if (!eventId) return;
            showConfirmModal(`Delete "${escapeHtml(btn.dataset.title || '')}"?`, async () => {
                try {
                    await deleteEvent(eventId);
                    showToast("Booking deleted");
                } catch (err: any) {
                    showToast(err.message, 'error');
                }
            });
        });
    });
}

let initialLoad = true;
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown?.classList.contains('open') && !(e.target as HTMLElement).closest('.user-menu')) {
        dropdown.classList.remove('open');
    }
});

window.addEventListener('keydown', (e) => {
    const target = e.target as HTMLElement;
    const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName);
    if (currentView === 'calendar' && !typing && !document.querySelector('.modal-overlay') && document.getElementById('cal-grid')) {
        if (e.key === 'ArrowLeft') changeMonth(-1);
        if (e.key === 'ArrowRight') changeMonth(1);
    }
    if (e.key === 'Escape') {
        document.getElementById('user-dropdown')?.classList.remove('open');
        const modal = document.querySelector('.modal-overlay.active');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
});

onAuthStateChanged(auth, (user) => {
    if (user && currentView !== 'resetPassword') {
        subscribeToEvents((events) => {
            allEvents = events;
            if (currentView === 'board') {
                // Don't kick the user off the chalkboard when bookings change
            } else if (currentView === 'yearOverview') {
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
        } else if (currentView === 'resetPassword' && resetOobCode) {
            renderResetPassword(resetOobCode);
        } else if (currentView === 'forgotPassword') {
            renderForgotPassword();
        } else {
            renderAuth();
        }
        if (initialLoad) {
            hideSplashScreen();
            initialLoad = false;
        }
    }
});
