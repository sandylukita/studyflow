export type RootStackParamList = {
  '(onboarding)': undefined;
  '(tabs)': undefined;
  '(session)': undefined;
  community: undefined;
  premium: undefined;
  'trigger-cards': undefined;
  share: undefined;
};

export type TabsParamList = {
  index: undefined; // Home (Companion page)
  progress: undefined;
  settings: undefined;
};

export type OnboardingParamList = {
  welcome: undefined;
  truth: undefined;
  promise: undefined;
  bond: undefined;
  proof: undefined;
  success: undefined;
};

export type SessionParamList = {
  'mindful-entry': undefined;
  'subject-input': { skipBreathing?: boolean };
  'two-minute-start': { subject: string };
  'active-session': { subject: string; sessionId: string };
  'continue-or-stop': { sessionId: string };
  reflection: { sessionId: string };
  'reset-ritual': undefined;
};
