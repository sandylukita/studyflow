import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GradientBackground } from '@components/common/GradientBackground';
import { CalmHeatmap } from '@components/heatmap/CalmHeatmap';
import { SafetyMeter } from '@components/heatmap/SafetyMeter';
import { Modal } from '@components/common/Modal';
import { Theme } from '@constants/theme';
import { useStore } from '@hooks/useStore';
import { generateHeatmapData, generateSafetyMeterData } from '@utils/heatmapHelpers';
import { format } from 'date-fns';

export default function ProgressScreen() {
  const sessions = useStore((state) => state.sessions);
  const stats = useStore((state) => state.getStats());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const heatmapData = generateHeatmapData(sessions);
  const safetyMeterData = generateSafetyMeterData(sessions);

  const handleDayPress = (date: string) => {
    setSelectedDate(date);
  };

  const getDayDetails = () => {
    if (!selectedDate) return null;

    const daySessions = sessions.filter(
      (s) => format(new Date(s.startTime), 'yyyy-MM-dd') === selectedDate
    );

    return {
      date: selectedDate,
      sessions: daySessions,
      totalDuration: daySessions.reduce((sum, s) => sum + s.duration, 0),
    };
  };

  const dayDetails = getDayDetails();

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Dashboard</Text>
          </View>

          {/* Safety Meter */}
          <SafetyMeter data={safetyMeterData} />

          {/* Calm Heatmap */}
          <CalmHeatmap data={heatmapData} onDayPress={handleDayPress} />

          {/* Stats Summary */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{stats.totalSessions}</Text>
              <Text style={styles.statLabel}>Total Sessions</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{Math.floor(stats.totalStudyTime / 60)}</Text>
              <Text style={styles.statLabel}>Minutes</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{stats.currentStreak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Day Detail Modal */}
      {dayDetails && (
        <Modal visible={!!selectedDate} onClose={() => setSelectedDate(null)}>
          <Text style={styles.modalTitle}>{format(new Date(dayDetails.date), 'MMMM d, yyyy')}</Text>
          <Text style={styles.modalText}>
            {dayDetails.sessions.length} session(s)
          </Text>
          <Text style={styles.modalText}>
            {Math.floor(dayDetails.totalDuration / 60)} minutes total
          </Text>
        </Modal>
      )}
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing['3xl'],
    paddingBottom: Theme.spacing.xl,
  },
  header: {
    marginBottom: Theme.spacing.xl,
  },
  headerTitle: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    marginTop: Theme.spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: Theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    padding: Theme.spacing.lg,
    alignItems: 'center',
  },
  statValue: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.primary,
    marginBottom: Theme.spacing.xs,
  },
  statLabel: {
    fontSize: Theme.fontSizes.xs,
    color: Theme.colors.textTertiary,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: Theme.fontSizes.xl,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.md,
  },
  modalText: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    marginBottom: Theme.spacing.sm,
  },
});
