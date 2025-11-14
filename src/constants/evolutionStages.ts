export type EvolutionStage = 'seed' | 'sprout' | 'leaf' | 'bloom';

export interface StageConfig {
  name: string;
  description: string;
  requiredSessions: number;
  image: string; // Asset path
  nextStageName: string | null;
}

export const EVOLUTION_STAGES: Record<EvolutionStage, StageConfig> = {
  seed: {
    name: 'Seed Stage',
    description: "You're planting the first seeds of calm.",
    requiredSessions: 0,
    image: 'seed',
    nextStageName: 'Sprout Stage',
  },
  sprout: {
    name: 'Sprout Stage',
    description: "You're beginning to grow.",
    requiredSessions: 7,
    image: 'sprout',
    nextStageName: 'Leaf Stage',
  },
  leaf: {
    name: 'Leaf Stage',
    description: "You're flourishing with consistency.",
    requiredSessions: 21,
    image: 'leaf',
    nextStageName: 'Bloom Stage',
  },
  bloom: {
    name: 'Bloom Stage',
    description: "You're in full bloom. This is your flow.",
    requiredSessions: 50,
    image: 'bloom',
    nextStageName: null,
  },
};

export const getEvolutionStage = (totalSessions: number): EvolutionStage => {
  if (totalSessions >= 50) return 'bloom';
  if (totalSessions >= 21) return 'leaf';
  if (totalSessions >= 7) return 'sprout';
  return 'seed';
};

export const getProgressToNextStage = (totalSessions: number): {
  currentStage: EvolutionStage;
  nextStage: EvolutionStage | null;
  progress: number;
  sessionsUntilNext: number;
} => {
  const currentStage = getEvolutionStage(totalSessions);
  const stageConfig = EVOLUTION_STAGES[currentStage];

  let nextStageKey: EvolutionStage | null = null;
  let nextStageThreshold = 0;

  if (currentStage === 'seed') {
    nextStageKey = 'sprout';
    nextStageThreshold = 7;
  } else if (currentStage === 'sprout') {
    nextStageKey = 'leaf';
    nextStageThreshold = 21;
  } else if (currentStage === 'leaf') {
    nextStageKey = 'bloom';
    nextStageThreshold = 50;
  }

  const currentThreshold = EVOLUTION_STAGES[currentStage].requiredSessions;
  const sessionsIntoStage = totalSessions - currentThreshold;
  const sessionsNeededForNext = nextStageThreshold - currentThreshold;
  const progress = nextStageKey
    ? Math.min((sessionsIntoStage / sessionsNeededForNext) * 100, 100)
    : 100;

  const sessionsUntilNext = nextStageKey
    ? Math.max(0, nextStageThreshold - totalSessions)
    : 0;

  return {
    currentStage,
    nextStage: nextStageKey,
    progress,
    sessionsUntilNext,
  };
};
