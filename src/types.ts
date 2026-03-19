export interface Event {
  id: string;
  userId: string;
  title: string;
  start: number; // Unix timestamp
  end: number;   // Unix timestamp
  color?: string;
  email: string;
}

export interface ChalkPoint {
  x: number;
  y: number;
}

export interface ChalkLine {
  id: string;
  userId: string;
  color: string;
  width: number;
  points: ChalkPoint[];
}

export interface Day {
  date: string; // ISO format or similar
  dayOfMonth: number;
  events: Event[];
}

export interface MonthView {
  days: Day[];
}

export interface MonthData {
  year: number;
  month: number;
  monthName: string;
  days: Day[];
}

export interface MultiMonthView {
  months: MonthData[];
}
