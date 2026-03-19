import { Event, Day, MonthView, MultiMonthView, MonthData } from './types';

export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function generateMonthView(year: number, month: number, events: Event[]): MonthView {
    const days: Day[] = [];
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // We want a grid that might include days from prev/next months for a full 7x(4-6) grid
    // But per instructions: "Generate a 'Month View' object containing an array of 28-31 day objects."
    
    for (let d = 1; d <= lastDay.getDate(); d++) {
        const currentDate = new Date(year, month, d);
        const startOfDay = currentDate.getTime();
        const endOfDay = new Date(year, month, d, 23, 59, 59, 999).getTime();
        
        const dayEvents = events.filter(event => {
            // Event overlaps with this day if it starts before end of day AND ends after start of day
            return event.start < endOfDay && event.end > startOfDay;
        });

        // Manual formatting for YYYY-MM-DD in local time
        const yyyy = currentDate.getFullYear();
        const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const dateStr = `${yyyy}-${mm}-${dd}`;
        
        days.push({
            date: dateStr,
            dayOfMonth: d,
            events: dayEvents
        });
    }
    
    return { days };
}

export function generateMultiMonthView(startYear: number, startMonth: number, count: number, events: Event[]): MultiMonthView {
    const months: MonthData[] = [];
    let currentY = startYear;
    let currentM = startMonth;

    for (let i = 0; i < count; i++) {
        const monthView = generateMonthView(currentY, currentM, events);
        months.push({
            year: currentY,
            month: currentM,
            monthName: monthNames[currentM],
            days: monthView.days
        });

        currentM++;
        if (currentM > 11) {
            currentM = 0;
            currentY++;
        }
    }

    return { months };
}

export function isOverlap(newEvent: { start: number, end: number }, existingEvents: Event[]): boolean {
    return existingEvents.some(event => {
        // new_event.start < existing_event.end AND new_event.end > existing_event.start
        return newEvent.start < event.end && newEvent.end > event.start;
    });
}
