/**
 * StudyFlow Zustand Store
 * PRD-aligned state management for emotional-productivity app
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Session, SessionStats } from '@types/session';
import { CompanionState } from '@types/companion';
import { Subject } from '@types/subject';
import { UserPremium, PremiumFeatures, FREE_FEATURES, PREMIUM_FEATURES } from '@types/premium';
import { HeatmapData } from '@types/heatmap';

import { updateCompanionAfterSession } from '@utils/companion';
import { calculateSessionStats } from '@utils/stats';
import { generateHeatmapData } from '@utils/heatmap';

interface AppState {
  // User & Premium
  userId: string | null;
  premium: UserPremium;
  features: PremiumFeatures;
  setPremium: (premium: boolean, purchaseType?: 'lifetime' | 'monthly') => void;

  // Sessions
  sessions: Session[];
  activeSession: Session | null;
  addSession: (session: Session) => void;
  updateSession: (id: string, updates: Partial<Session>) => void;
  setActiveSession: (session: Session | null) => void;
  completeSession: (sessionId: string, feeling: Session['feeling'], notes?: string) => void;

  // Subjects (PRD Section 7)
  subjects: Subject[];
  getRecentSubjects: () => Subject[];
  addOrUpdateSubject: (subjectName: string, sessionDuration: number) => void;

  // Companion (PRD Section 9)
  companion: CompanionState;
  updateCompanionAfterSession: (session: Session) => void;

  // Heatmap (PRD Section 8)
  getHeatmapData: () => HeatmapData;

  // Stats (PRD: No streaks!)
  getStats: () => SessionStats;

  // Sync
  lastSyncedAt: number | null;
  syncToCloud: () => Promise<void>;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // User & Premium
      userId: null,
      premium: {
        isPremium: false,
        purchaseDate: null,
        purchaseType: null,
        expiryDate: null,
      },
      features: FREE_FEATURES,
      setPremium: (isPremium, purchaseType) =>
        set({
          premium: {
            isPremium,
            purchaseDate: isPremium ? Date.now() : null,
            purchaseType: purchaseType || null,
            expiryDate: purchaseType === 'lifetime' ? null : Date.now() + 30 * 24 * 60 * 60 * 1000,
          },
          features: isPremium ? PREMIUM_FEATURES : FREE_FEATURES,
        }),

      // Sessions
      sessions: [],
      activeSession: null,

      addSession: (session) =>
        set((state) => ({
          sessions: [...state.sessions, session],
        })),

      updateSession: (id, updates) =>
        set((state) => ({
          sessions: state.sessions.map((s) => (s.id === id ? { ...s, ...updates, updatedAt: Date.now() } : s)),
        })),

      setActiveSession: (session) => set({ activeSession: session }),

      completeSession: (sessionId, feeling, notes) => {
        const state = get();
        const session = state.sessions.find((s) => s.id === sessionId);

        if (session) {
          const completedSession: Session = {
            ...session,
            feeling,
            notes,
            wasCompleted: true,
            endTime: Date.now(),
            updatedAt: Date.now(),
          };

          // Update session
          get().updateSession(sessionId, {
            feeling,
            notes,
            wasCompleted: true,
            endTime: Date.now(),
          });

          // Update companion based on feeling
          get().updateCompanionAfterSession(completedSession);

          // Update subject stats
          if (session.subject) {
            get().addOrUpdateSubject(session.subject, session.duration);
          }
        }
      },

      // Subjects (PRD Section 7)
      subjects: [],

      getRecentSubjects: () => {
        const { subjects } = get();
        return subjects
          .sort((a, b) => b.lastUsed - a.lastUsed)
          .slice(0, 4); // MAX_RECENT_SUBJECTS
      },

      addOrUpdateSubject: (subjectName, sessionDuration) =>
        set((state) => {
          const existing = state.subjects.find((s) => s.name === subjectName);

          if (existing) {
            return {
              subjects: state.subjects.map((s) =>
                s.name === subjectName
                  ? {
                      ...s,
                      lastUsed: Date.now(),
                      totalSessions: s.totalSessions + 1,
                      totalDuration: s.totalDuration + sessionDuration,
                    }
                  : s
              ),
            };
          }

          return {
            subjects: [
              ...state.subjects,
              {
                name: subjectName,
                lastUsed: Date.now(),
                totalSessions: 1,
                totalDuration: sessionDuration,
                createdAt: Date.now(),
              },
            ],
          };
        }),

      // Companion (PRD Section 9)
      companion: {
        stage: 'seed',
        growthPoints: 0,
        currentAura: 'neutral',
        skin: 'default',
        unlockedSkins: ['default'],
        lastEvolution: null,
        createdAt: Date.now(),
      },

      updateCompanionAfterSession: (session) => {
        const { companion, sessions } = get();
        const updatedCompanion = updateCompanionAfterSession(companion, session, sessions);
        set({ companion: updatedCompanion });
      },

      // Heatmap (PRD Section 8)
      getHeatmapData: () => {
        const { sessions } = get();
        return generateHeatmapData(sessions);
      },

      // Stats (PRD: No streaks!)
      getStats: () => {
        const { sessions } = get();
        return calculateSessionStats(sessions);
      },

      // Sync
      lastSyncedAt: null,
      syncToCloud: async () => {
        const { premium, sessions, companion, subjects } = get();

        if (!premium.isPremium) {
          console.log('Cloud sync is a premium feature');
          return;
        }

        // TODO: Implement Firebase sync
        console.log('Syncing to cloud...', { sessions, companion, subjects });

        set({ lastSyncedAt: Date.now() });
      },
    }),
    {
      name: 'studyflow-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
