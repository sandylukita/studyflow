import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { BreathingCircle } from '@components/session/BreathingCircle';
import { Theme } from '@constants/theme';

export default function MindfulEntryScreen() {
  const [isBreathing, setIsBreathing] = React.useState(false);

  const handleStart = () => {
    router.push('/(session)/subject-input');
  };

  const handleSkip = () => {
    router.push({
      pathname: '/(session)/subject-input',
      params: { skipBreathing: 'true' },
    });
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Breathing Circle */}
          <TouchableOpacity
            style={styles.circleContainer}
            onPressIn={() => setIsBreathing(true)}
            onPressOut={() => setIsBreathing(false)}
            activeOpacity={1}
          >
            <BreathingCircle size={220} active={isBreathing} />
          </TouchableOpacity>

          {/* Instructions */}
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              Before we start, take one calm breath.
            </Text>
            <Text style={styles.subheadline}>
              Your brain learns best when it feels safe.
            </Text>
          </View>
        </View>

        {/* CTA Buttons */}
        <View style={styles.footer}>
          <Button
            title="Start for 2 Minutes"
            onPress={handleStart}
          />
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
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
  circleContainer: {
    marginBottom: Theme.spacing['3xl'],
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
  },
  skipButton: {
    paddingVertical: Theme.spacing.md,
    alignItems: 'center',
  },
  skipText: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textTertiary,
    fontWeight: Theme.fontWeights.medium,
  },
});
