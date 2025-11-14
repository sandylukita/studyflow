import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';

export default function ContinueOrStopScreen() {
  const { sessionId } = useLocalSearchParams<{ sessionId: string }>();

  const handleContinue = () => {
    router.push({
      pathname: '/(session)/two-minute-start',
      params: { sessionId },
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
              Want to keep going, or wrap it up?
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.footer}>
          <Button
            title="Keep Going"
            onPress={handleContinue}
            variant="primary"
            style={styles.button}
          />
          <Button
            title="I'm Done"
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
