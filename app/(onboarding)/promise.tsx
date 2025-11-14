import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function PromiseScreen() {
  const handleNext = () => {
    router.push('/(onboarding)/bond');
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Icon Visual */}
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={80} color={Theme.colors.primary} />
          </View>

          {/* Headline */}
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              The promise: Gentle, not forced.
            </Text>
            <Text style={styles.body}>
              We start with just 2 minutes. No pressure. No guilt. Just show up.
            </Text>
          </View>
        </View>

        {/* CTA Button */}
        <View style={styles.footer}>
          <Button
            title="I'm in"
            onPress={handleNext}
            icon={<Ionicons name="arrow-forward" size={20} color={Theme.colors.backgroundDark} />}
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
    padding: Theme.spacing.xl,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: 'rgba(125, 227, 211, 0.1)',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.md,
  },
  headline: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.lg,
    lineHeight: 36,
  },
  body: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    paddingTop: Theme.spacing.lg,
  },
});
