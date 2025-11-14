export interface Session {
  id: string;
  subject: string;
  startTime: number; // Unix timestamp
  endTime: number | null; // null if session is ongoing
  duration: number; // in seconds
  calmLevel: CalmLevel;
  wasCompleted: boolean;
  reflectionNote?: string;
  createdAt: number;
  updatedAt: number;
  syncedToCloud: boolean;
}

export type CalmLevel = 1 | 2 | 3 | 4 | 5;

export const CalmLevelLabels: Record<CalmLevel, string> = {
  1: 'Very Stressed',
  2: 'Stressed',
  3: 'Moderate',
  4: 'Calm',
  5: 'Very Calm',
};

export interface ActiveSession {
  session: Session;
  pausedAt: number | null;
  totalPauseTime: number;
}

export interface SessionStats {
  totalSessions: number;
  totalStudyTime: number; // in seconds
  averageCalmLevel: number;
  currentStreak: number;
  longestStreak: number;
  showUpsLast7Days: number;
  showUpsLast30Days: number;
}

export interface DailySessionSummary {
  date: string; // YYYY-MM-DD format
  sessions: Session[];
  totalDuration: number;
  averageCalmLevel: number;
  subjects: string[];
}
