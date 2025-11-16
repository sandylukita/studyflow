import { create } from 'zustand';
import { Session, SessionStats } from '@types/session';
import { CompanionState } from '@types/companion';
import { UserProfile } from '@types/user';
import { getEvolutionStage, getProgressToNextStage } from '@constants/evolutionStages';

interface AppState {
  // User
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;

  // Sessions
  sessions: Session[];
  activeSession: Session | null;
  addSession: (session: Session) => void;
  updateSession: (id: string, updates: Partial<Session>) => void;
  setActiveSession: (session: Session | null) => void;

  // Companion
  companion: CompanionState;
  updateCompanion: () => void;

  // Stats
  getStats: () => SessionStats;
}

export const useStore = create<AppState>((set, get) => ({
  // User
  user: null,
  setUser: (user) => set({ user }),

  // Sessions
  sessions: [],
  activeSession: null,
  addSession: (session) => {
    set((state) => ({
      sessions: [...state.sessions, session],
    }));
    get().updateCompanion();
  },
  updateSession: (id, updates) =>
    set((state) => ({
      sessions: state.sessions.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    })),
  setActiveSession: (session) => set({ activeSession: session }),

  // Companion
  companion: {
    stage: 'seed',
    totalSessions: 0,
    progressToNextStage: 0,
    sessionsUntilNextStage: 7,
    lastInteraction: null,
  },
  updateCompanion: () => {
    const { sessions } = get();
    const totalSessions = sessions.length;
    const progress = getProgressToNextStage(totalSessions);

    set({
      companion: {
        stage: progress.currentStage,
        totalSessions,
        progressToNextStage: progress.progress,
        sessionsUntilNextStage: progress.sessionsUntilNext,
        lastInteraction: Date.now(),
      },
    });
  },

  // Stats
  getStats: () => {
    const { sessions } = get();
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const totalSessions = sessions.length;
    const totalStudyTime = sessions.reduce((acc, s) => acc + s.duration, 0);
    const averageCalmLevel =
      sessions.reduce((acc, s) => acc + s.calmLevel, 0) / totalSessions || 0;

    const showUpsLast7Days = sessions.filter(
      (s) => new Date(s.startTime) >= sevenDaysAgo
    ).length;

    const showUpsLast30Days = sessions.filter(
      (s) => new Date(s.startTime) >= thirtyDaysAgo
    ).length;

    // Calculate current streak
    let currentStreak = 0;
    const sortedSessions = [...sessions].sort((a, b) => b.startTime - a.startTime);
    let lastDate: string | null = null;

    for (const session of sortedSessions) {
      const sessionDate = new Date(session.startTime).toDateString();
      if (!lastDate) {
        lastDate = sessionDate;
        currentStreak = 1;
      } else {
        const prevDate = new Date(lastDate);
        const currDate = new Date(sessionDate);
        const diffDays = Math.floor(
          (prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (diffDays === 1) {
          currentStreak++;
          lastDate = sessionDate;
        } else if (diffDays > 1) {
          break;
        }
      }
    }

    return {
      totalSessions,
      totalStudyTime,
      averageCalmLevel,
      currentStreak,
      longestStreak: currentStreak, // TODO: Calculate properly
      showUpsLast7Days,
      showUpsLast30Days,
    };
  },
}));
