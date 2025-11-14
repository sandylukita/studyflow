import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '@constants/theme';

interface ProgressBarProps {
  currentStage: string;
  nextStage: string | null;
  progress: number; // 0-100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStage,
  nextStage,
  progress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.labelText}>{currentStage}</Text>
        {nextStage && (
          <Text style={styles.labelText}>{Math.round(progress)}% to {nextStage}</Text>
        )}
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing.xs,
  },
  labelText: {
    fontSize: Theme.fontSizes.xs,
    color: Theme.colors.textTertiary,
    fontWeight: Theme.fontWeights.medium,
  },
  track: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: Theme.borderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.borderRadius.full,
  },
});
