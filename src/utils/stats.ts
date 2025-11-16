/**
 * Session Statistics Calculations
 * PRD: Emotional health metrics (no streaks!)
 */

import { Session, SessionStats, Feeling } from '@types/session';
import { Subject } from '@types/subject';
import { startOfDay, subDays, isAfter } from 'date-fns';

/**
 * Calculate comprehensive session statistics
 * PRD: Focus on emotional health, not performance
 */
export function calculateSessionStats(sessions: Session[]): SessionStats {
  const totalSessions = sessions.length;
  const totalStudyTime = sessions.reduce((sum, s) => sum + s.duration, 0);

  // Emotional health metrics (PRD differentiator)
  const calmSessions = sessions.filter((s) => s.feeling === 'Calm').length;
  const calmSessionsPercentage = totalSessions > 0 ? (calmSessions / totalSessions) * 100 : 0;

  // Emotional Health Score (0-100)
  // Target: 60%+ calm sessions by week 4
  const emotionalHealthScore = Math.min(100, calmSessionsPercentage);

  // Show-ups (no streaks!)
  const showUpsLast7Days = getShowUpsInDays(sessions, 7);
  const showUpsLast30Days = getShowUpsInDays(sessions, 30);

  // Top subjects
  const topSubjects = calculateTopSubjects(sessions);

  return {
    totalSessions,
    totalStudyTime,
    calmSessionsPercentage,
    emotionalHealthScore,
    showUpsLast7Days,
    showUpsLast30Days,
    topSubjects,
  };
}

/**
 * Get number of days user studied in the last N days
 * PRD: "No streaks! Just show-ups"
 */
function getShowUpsInDays(sessions: Session[], days: number): number {
  const today = startOfDay(new Date());
  const cutoffDate = subDays(today, days);

  const datesWithSessions = new Set<string>();

  sessions.forEach((session) => {
    const sessionDate = startOfDay(session.startTime);
    if (isAfter(sessionDate, cutoffDate) || sessionDate.getTime() === cutoffDate.getTime()) {
      datesWithSessions.add(sessionDate.toISOString().split('T')[0]);
    }
  });

  return datesWithSessions.size;
}

/**
 * Calculate top 5 subjects by session count and duration
 * PRD Section 7: Subject tracking for insights
 */
function calculateTopSubjects(
  sessions: Session[]
): Array<{ subject: string; sessionCount: number; totalDuration: number }> {
  const subjectMap = new Map<string, { sessionCount: number; totalDuration: number }>();

  sessions.forEach((session) => {
    if (!session.subject) return;

    const existing = subjectMap.get(session.subject) || { sessionCount: 0, totalDuration: 0 };
    subjectMap.set(session.subject, {
      sessionCount: existing.sessionCount + 1,
      totalDuration: existing.totalDuration + session.duration,
    });
  });

  return Array.from(subjectMap.entries())
    .map(([subject, stats]) => ({ subject, ...stats }))
    .sort((a, b) => b.sessionCount - a.sessionCount)
    .slice(0, 5);
}

/**
 * Get feeling distribution for stats display
 */
export function getFeelingDistribution(sessions: Session[]): Record<Feeling, number> {
  const distribution: Record<Feeling, number> = {
    Calm: 0,
    Neutral: 0,
    Tense: 0,
    Distracted: 0,
  };

  sessions.forEach((session) => {
    distribution[session.feeling]++;
  });

  return distribution;
}

/**
 * Check if user is on track for emotional health goal
 * PRD: "Target: 60%+ calm sessions by week 4"
 */
export function isOnTrackForGoal(
  calmPercentage: number,
  weekNumber: number
): { onTrack: boolean; message: string } {
  const targetByWeek = [30, 40, 50, 60]; // Progressive targets
  const target = targetByWeek[Math.min(weekNumber - 1, 3)];

  if (calmPercentage >= target) {
    return {
      onTrack: true,
      message: `Great! You're ${Math.round(calmPercentage)}% calm this week.`,
    };
  }

  return {
    onTrack: false,
    message: `Keep going. Aim for ${target}% calm sessions.`,
  };
}
