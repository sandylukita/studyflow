import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Theme } from '@constants/theme';
import { useStore } from '@hooks/useStore';
import { CalmLevel } from '@types/session';
import { Ionicons } from '@expo/vector-icons';

export default function ReflectionScreen() {
  const { sessionId } = useLocalSearchParams<{ sessionId: string }>();
  const [calmLevel, setCalmLevel] = useState<CalmLevel | null>(null);
  const [note, setNote] = useState('');

  const activeSession = useStore((state) => state.activeSession);
  const updateSession = useStore((state) => state.updateSession);
  const addSession = useStore((state) => state.addSession);
  const setActiveSession = useStore((state) => state.setActiveSession);

  const handleComplete = () => {
    if (!calmLevel) return;

    // Update and save session
    if (activeSession) {
      const completedSession = {
        ...activeSession,
        endTime: Date.now(),
        duration: Math.floor((Date.now() - activeSession.startTime) / 1000),
        calmLevel,
        reflectionNote: note,
        wasCompleted: true,
        updatedAt: Date.now(),
      };

      addSession(completedSession);
      setActiveSession(null);
    }

    // Navigate back to home
    router.replace('/(tabs)');
  };

  const calmLevels: Array<{ level: CalmLevel; icon: string; label: string }> = [
    { level: 5, icon: 'happy-outline', label: 'Very Calm' },
    { level: 4, icon: 'happy-outline', label: 'Calm' },
    { level: 3, icon: 'remove-circle-outline', label: 'Moderate' },
    { level: 2, icon: 'sad-outline', label: 'Stressed' },
    { level: 1, icon: 'sad-outline', label: 'Very Stressed' },
  ];

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headline}>How did you feel during this session?</Text>
            <Text style={styles.subheadline}>
              Your honest reflection helps you grow.
            </Text>
          </View>

          {/* Calm Level Selection */}
          <View style={styles.levelsContainer}>
            {calmLevels.map(({ level, icon, label }) => (
              <View
                key={level}
                style={[
                  styles.levelButton,
                  calmLevel === level && styles.levelButtonActive,
                ]}
                onTouchEnd={() => setCalmLevel(level)}
              >
                <Ionicons
                  name={icon as any}
                  size={32}
                  color={calmLevel === level ? Theme.colors.primary : Theme.colors.textMuted}
                />
                <Text
                  style={[
                    styles.levelLabel,
                    calmLevel === level && styles.levelLabelActive,
                  ]}
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>

          {/* Optional Note */}
          <View style={styles.noteContainer}>
            <Text style={styles.noteLabel}>Quick note (optional)</Text>
            <TextInput
              style={styles.noteInput}
              placeholder="Any thoughts?"
              placeholderTextColor={Theme.colors.textMuted}
              value={note}
              onChangeText={setNote}
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        {/* Complete Button */}
        <View style={styles.footer}>
          <Button
            title="Complete Session"
            onPress={handleComplete}
            disabled={!calmLevel}
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
    paddingTop: Theme.spacing['3xl'],
    paddingBottom: Theme.spacing.xl,
  },
  content: {
    flex: 1,
  },
  header: {
    marginBottom: Theme.spacing.xl,
  },
  headline: {
    fontSize: Theme.fontSizes['2xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.sm,
  },
  subheadline: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
  },
  levelsContainer: {
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.xl,
  },
  levelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Theme.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: Theme.borderRadius.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  levelButtonActive: {
    borderColor: Theme.colors.primary,
    backgroundColor: 'rgba(125, 227, 211, 0.1)',
  },
  levelLabel: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textSecondary,
    marginLeft: Theme.spacing.md,
    fontWeight: Theme.fontWeights.medium,
  },
  levelLabelActive: {
    color: Theme.colors.primary,
  },
  noteContainer: {
    marginTop: Theme.spacing.lg,
  },
  noteLabel: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textTertiary,
    marginBottom: Theme.spacing.sm,
  },
  noteInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.md,
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textPrimary,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  footer: {
    paddingTop: Theme.spacing.lg,
  },
});
