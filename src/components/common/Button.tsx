import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { Theme } from '@constants/theme';
import * as Haptics from 'expo-haptics';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  disabled = false,
  loading = false,
  icon,
  fullWidth = true,
  style,
  textStyle,
}) => {
  const handlePress = () => {
    if (!disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
        styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
        fullWidth && styles.fullWidth,
        (disabled || loading) && styles.buttonDisabled,
        style,
      ]}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? Theme.colors.backgroundDark : Theme.colors.primary}
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text
            style={[
              styles.text,
              styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
              styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Theme.borderRadius.full,
    paddingHorizontal: Theme.spacing.lg,
  },
  buttonPrimary: {
    backgroundColor: Theme.colors.primary,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Theme.colors.primary,
  },
  buttonGhost: {
    backgroundColor: 'transparent',
  },
  buttonSmall: {
    height: 40,
    paddingHorizontal: Theme.spacing.md,
  },
  buttonMedium: {
    height: 48,
  },
  buttonLarge: {
    height: 56,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontFamily: Theme.fonts.bold,
    fontWeight: Theme.fontWeights.bold,
    textAlign: 'center',
  },
  textPrimary: {
    color: Theme.colors.backgroundDark,
  },
  textSecondary: {
    color: Theme.colors.primary,
  },
  textGhost: {
    color: Theme.colors.textSecondary,
  },
  textSmall: {
    fontSize: Theme.fontSizes.sm,
  },
  textMedium: {
    fontSize: Theme.fontSizes.base,
  },
  textLarge: {
    fontSize: Theme.fontSizes.base,
  },
});
