/**
 * Subject Tracking System
 * PRD Section 7: Reduces overwhelm, increases retention, builds identity
 */

export interface Subject {
  name: string;
  lastUsed: number; // Timestamp
  totalSessions: number;
  totalDuration: number; // in seconds
  createdAt: number;
}

// Default subjects (appear as chips on first use)
export const DEFAULT_SUBJECTS = [
  'Biology',
  'Writing',
  'Work',
  'Math',
  'Reading',
];

// Maximum recent subjects to show as chips
export const MAX_RECENT_SUBJECTS = 4;
