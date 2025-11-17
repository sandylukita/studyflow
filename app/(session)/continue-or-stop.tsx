import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';

export default function ContinueOrStopScreen() {
  const { sessionId } = useLocalSearchParams<{ sessionId: string }>();

  const handleFocusGently = () => {
    // PRD: Focus Gently = 15 minutes
    router.push({
      pathname: '/(session)/active-session',
      params: { sessionId, duration: '900', sessionType: 'focus_gently' }, // 15 min = 900 seconds
    });
  };

  const handleDeepWork = () => {
    // PRD: Deep Work = 45 minutes
    router.push({
      pathname: '/(session)/active-session',
      params: { sessionId, duration: '2700', sessionType: 'deep_work' }, // 45 min = 2700 seconds
    });
  };

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
          {/* Icon/Visual */}
          <View style={styles.iconContainer}>
            <View style={styles.checkCircle}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          </View>

          {/* Message */}
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              You did it! 2 minutes complete.
            </Text>
            <Text style={styles.subheadline}>
              How do you want to continue?
            </Text>
          </View>
        </View>

        {/* Action Buttons - PRD Feature #4 */}
        <View style={styles.footer}>
          <Button
            title="Focus Gently (15 min)"
            onPress={handleFocusGently}
            variant="primary"
            style={styles.button}
          />
          <Button
            title="Deep Work (45 min)"
            onPress={handleDeepWork}
            variant="primary"
            style={styles.button}
          />
          <Button
            title="Stop & Reflect"
            onPress={handleStop}
            variant="secondary"
            style={styles.button}
          />
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
  iconContainer: {
    marginBottom: Theme.spacing['3xl'],
  },
  checkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(125, 227, 211, 0.15)',
    borderWidth: 3,
    borderColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 60,
    color: Theme.colors.primary,
    fontWeight: Theme.fontWeights.bold,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.md,
  },
  headline: {
    fontSize: Theme.fontSizes['2xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.md,
    lineHeight: 32,
  },
  subheadline: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    paddingTop: Theme.spacing.lg,
    gap: Theme.spacing.md,
  },
  button: {
    marginBottom: 0,
  },
});
