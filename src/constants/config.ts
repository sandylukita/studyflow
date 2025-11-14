export const APP_CONFIG = {
  // Session Settings
  DEFAULT_SESSION_DURATION: 2 * 60, // 2 minutes in seconds
  CONTINUE_INTERVAL: 5 * 60, // 5 minutes intervals for continue prompts
  MAX_SESSION_DURATION: 4 * 60 * 60, // 4 hours max

  // Heatmap Settings
  HEATMAP_WEEKS: 4,
  HEATMAP_DAYS_PER_WEEK: 7,

  // Safety Meter Settings
  SAFETY_METER_DAYS: 7,

  // Animation Settings
  BREATHING_CIRCLE_MIN_SCALE: 0.8,
  BREATHING_CIRCLE_MAX_SCALE: 1.2,
  BREATHING_CYCLE_DURATION: 4000, // 4 seconds

  // Premium Features
  FREE_TIER_SESSION_LIMIT: null, // null = unlimited for now

  // Cloud Sync
  SYNC_INTERVAL: 5 * 60 * 1000, // 5 minutes

  // AdMob
  AD_FREQUENCY: 3, // Show ad every 3 sessions

  // Onboarding
  ONBOARDING_SCREENS: [
    'welcome',
    'truth',
    'promise',
    'bond',
    'proof',
    'success',
  ],

  // Storage Keys
  STORAGE_KEYS: {
    ONBOARDING_COMPLETED: '@studyflow:onboarding_completed',
    USER_PROFILE: '@studyflow:user_profile',
    SESSIONS: '@studyflow:sessions',
    SUBJECTS: '@studyflow:subjects',
    SETTINGS: '@studyflow:settings',
    LAST_SYNC: '@studyflow:last_sync',
  },
};

export type AppConfig = typeof APP_CONFIG;
