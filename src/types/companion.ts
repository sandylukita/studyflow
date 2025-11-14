import { EvolutionStage } from '@constants/evolutionStages';

export interface CompanionState {
  stage: EvolutionStage;
  totalSessions: number;
  progressToNextStage: number;
  sessionsUntilNextStage: number;
  lastInteraction: number | null;
}

export interface CompanionAnimation {
  type: 'idle' | 'growing' | 'breathing' | 'celebrating';
  duration: number;
}
