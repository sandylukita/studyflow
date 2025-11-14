export interface UserProfile {
  id: string;
  email?: string;
  displayName?: string;
  createdAt: number;
  onboardingCompleted: boolean;
  preferences: UserPreferences;
  isPremium: boolean;
}

export interface UserPreferences {
  notificationsEnabled: boolean;
  reminderTime?: string; // HH:mm format
  darkModeEnabled: boolean;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  defaultSessionDuration: number; // in minutes
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  analytics: boolean;
}
