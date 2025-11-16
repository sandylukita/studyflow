/**
 * Companion Evolution Logic
 * PRD Section 9: Growth based on emotional consistency
 */

import { CompanionState, CompanionStage, CompanionAura, CompanionStageThresholds } from '@types/companion';
import { Session, Feeling, FeelingGrowthPoints } from '@types/session';

/**
 * Calculate growth points to add based on session feeling
 * PRD Section 9 Growth Rules:
 * - Calm sessions: +3 points
 * - Neutral: +1 point
 * - Tense: +1 point (you tried)
 * - Distracted: +0.5 points
 */
export function calculateGrowthPoints(feeling: Feeling): number {
  return FeelingGrowthPoints[feeling];
}

/**
 * Determine companion stage based on total growth points
 * PRD Section 9 Thresholds: [0, 10, 25, 50, 100, 200]
 */
export function getCompanionStage(growthPoints: number): CompanionStage {
  if (growthPoints >= CompanionStageThresholds.spirit) return 'spirit';
  if (growthPoints >= CompanionStageThresholds.bloom) return 'bloom';
  if (growthPoints >= CompanionStageThresholds.leaf) return 'leaf';
  if (growthPoints >= CompanionStageThresholds.bud) return 'bud';
  if (growthPoints >= CompanionStageThresholds.sprout) return 'sprout';
  return 'seed';
}

/**
 * Determine companion aura based on recent sessions (last 3 sessions)
 * PRD Section 9: "Companion Aura Colors based on recent emotional state"
 */
export function getCompanionAura(recentSessions: Session[]): CompanionAura {
  if (recentSessions.length === 0) return 'neutral';

  // Take last 3 sessions
  const last3Sessions = recentSessions.slice(-3);

  const feelingCounts: Record<Feeling, number> = {
    Calm: 0,
    Neutral: 0,
    Tense: 0,
    Distracted: 0,
  };

  last3Sessions.forEach((session) => {
    feelingCounts[session.feeling]++;
  });

  // Determine dominant feeling
  if (feelingCounts.Calm >= 2) return 'calm';
  if (feelingCounts.Tense >= 2) return 'tense';
  if (feelingCounts.Distracted >= 2) return 'distracted';

  return 'neutral';
}

/**
 * Update companion state after a session
 */
export function updateCompanionAfterSession(
  currentCompanion: CompanionState,
  session: Session,
  allSessions: Session[]
): CompanionState {
  // Add growth points based on feeling
  const pointsToAdd = calculateGrowthPoints(session.feeling);
  const newGrowthPoints = currentCompanion.growthPoints + pointsToAdd;

  // Check if stage evolved
  const newStage = getCompanionStage(newGrowthPoints);
  const didEvolve = newStage !== currentCompanion.stage;

  // Update aura based on recent sessions
  const newAura = getCompanionAura(allSessions);

  return {
    ...currentCompanion,
    growthPoints: newGrowthPoints,
    stage: newStage,
    currentAura: newAura,
    lastEvolution: didEvolve ? Date.now() : currentCompanion.lastEvolution,
  };
}

/**
 * Get progress to next stage (0-100%)
 */
export function getProgressToNextStage(companion: CompanionState): number {
  const currentStage = companion.stage;
  const currentPoints = companion.growthPoints;

  // Find next stage threshold
  const stages: CompanionStage[] = ['seed', 'sprout', 'bud', 'leaf', 'bloom', 'spirit'];
  const currentIndex = stages.indexOf(currentStage);

  if (currentIndex === stages.length - 1) {
    // Already at max stage
    return 100;
  }

  const nextStage = stages[currentIndex + 1];
  const currentThreshold = CompanionStageThresholds[currentStage];
  const nextThreshold = CompanionStageThresholds[nextStage];

  const pointsInCurrentStage = currentPoints - currentThreshold;
  const pointsNeededForNextStage = nextThreshold - currentThreshold;

  return Math.min(100, (pointsInCurrentStage / pointsNeededForNextStage) * 100);
}

/**
 * Get points needed for next evolution
 */
export function getPointsToNextStage(companion: CompanionState): number {
  const currentStage = companion.stage;

  const stages: CompanionStage[] = ['seed', 'sprout', 'bud', 'leaf', 'bloom', 'spirit'];
  const currentIndex = stages.indexOf(currentStage);

  if (currentIndex === stages.length - 1) {
    return 0; // Already at max
  }

  const nextStage = stages[currentIndex + 1];
  const nextThreshold = CompanionStageThresholds[nextStage];

  return Math.max(0, nextThreshold - companion.growthPoints);
}
