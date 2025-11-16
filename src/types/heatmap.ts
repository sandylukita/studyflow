/**
 * Calm Flow Heatmap System
 * PRD Section 8: 4-week emotional consistency map
 */

import { Feeling } from './session';

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  dominantFeeling: Feeling | null; // Most frequent feeling, null if no session
  sessionCount: number;
  totalDuration: number; // in seconds
  hasSession: boolean;
  subjects: string[]; // All subjects studied this day
  isToday: boolean; // Latest cell has "breathing pulse" animation
}

export interface HeatmapWeek {
  weekNumber: number;
  days: HeatmapDay[];
}

export interface HeatmapData {
  weeks: HeatmapWeek[]; // 4 weeks (PRD Section 8)
  startDate: string;
  endDate: string;
}

// Heatmap tap modal data (PRD Section 8)
export interface HeatmapDayDetail {
  date: string;
  feeling: Feeling;
  duration: number;
  subject: string | null;
  sessionCount: number;
  notes?: string;
}

export interface SafetyMeterDay {
  date: string; // YYYY-MM-DD
  dayOfWeek: string; // Mon, Tue, etc.
  showedUp: boolean;
  sessionCount: number;
}
