import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
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
  // Breathing animation - gentle pulse
  const breathScale = useSharedValue(1);
  const glowOpacity = useSharedValue(1);

  useEffect(() => {
    // Gentle breathing effect (3 seconds per breath cycle)
    breathScale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1, // Infinite repeat
      false
    );

    // Subtle glow pulsing
    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.6, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
  }, []);

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

  // Animated styles for breathing effect
  const animatedCompanionStyle = useAnimatedStyle(() => ({
    transform: [{ scale: breathScale.value }],
  }));

  const animatedGlowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value * getGlowIntensity(),
  }));

  const animatedOuterGlowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value * getGlowIntensity() * 0.5,
    transform: [{ scale: breathScale.value * 1.02 }],
  }));

  return (
    <TouchableOpacity
      style={[styles.container, { width: size, height: size }]}
      onPress={handleTap}
      onLongPress={handleLongPress}
      delayLongPress={500}
      activeOpacity={0.8}
    >
      {/* Outer Glow - Animated */}
      <Animated.View
        style={[
          styles.glowOuter,
          animatedOuterGlowStyle,
          {
            width: glowSize,
            height: glowSize,
            borderRadius: glowSize / 2,
          },
        ]}
      />

      {/* Inner Glow - Animated */}
      <Animated.View
        style={[
          styles.glowInner,
          animatedGlowStyle,
          {
            width: size * 1.1,
            height: size * 1.1,
            borderRadius: (size * 1.1) / 2,
          },
        ]}
      />

      {/* Companion Circle - Animated */}
      <Animated.View
        style={[
          styles.companionCircle,
          animatedCompanionStyle,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      >
        <Ionicons name={getIcon()} size={iconSize} color={Theme.colors.primary} />
      </Animated.View>
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
