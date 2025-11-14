import { format, subDays, startOfDay, eachDayOfInterval } from 'date-fns';
import { Session, CalmLevel } from '@types/session';
import { HeatmapData, HeatmapDay, HeatmapWeek, SafetyMeterDay } from '@types/heatmap';
import { APP_CONFIG } from '@constants/config';

export const generateHeatmapData = (sessions: Session[]): HeatmapData => {
  const today = startOfDay(new Date());
  const startDate = subDays(today, APP_CONFIG.HEATMAP_WEEKS * 7 - 1);

  const days = eachDayOfInterval({ start: startDate, end: today });

  const heatmapDays: HeatmapDay[] = days.map((date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const daySessions = sessions.filter(
      (s) => format(new Date(s.startTime), 'yyyy-MM-dd') === dateStr
    );

    const hasSession = daySessions.length > 0;
    const averageCalmLevel = hasSession
      ? (daySessions.reduce((sum, s) => sum + s.calmLevel, 0) / daySessions.length) as CalmLevel
      : null;

    return {
      date: dateStr,
      calmLevel: averageCalmLevel ? Math.round(averageCalmLevel) as CalmLevel : null,
      sessionCount: daySessions.length,
      totalDuration: daySessions.reduce((sum, s) => sum + s.duration, 0),
      hasSession,
    };
  });

  // Group into weeks
  const weeks: HeatmapWeek[] = [];
  for (let i = 0; i < APP_CONFIG.HEATMAP_WEEKS; i++) {
    weeks.push({
      weekNumber: i,
      days: heatmapDays.slice(i * 7, (i + 1) * 7),
    });
  }

  return {
    weeks,
    startDate: format(startDate, 'yyyy-MM-dd'),
    endDate: format(today, 'yyyy-MM-dd'),
  };
};

export const generateSafetyMeterData = (sessions: Session[]): SafetyMeterDay[] => {
  const today = startOfDay(new Date());
  const days = eachDayOfInterval({
    start: subDays(today, APP_CONFIG.SAFETY_METER_DAYS - 1),
    end: today,
  });

  return days.map((date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const daySessions = sessions.filter(
      (s) => format(new Date(s.startTime), 'yyyy-MM-dd') === dateStr
    );

    return {
      date: dateStr,
      dayOfWeek: format(date, 'EEE'),
      showedUp: daySessions.length > 0,
      sessionCount: daySessions.length,
    };
  });
};

export const getCalmLevelColor = (calmLevel: CalmLevel | null): string => {
  if (calmLevel === null) return 'rgba(255, 255, 255, 0.1)';

  const colors = {
    1: '#3a7a6e',
    2: '#4a9b8e',
    3: '#5bc0ae',
    4: '#7de3d3',
    5: '#a8efe3',
  };

  return colors[calmLevel];
};
