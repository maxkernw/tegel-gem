export interface Event {
  id: string;
  userId: string;
  title: string;
  start: number; // Unix timestamp
  end: number;   // Unix timestamp
  color?: string;
  email: string;
}

export interface Day {
  date: string; // ISO format or similar
  dayOfMonth: number;
  events: Event[];
}

export interface MonthView {
  days: Day[];
}
