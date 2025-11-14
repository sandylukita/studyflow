import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Card } from '@components/common/Card';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function TriggerCardsScreen() {
  const handleBack = () => {
    router.back();
  };

  const triggerCards = [
    { id: 1, title: "Feeling overwhelmed", description: "Take a 2-minute breathing break" },
    { id: 2, title: "Procrastination spiral", description: "Start with just 2 minutes" },
    { id: 3, title: "Fear of failure", description: "Progress over perfection" },
    { id: 4, title: "Comparison trap", description: "Your journey is your own" },
    { id: 5, title: "Burnout incoming", description: "It's okay to rest" },
  ];

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
            <Text style={styles.headerTitle}>Trigger Cards</Text>
            <View style={{ width: 28 }} />
          </View>

          {/* Description */}
          <Text style={styles.description}>
            Quick reminders for when you need them most
          </Text>

          {/* Cards */}
          <View style={styles.cardsContainer}>
            {triggerCards.map((card) => (
              <Card key={card.id} style={styles.triggerCard}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDescription}>{card.description}</Text>
              </Card>
            ))}
          </View>

          <Card style={styles.infoCard}>
            <Ionicons name="information-circle-outline" size={24} color={Theme.colors.primary} />
            <Text style={styles.infoText}>
              More trigger cards and customization options coming soon!
            </Text>
          </Card>
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
    marginBottom: Theme.spacing.md,
  },
  headerTitle: {
    fontSize: Theme.fontSizes.xl,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
  },
  description: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textTertiary,
    textAlign: 'center',
    marginBottom: Theme.spacing.xl,
  },
  cardsContainer: {
    gap: Theme.spacing.md,
    marginBottom: Theme.spacing.xl,
  },
  triggerCard: {
    borderLeftWidth: 4,
    borderLeftColor: Theme.colors.primary,
  },
  cardTitle: {
    fontSize: Theme.fontSizes.lg,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.xs,
  },
  cardDescription: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Theme.spacing.md,
  },
  infoText: {
    flex: 1,
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
});
