import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { CompanionVisual } from '@components/companion/CompanionVisual';
import { ProgressBar } from '@components/companion/ProgressBar';
import { Theme } from '@constants/theme';
import { useStore } from '@hooks/useStore';
import { getRandomAffirmation } from '@constants/affirmations';
import { EVOLUTION_STAGES } from '@constants/evolutionStages';
import { getProgressToNextStage } from '@utils/companion';

export default function HomeScreen() {
  const companion = useStore((state) => state.companion);
  const [affirmation, setAffirmation] = useState<string | null>(null);

  const currentStageInfo = EVOLUTION_STAGES[companion.stage];
  const nextStageName = currentStageInfo.nextStageName?.replace(' Stage', '') || null;
  const progressToNextStage = getProgressToNextStage(companion);

  const handleTap = () => {
    const newAffirmation = getRandomAffirmation();
    setAffirmation(newAffirmation);
    setTimeout(() => setAffirmation(null), 3000);
  };

  const handleLongPress = () => {
    Alert.alert('Breathing Exercise', 'Hold and breathe... (Feature coming soon)');
  };

  const handleBeginSession = () => {
    router.push('/(session)/mindful-entry');
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Companion Section */}
          <View style={styles.companionSection}>
            <CompanionVisual
              stage={companion.stage}
              onTap={handleTap}
              onLongPress={handleLongPress}
              size={180}
            />

            {/* Affirmation Display */}
            {affirmation && (
              <View style={styles.affirmationContainer}>
                <Text style={styles.affirmationText}>{affirmation}</Text>
              </View>
            )}

            {/* Headline */}
            <View style={styles.textContainer}>
              <Text style={styles.headline}>You're growing calmly.</Text>
              <Text style={styles.subheadline}>
                Tap for an affirmation. Press and hold to breathe.
              </Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <ProgressBar
                currentStage={currentStageInfo.name}
                nextStage={nextStageName}
                progress={progressToNextStage}
              />
            </View>
          </View>

          {/* CTA Button */}
          <View style={styles.ctaSection}>
            <Button title="Begin 2-Minute Start" onPress={handleBeginSession} />
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
    paddingTop: Theme.spacing['3xl'],
    paddingBottom: Theme.spacing.xl,
    justifyContent: 'space-between',
  },
  companionSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  affirmationContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    paddingHorizontal: Theme.spacing.lg,
    alignItems: 'center',
  },
  affirmationText: {
    fontSize: Theme.fontSizes.lg,
    color: Theme.colors.primary,
    textAlign: 'center',
    fontWeight: Theme.fontWeights.semibold,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.xl,
  },
  headline: {
    fontSize: Theme.fontSizes['2xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.sm,
  },
  subheadline: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    textAlign: 'center',
  },
  progressContainer: {
    width: '100%',
    marginTop: Theme.spacing.xl,
    paddingHorizontal: Theme.spacing.md,
  },
  ctaSection: {
    paddingTop: Theme.spacing.lg,
  },
});
