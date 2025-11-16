import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';
import { useTimer } from '@hooks/useTimer';
import { APP_CONFIG } from '@constants/config';
import { useStore } from '@hooks/useStore';
import { Session } from '@types/session';

export default function TwoMinuteStartScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const addSession = useStore((state) => state.addSession);
  const setActiveSession = useStore((state) => state.setActiveSession);
  const [sessionId] = React.useState(() => `session_${Date.now()}`);
  const [shouldNavigate, setShouldNavigate] = React.useState(false);

  const { formattedTime, isRunning, start, totalElapsed } = useTimer({
    initialTime: APP_CONFIG.DEFAULT_SESSION_DURATION,
    onComplete: () => setShouldNavigate(true),
    autoStart: false,
  });

  useEffect(() => {
    // Create session when component mounts
    const newSession: Session = {
      id: sessionId,
      subject: subject || 'Unknown',
      startTime: Date.now(),
      endTime: null,
      duration: 0,
      calmLevel: 3, // Default, will be set later
      wasCompleted: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      syncedToCloud: false,
    };

    setActiveSession(newSession);
  }, []);

  useEffect(() => {
    // Handle navigation after timer completes
    if (shouldNavigate) {
      router.push({
        pathname: '/(session)/continue-or-stop',
        params: { sessionId },
      });
    }
  }, [shouldNavigate, sessionId]);

  const handleBegin = () => {
    start();
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Timer Display */}
          <View style={styles.timerContainer}>
            <View style={styles.timerCircle}>
              <Text style={styles.timerText}>{formattedTime}</Text>
            </View>
          </View>

          {/* Instructions */}
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              Just start for 2 minutes. You can stop anytime.
            </Text>
            {subject && (
              <View style={styles.subjectContainer}>
                <Text style={styles.subjectLabel}>Studying:</Text>
                <Text style={styles.subjectText}>{subject}</Text>
              </View>
            )}
          </View>
        </View>

        {/* CTA Button */}
        <View style={styles.footer}>
          {!isRunning ? (
            <Button title="Begin Warm Start" onPress={handleBegin} />
          ) : (
            <View style={styles.runningIndicator}>
              <Text style={styles.runningText}>Session in progress...</Text>
              <Text style={styles.runningSubtext}>Focus on your work</Text>
            </View>
          )}
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
  timerContainer: {
    marginBottom: Theme.spacing['3xl'],
  },
  timerCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(125, 227, 211, 0.1)',
    borderWidth: 3,
    borderColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.glow,
  },
  timerText: {
    fontSize: 64,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.md,
  },
  headline: {
    fontSize: Theme.fontSizes.xl,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.lg,
    lineHeight: 28,
  },
  subjectContainer: {
    alignItems: 'center',
  },
  subjectLabel: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    marginBottom: Theme.spacing.xs,
  },
  subjectText: {
    fontSize: Theme.fontSizes.lg,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.primary,
  },
  footer: {
    paddingTop: Theme.spacing.lg,
  },
  runningIndicator: {
    alignItems: 'center',
    padding: Theme.spacing.lg,
  },
  runningText: {
    fontSize: Theme.fontSizes.lg,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.primary,
    marginBottom: Theme.spacing.xs,
  },
  runningSubtext: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
  },
});
