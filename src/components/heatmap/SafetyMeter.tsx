import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '@constants/theme';
import { SafetyMeterDay } from '@types/heatmap';
import { Ionicons } from '@expo/vector-icons';

interface SafetyMeterProps {
  data: SafetyMeterDay[];
}

export const SafetyMeter: React.FC<SafetyMeterProps> = ({ data }) => {
  const iconSize = 32;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Meter</Text>
      <Text style={styles.subtitle}>Your show-ups over the last 7 days.</Text>

      <View style={styles.daysContainer}>
        {data.map((day) => (
          <View key={day.date} style={styles.dayItem}>
            <View
              style={[
                styles.iconContainer,
                day.showedUp && styles.iconContainerActive,
              ]}
            >
              <Ionicons
                name={day.showedUp ? 'leaf' : 'leaf-outline'}
                size={iconSize}
                color={day.showedUp ? Theme.colors.primary : Theme.colors.textMuted}
              />
            </View>
            <Text style={styles.dayLabel}>{day.dayOfWeek}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Theme.spacing.xl,
  },
  title: {
    fontSize: Theme.fontSizes.xl,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.xs,
  },
  subtitle: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    marginBottom: Theme.spacing.lg,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Theme.spacing.xs,
  },
  dayItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.xs,
  },
  iconContainerActive: {
    backgroundColor: 'rgba(125, 227, 211, 0.15)',
  },
  dayLabel: {
    fontSize: Theme.fontSizes.xs,
    color: Theme.colors.textTertiary,
    fontWeight: Theme.fontWeights.medium,
  },
});
