/**
 * Companion Evolution System
 * PRD Section 9: Tamagotchi-like creature that evolves with emotional consistency
 */

export type CompanionStage = 'seed' | 'sprout' | 'bud' | 'leaf' | 'bloom' | 'spirit';
export type CompanionAura = 'calm' | 'tense' | 'distracted' | 'neutral';

export interface CompanionState {
  stage: CompanionStage;
  growthPoints: number; // Based on emotional consistency, not sessions
  currentAura: CompanionAura; // Changes based on recent feelings
  skin: string; // Default or premium skin ID
  unlockedSkins: string[]; // Premium feature
  lastEvolution: number | null; // Timestamp of last evolution
  createdAt: number;
}

export interface CompanionAnimation {
  type: 'idle' | 'growing' | 'breathing' | 'celebrating';
  duration: number;
}

// Growth thresholds for each stage (PRD Section 9)
export const CompanionStageThresholds: Record<CompanionStage, number> = {
  seed: 0,
  sprout: 10,
  bud: 25,
  leaf: 50,
  bloom: 100,
  spirit: 200, // Premium stage
};

// Aura colors based on recent emotional state (PRD Section 9)
export const CompanionAuraColors: Record<CompanionAura, string> = {
  calm: '#7DE3D3', // Soft teal glow
  tense: '#EB9E55', // Warm orange glow
  distracted: '#C8A2C8', // Soft purple glow
  neutral: '#65C1B8', // Muted teal
};

// Available companion skins
export interface CompanionSkin {
  id: string;
  name: string;
  isPremium: boolean;
  previewImage: string; // Asset path
  stages: Record<CompanionStage, string>; // Asset paths for each stage
}

// Default skin configuration
export const DEFAULT_COMPANION_SKIN: CompanionSkin = {
  id: 'default',
  name: 'Calm Sprout',
  isPremium: false,
  previewImage: 'companion/default/preview',
  stages: {
    seed: 'companion/default/seed',
    sprout: 'companion/default/sprout',
    bud: 'companion/default/bud',
    leaf: 'companion/default/leaf',
    bloom: 'companion/default/bloom',
    spirit: 'companion/default/spirit',
  },
};
