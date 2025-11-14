import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityScreen() {
  const handleBack = () => {
    router.back();
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              name="arrow-back"
              size={28}
              color={Theme.colors.textPrimary}
              onPress={handleBack}
            />
            <Text style={styles.headerTitle}>Community Roll Call</Text>
            <View style={{ width: 28 }} />
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.heroIcon}>
              <Ionicons name="people" size={48} color={Theme.colors.primary} />
            </View>
            <Text style={styles.heroTitle}>You're not alone</Text>
            <Text style={styles.heroSubtitle}>
              10,000+ students are showing up every day, just like you.
            </Text>
          </View>

          {/* Stats Cards */}
          <View style={styles.statsRow}>
            <Card style={styles.statCard}>
              <Text style={styles.statValue}>2.4K</Text>
              <Text style={styles.statLabel}>Active Today</Text>
            </Card>
            <Card style={styles.statCard}>
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>Right Now</Text>
            </Card>
          </View>

          {/* Info Card */}
          <Card style={styles.infoCard}>
            <Ionicons name="information-circle-outline" size={24} color={Theme.colors.primary} />
            <Text style={styles.infoText}>
              Community features like roll call, shared progress, and study groups are coming soon!
            </Text>
          </Card>

          {/* Placeholder Content */}
          <Card style={styles.placeholderCard}>
            <Text style={styles.placeholderTitle}>Coming Soon</Text>
            <Text style={styles.placeholderText}>
              • Anonymous roll call{'\n'}
              • Shared calm moments{'\n'}
              • Study buddy matching{'\n'}
              • Group challenges{'\n'}
              • Encouragement wall
            </Text>
          </Card>

          {/* CTA */}
          <View style={styles.footer}>
            <Button title="Back to Home" onPress={handleBack} />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing.xl,
  },
  headerTitle: {
    fontSize: Theme.fontSizes.xl,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  heroIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(125, 227, 211, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
  },
  heroTitle: {
    fontSize: Theme.fontSizes['2xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.sm,
  },
  heroSubtitle: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textTertiary,
    textAlign: 'center',
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    marginBottom: Theme.spacing.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.primary,
    marginBottom: Theme.spacing.xs,
  },
  statLabel: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Theme.spacing.lg,
    gap: Theme.spacing.md,
  },
  infoText: {
    flex: 1,
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  placeholderCard: {
    marginBottom: Theme.spacing.xl,
  },
  placeholderTitle: {
    fontSize: Theme.fontSizes.lg,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.md,
  },
  placeholderText: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    lineHeight: 26,
  },
  footer: {
    marginTop: 'auto',
  },
});
