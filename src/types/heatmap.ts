import { CalmLevel } from './session';

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  calmLevel: CalmLevel | null; // null if no session
  sessionCount: number;
  totalDuration: number; // in seconds
  hasSession: boolean;
}

export interface HeatmapWeek {
  weekNumber: number;
  days: HeatmapDay[];
}

export interface HeatmapData {
  weeks: HeatmapWeek[];
  startDate: string;
  endDate: string;
}

export interface SafetyMeterDay {
  date: string; // YYYY-MM-DD
  dayOfWeek: string; // Mon, Tue, etc.
  showedUp: boolean;
  sessionCount: number;
}
