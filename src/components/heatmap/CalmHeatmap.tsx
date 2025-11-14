import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '@constants/theme';
import { HeatmapData } from '@types/heatmap';
import { getCalmLevelColor } from '@utils/heatmapHelpers';

interface CalmHeatmapProps {
  data: HeatmapData;
  onDayPress?: (date: string) => void;
}

export const CalmHeatmap: React.FC<CalmHeatmapProps> = ({ data, onDayPress }) => {
  const cellSize = 40;
  const gap = 8;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your calm flow</Text>
      <Text style={styles.subtitle}>
        Each color shows how calmly you showed up over the last 4 weeks.
      </Text>

      <View style={styles.heatmapContainer}>
        {data.weeks.map((week) => (
          <View key={week.weekNumber} style={[styles.week, { gap }]}>
            {week.days.map((day) => (
              <TouchableOpacity
                key={day.date}
                style={[
                  styles.cell,
                  {
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: getCalmLevelColor(day.calmLevel),
                  },
                ]}
                onPress={() => onDayPress?.(day.date)}
                activeOpacity={0.7}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: Theme.fontSizes['2xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    marginBottom: Theme.spacing.lg,
  },
  heatmapContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  week: {
    flexDirection: 'row',
  },
  cell: {
    borderRadius: Theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
});
