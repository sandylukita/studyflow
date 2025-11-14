import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BondScreen() {
  const handleNext = () => {
    router.push('/(onboarding)/proof');
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Companion Visual */}
          <View style={styles.companionContainer}>
            <View style={styles.glowOuter} />
            <View style={styles.glowInner} />
            <View style={styles.companionCircle}>
              <Ionicons name="leaf-outline" size={60} color={Theme.colors.primary} />
            </View>
          </View>

          {/* Headline */}
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              The bond: Meet your calm companion.
            </Text>
            <Text style={styles.body}>
              They grow with every session. Not a streak. Not a score. Just gentle progress.
            </Text>
          </View>
        </View>

        {/* CTA Button */}
        <View style={styles.footer}>
          <Button
            title="Meet them"
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
  companionContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing['3xl'],
  },
  glowOuter: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Theme.colors.glow.seed,
    opacity: 0.3,
  },
  glowInner: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Theme.colors.glow.seed,
    opacity: 0.5,
  },
  companionCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(125, 227, 211, 0.15)',
    borderWidth: 2,
    borderColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
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
