import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ResetRitualScreen() {
  const handleReset = () => {
    router.replace('/(tabs)');
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="refresh-outline" size={80} color={Theme.colors.primary} />
          </View>

          {/* Message */}
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              It's okay to reset.
            </Text>
            <Text style={styles.body}>
              Overwhelm happens. There's no shame in starting fresh. Your companion will be here when you're ready.
            </Text>

            <View style={styles.tips}>
              <Text style={styles.tipsTitle}>Try this:</Text>
              <Text style={styles.tip}>• Take a 5-minute walk</Text>
              <Text style={styles.tip}>• Drink some water</Text>
              <Text style={styles.tip}>• Stretch your body</Text>
              <Text style={styles.tip}>• Come back when it feels right</Text>
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <View style={styles.footer}>
          <Button
            title="I'm Ready to Reset"
            onPress={handleReset}
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
    marginBottom: Theme.spacing.xl,
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
    marginBottom: Theme.spacing.md,
    lineHeight: 36,
  },
  body: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: Theme.spacing.xl,
  },
  tips: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.lg,
    width: '100%',
  },
  tipsTitle: {
    fontSize: Theme.fontSizes.base,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.sm,
  },
  tip: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textSecondary,
    lineHeight: 24,
  },
  footer: {
    paddingTop: Theme.spacing.lg,
  },
});
