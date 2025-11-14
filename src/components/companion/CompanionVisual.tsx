import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '@constants/theme';
import { EvolutionStage } from '@constants/evolutionStages';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface CompanionVisualProps {
  stage: EvolutionStage;
  onTap?: () => void;
  onLongPress?: () => void;
  size?: number;
}

export const CompanionVisual: React.FC<CompanionVisualProps> = ({
  stage,
  onTap,
  onLongPress,
  size = 160,
}) => {
  const handleTap = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onTap?.();
  };

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onLongPress?.();
  };

  const getIcon = () => {
    switch (stage) {
      case 'seed':
        return 'leaf-outline';
      case 'sprout':
        return 'leaf';
      case 'leaf':
        return 'flower-outline';
      case 'bloom':
        return 'flower';
      default:
        return 'leaf-outline';
    }
  };

  const getGlowIntensity = () => {
    switch (stage) {
      case 'seed':
        return 0.3;
      case 'sprout':
        return 0.4;
      case 'leaf':
        return 0.5;
      case 'bloom':
        return 0.6;
      default:
        return 0.3;
    }
  };

  const glowSize = size * 1.25;
  const iconSize = size * 0.4;

  return (
    <TouchableOpacity
      style={[styles.container, { width: size, height: size }]}
      onPress={handleTap}
      onLongPress={handleLongPress}
      delayLongPress={500}
      activeOpacity={0.8}
    >
      {/* Outer Glow */}
      <View
        style={[
          styles.glowOuter,
          {
            width: glowSize,
            height: glowSize,
            borderRadius: glowSize / 2,
            opacity: getGlowIntensity() * 0.5,
          },
        ]}
      />

      {/* Inner Glow */}
      <View
        style={[
          styles.glowInner,
          {
            width: size * 1.1,
            height: size * 1.1,
            borderRadius: (size * 1.1) / 2,
            opacity: getGlowIntensity(),
          },
        ]}
      />

      {/* Companion Circle */}
      <View style={[styles.companionCircle, { width: size, height: size, borderRadius: size / 2 }]}>
        <Ionicons name={getIcon()} size={iconSize} color={Theme.colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowOuter: {
    position: 'absolute',
    backgroundColor: Theme.colors.glow.seed,
  },
  glowInner: {
    position: 'absolute',
    backgroundColor: Theme.colors.glow.seed,
  },
  companionCircle: {
    backgroundColor: 'rgba(125, 227, 211, 0.1)',
    borderWidth: 2,
    borderColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
