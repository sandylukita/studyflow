export const Colors = {
  // Primary Palette
  primary: '#7de3d3',
  primaryLight: '#a8efe3',
  primaryDark: '#13eccb',

  // Background
  backgroundDark: '#12201e',
  backgroundDarkGradientStart: '#0d1a18',
  backgroundDarkGradientEnd: '#12201e',
  backgroundLight: '#f6f8f8',

  // Text
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textTertiary: 'rgba(255, 255, 255, 0.6)',
  textMuted: 'rgba(255, 255, 255, 0.4)',

  // Status Colors (Heatmap)
  heatmap: {
    veryCalm: '#a8efe3',    // Light mint
    calm: '#7de3d3',         // Primary
    moderate: '#5bc0ae',     // Medium teal
    stressed: '#4a9b8e',     // Dark teal
    veryStressed: '#3a7a6e', // Darker teal
    empty: 'rgba(255, 255, 255, 0.1)', // Subtle outline
    today: 'rgba(255, 255, 255, 0.3)',  // Today's cell
  },

  // UI Elements
  border: 'rgba(255, 255, 255, 0.1)',
  borderLight: 'rgba(255, 255, 255, 0.05)',
  overlay: 'rgba(0, 0, 0, 0.6)',

  // Companion Evolution Glow
  glow: {
    seed: 'rgba(125, 227, 211, 0.3)',
    sprout: 'rgba(125, 227, 211, 0.4)',
    leaf: 'rgba(125, 227, 211, 0.5)',
    bloom: 'rgba(125, 227, 211, 0.6)',
  },

  // Feedback
  success: '#7de3d3',
  warning: '#f5a623',
  error: '#e74c3c',
  info: '#5dade2',
};

export type ColorName = keyof typeof Colors;
