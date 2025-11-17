import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';
import { useTimer } from '@hooks/useTimer';
import { useStore } from '@hooks/useStore';

export default function ActiveSessionScreen() {
  const { subject, sessionId, duration, sessionType } = useLocalSearchParams<{
    subject: string;
    sessionId: string;
    duration: string;
    sessionType: 'focus_gently' | 'deep_work';
  }>();

  const updateSession = useStore((state) => state.updateSession);
  const [shouldNavigate, setShouldNavigate] = React.useState(false);

  const sessionDuration = parseInt(duration || '900', 10); // Default 15 min

  const { formattedTime, isRunning, start, totalElapsed } = useTimer({
    initialTime: sessionDuration,
    onComplete: () => setShouldNavigate(true),
    autoStart: false,
  });

  useEffect(() => {
    // Start timer immediately
    start();

    // Update session with new session type
    if (sessionId && sessionType) {
      updateSession(sessionId, {
        sessionType,
        duration: sessionDuration,
      });
    }
  }, []);

  useEffect(() => {
    // Handle navigation after timer completes
    if (shouldNavigate) {
      router.push({
        pathname: '/(session)/reflection',
        params: { sessionId },
      });
    }
  }, [shouldNavigate, sessionId]);

  const handleStop = () => {
    // Update session duration with actual elapsed time
    if (sessionId) {
      updateSession(sessionId, {
        duration: totalElapsed,
      });
    }

    router.push({
      pathname: '/(session)/reflection',
      params: { sessionId },
    });
  };

  const getSessionTypeLabel = () => {
    if (sessionType === 'deep_work') return 'Deep Work';
    if (sessionType === 'focus_gently') return 'Focus Gently';
    return 'Active Session';
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

          {/* Session Info */}
          <View style={styles.textContainer}>
            <Text style={styles.sessionType}>{getSessionTypeLabel()}</Text>
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
        </View>

        <View style={styles.footer}>
          <Button title="End Session Early" onPress={handleStop} variant="secondary" />
          <Text style={styles.footerHint}>You can stop anytime</Text>
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
  sessionType: {
    fontSize: Theme.fontSizes['2xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.primary,
    textAlign: 'center',
    marginBottom: Theme.spacing.md,
  },
  subheadline: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: Theme.spacing.md,
  },
  subjectContainer: {
    alignItems: 'center',
    marginTop: Theme.spacing.lg,
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
    alignItems: 'center',
  },
  footerHint: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    marginTop: Theme.spacing.md,
    textAlign: 'center',
  },
});
