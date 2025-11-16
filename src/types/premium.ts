/**
 * Premium Features Configuration
 * PRD Section 14: Monetization & Feature Gating
 */

export interface PremiumFeatures {
  // Core gates
  removeAds: boolean;
  cloudSync: boolean;

  // Customization
  themes: 'all' | 'default';
  companionSkins: 'all' | 'default';
  shareCardFrames: 'all' | 'default';

  // Advanced features
  unlimitedSubjects: boolean;
  advancedStats: boolean;
  exportData: boolean;
}

export interface UserPremium {
  isPremium: boolean;
  purchaseDate: number | null;
  purchaseType: 'lifetime' | 'monthly' | null;
  expiryDate: number | null; // null for lifetime
}

// Premium feature configuration
export const FREE_FEATURES: PremiumFeatures = {
  removeAds: false,
  cloudSync: false,
  themes: 'default',
  companionSkins: 'default',
  shareCardFrames: 'default',
  unlimitedSubjects: false, // Free: max 10 subjects
  advancedStats: false,
  exportData: false,
};

export const PREMIUM_FEATURES: PremiumFeatures = {
  removeAds: true,
  cloudSync: true,
  themes: 'all',
  companionSkins: 'all',
  shareCardFrames: 'all',
  unlimitedSubjects: true,
  advancedStats: true,
  exportData: true,
};

// Premium pricing (PRD Section 14)
export const PREMIUM_PRICING = {
  lifetime: {
    price: 9.99,
    currency: 'USD',
    productId: 'studyflow_lifetime',
  },
  monthly: {
    price: 1.99,
    currency: 'USD',
    productId: 'studyflow_monthly',
  },
};

// Ad configuration
export const AD_CONFIG = {
  // Show interstitial ad after reflection (PRD: never during focus)
  showAfterSessions: 3, // Show ad every 3 sessions
  adUnitId: {
    ios: 'ca-app-pub-xxxxx/xxxxx',
    android: 'ca-app-pub-xxxxx/xxxxx',
  },
};
