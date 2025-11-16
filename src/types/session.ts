export type SessionType = '2min' | 'focus_gently' | 'deep_work';
export type Feeling = 'Calm' | 'Neutral' | 'Tense' | 'Distracted';

export interface Session {
  id: string;
  userId?: string; // For cloud sync
  subject: string | null;
  startTime: number; // Unix timestamp
  endTime: number | null; // null if session is ongoing
  duration: number; // in seconds
  feeling: Feeling;
  sessionType: SessionType;
  wasCompleted: boolean;
  notes?: string; // Reflection notes
  createdAt: number;
  updatedAt: number;
  syncedToCloud: boolean;
}

// Color mapping for feelings (aligned with PRD design system)
export const FeelingColors: Record<Feeling, string> = {
  Calm: '#7DE3D3', // Soft aqua
  Neutral: '#65C1B8', // Muted teal
  Tense: '#EB9E55', // Warm orange
  Distracted: '#C8A2C8', // Lavender
};

// Growth points for companion evolution (PRD Section 9)
export const FeelingGrowthPoints: Record<Feeling, number> = {
  Calm: 3,
  Neutral: 1,
  Tense: 1, // "you tried"
  Distracted: 0.5,
};

export interface ActiveSession {
  session: Session;
  pausedAt: number | null;
  totalPauseTime: number;
}

export interface SessionStats {
  totalSessions: number;
  totalStudyTime: number; // in seconds

  // Emotional health metrics (PRD differentiator)
  calmSessionsPercentage: number; // % of sessions marked "Calm"
  emotionalHealthScore: number; // 0-100, target 60%+ by week 4

  // No streaks! Just show-ups
  showUpsLast7Days: number;
  showUpsLast30Days: number;

  // Subject tracking
  topSubjects: Array<{ subject: string; sessionCount: number; totalDuration: number }>;
}

export interface DailySessionSummary {
  date: string; // YYYY-MM-DD format
  sessions: Session[];
  totalDuration: number;
  dominantFeeling: Feeling; // Most frequent feeling of the day
  subjects: string[];
}
