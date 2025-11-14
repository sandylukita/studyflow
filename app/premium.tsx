import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function PremiumScreen() {
  const handleClose = () => {
    router.back();
  };

  const handleSubscribe = () => {
    // TODO: Implement subscription logic
    alert('Subscription coming soon!');
  };

  const Feature = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <View style={styles.feature}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon as any} size={24} color={Theme.colors.primary} />
      </View>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Close Button */}
          <View style={styles.header}>
            <Ionicons
              name="close"
              size={28}
              color={Theme.colors.textPrimary}
              onPress={handleClose}
            />
          </View>

          {/* Title */}
          <View style={styles.titleSection}>
            <View style={styles.badge}>
              <Ionicons name="star" size={32} color={Theme.colors.primary} />
            </View>
            <Text style={styles.title}>Upgrade to Premium</Text>
            <Text style={styles.subtitle}>
              Unlock advanced features and support StudyFlow development
            </Text>
          </View>

          {/* Features */}
          <Card style={styles.featuresCard}>
            <Feature
              icon="analytics-outline"
              title="Advanced Analytics"
              description="Deep insights into your study patterns and progress"
            />
            <Feature
              icon="color-palette-outline"
              title="Custom Themes"
              description="Personalize your experience with unique color schemes"
            />
            <Feature
              icon="notifications-off-outline"
              title="Ad-Free Experience"
              description="Study without distractions or interruptions"
            />
            <Feature
              icon="cloud-upload-outline"
              title="Priority Cloud Sync"
              description="Faster syncing across all your devices"
            />
            <Feature
              icon="heart-outline"
              title="Support Development"
              description="Help us build more features for students like you"
            />
          </Card>

          {/* Pricing */}
          <Card style={styles.pricingCard}>
            <Text style={styles.price}>$4.99/month</Text>
            <Text style={styles.priceDescription}>Cancel anytime, no commitments</Text>
          </Card>

          {/* CTA */}
          <View style={styles.footer}>
            <Button title="Start Free Trial" onPress={handleSubscribe} />
            <Button
              title="Maybe Later"
              variant="ghost"
              onPress={handleClose}
            />
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.xl,
    paddingBottom: Theme.spacing.xl,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: Theme.spacing.lg,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  badge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(125, 227, 211, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  title: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textTertiary,
    textAlign: 'center',
    lineHeight: 22,
  },
  featuresCard: {
    marginBottom: Theme.spacing.lg,
  },
  feature: {
    flexDirection: 'row',
    marginBottom: Theme.spacing.lg,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(125, 227, 211, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: Theme.fontSizes.base,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    lineHeight: 20,
  },
  pricingCard: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  price: {
    fontSize: Theme.fontSizes['4xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.primary,
    marginBottom: Theme.spacing.xs,
  },
  priceDescription: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
  },
  footer: {
    gap: Theme.spacing.sm,
  },
});
