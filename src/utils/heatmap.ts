/**
 * Heatmap Calculation Utilities
 * PRD Section 8: Calm Flow Heatmap logic
 */

import { Session, Feeling } from '@types/session';
import { HeatmapData, HeatmapDay, HeatmapWeek } from '@types/heatmap';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';

/**
 * Calculate dominant feeling for a day based on session frequency
 * PRD: "Show dominant emotion of the day (most frequent)"
 */
export function getDominantFeeling(sessions: Session[]): Feeling | null {
  if (sessions.length === 0) return null;

  const feelingCounts: Record<Feeling, number> = {
    Calm: 0,
    Neutral: 0,
    Tense: 0,
    Distracted: 0,
  };

  sessions.forEach((session) => {
    feelingCounts[session.feeling]++;
  });

  // Find the most frequent feeling
  let dominantFeeling: Feeling = 'Neutral';
  let maxCount = 0;

  (Object.keys(feelingCounts) as Feeling[]).forEach((feeling) => {
    if (feelingCounts[feeling] > maxCount) {
      maxCount = feelingCounts[feeling];
      dominantFeeling = feeling;
    }
  });

  return dominantFeeling;
}

/**
 * Generate heatmap data for the last 4 weeks (28 days)
 * PRD Section 8: "4 weeks × 7 days = 28 cells"
 */
export function generateHeatmapData(sessions: Session[]): HeatmapData {
  const today = startOfDay(new Date());
  const startDate = subDays(today, 27); // 28 days total (including today)

  const weeks: HeatmapWeek[] = [];

  // Group sessions by date
  const sessionsByDate = sessions.reduce((acc, session) => {
    const dateKey = format(startOfDay(session.startTime), 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(session);
    return acc;
  }, {} as Record<string, Session[]>);

  // Generate 4 weeks of data
  for (let weekIndex = 0; weekIndex < 4; weekIndex++) {
    const days: HeatmapDay[] = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const currentDate = subDays(today, 27 - (weekIndex * 7 + dayIndex));
      const dateKey = format(currentDate, 'yyyy-MM-dd');
      const daySessions = sessionsByDate[dateKey] || [];

      days.push({
        date: dateKey,
        dominantFeeling: getDominantFeeling(daySessions),
        sessionCount: daySessions.length,
        totalDuration: daySessions.reduce((sum, s) => sum + s.duration, 0),
        hasSession: daySessions.length > 0,
        subjects: [...new Set(daySessions.map((s) => s.subject).filter(Boolean) as string[])],
        isToday: isSameDay(currentDate, today),
      });
    }

    weeks.push({
      weekNumber: weekIndex + 1,
      days,
    });
  }

  return {
    weeks,
    startDate: format(startDate, 'yyyy-MM-dd'),
    endDate: format(today, 'yyyy-MM-dd'),
  };
}

/**
 * Get heatmap cell border thickness based on session count
 * PRD: "Border thickness = number of sessions"
 */
export function getHeatmapCellBorderWidth(sessionCount: number): number {
  if (sessionCount === 0) return 1;
  if (sessionCount === 1) return 2;
  if (sessionCount === 2) return 3;
  return 4; // 3+ sessions
}
