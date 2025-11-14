import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';

export default function ActiveSessionScreen() {
  const { subject, sessionId } = useLocalSearchParams<{ subject: string; sessionId: string }>();

  const handleStop = () => {
    router.push({
      pathname: '/(session)/reflection',
      params: { sessionId },
    });
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.headline}>Do Not Disturb Mode</Text>
          <Text style={styles.subheadline}>
            Focus on your work. You're doing great.
          </Text>
          {subject && (
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectLabel}>Studying:</Text>
              <Text style={styles.subjectText}>{subject}</Text>
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Button title="End Session" onPress={handleStop} />
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing['4xl'],
    paddingBottom: Theme.spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.md,
  },
  subheadline: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: Theme.spacing.xl,
  },
  subjectContainer: {
    alignItems: 'center',
    marginTop: Theme.spacing.xl,
  },
  subjectLabel: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    marginBottom: Theme.spacing.xs,
  },
  subjectText: {
    fontSize: Theme.fontSizes.xl,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.primary,
  },
  footer: {
    paddingTop: Theme.spacing.lg,
  },
});
