import { describe, it, expect } from 'vitest';
import { generateMonthView, isOverlap } from './calendar';
import { Event } from './types';

describe('Calendar Logic', () => {
  it('should generate a month view with the correct number of days', () => {
    const monthView = generateMonthView(2024, 0, []); // Jan 2024
    expect(monthView.days.length).toBe(31);
    expect(monthView.days[0].dayOfMonth).toBe(1);
  });

  it('should detect overlaps correctly', () => {
    const existingEvents: Event[] = [
      { id: '1', userId: 'u1', title: 'E1', start: 100, end: 200, email: 'e1@test.com' }
    ];
    
    // new_event.start < existing_event.end AND new_event.end > existing_event.start
    
    // Completely before
    expect(isOverlap({ start: 0, end: 50 }, existingEvents)).toBe(false);
    
    // Completely after
    expect(isOverlap({ start: 250, end: 300 }, existingEvents)).toBe(false);
    
    // Overlap start
    expect(isOverlap({ start: 50, end: 150 }, existingEvents)).toBe(true);
    
    // Overlap end
    expect(isOverlap({ start: 150, end: 250 }, existingEvents)).toBe(true);
    
    // Completely inside
    expect(isOverlap({ start: 120, end: 180 }, existingEvents)).toBe(true);
    
    // Completely surrounding
    expect(isOverlap({ start: 50, end: 250 }, existingEvents)).toBe(true);
  });

  it('should filter events for the specific day correctly', () => {
      const jan1 = new Date(2024, 0, 1).getTime();
      const jan1End = new Date(2024, 0, 1, 23, 59, 59, 999).getTime();
      
      const events: Event[] = [
          { id: '1', userId: 'u1', title: 'Jan 1 Event', start: jan1 + 1000, end: jan1 + 2000, email: 'e1@test.com' },
          { id: '2', userId: 'u1', title: 'Jan 2 Event', start: jan1End + 1000, end: jan1End + 2000, email: 'e2@test.com' }
      ];
      
      const monthView = generateMonthView(2024, 0, events);
      expect(monthView.days[0].events.length).toBe(1);
      expect(monthView.days[0].events[0].title).toBe('Jan 1 Event');
  });
});
