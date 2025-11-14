# StudyFlow - Effortless study, calm mind

A React Native (Expo) app designed to help overwhelmed students find their flow through gentle, non-pressured study sessions.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your phone (for testing)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on your device:**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press `a` for Android emulator, `i` for iOS simulator

## 📁 Project Structure

```
studyflow/
├── app/                        # Expo Router (file-based routing)
│   ├── (tabs)/                 # Main app tabs
│   │   ├── index.tsx          # Home (Companion Page)
│   │   ├── progress.tsx       # Progress Dashboard
│   │   └── settings.tsx       # Settings
│   ├── (onboarding)/          # Onboarding flow (6 screens)
│   ├── (session)/             # Session flow screens
│   ├── _layout.tsx            # Root layout
│   └── index.tsx              # Entry point
│
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── common/           # Button, Card, Input, Modal, etc.
│   │   ├── companion/        # CompanionVisual, ProgressBar
│   │   ├── heatmap/          # CalmHeatmap, SafetyMeter
│   │   ├── session/          # Session-related components
│   │   └── navigation/       # Navigation components
│   │
│   ├── constants/            # App constants
│   │   ├── theme.ts          # Design system
│   │   ├── colors.ts         # Color palette
│   │   ├── affirmations.ts   # Affirmation messages
│   │   ├── evolutionStages.ts # Companion evolution
│   │   └── config.ts         # App configuration
│   │
│   ├── hooks/                # Custom hooks
│   │   └── useStore.ts       # Zustand state management
│   │
│   ├── types/                # TypeScript types
│   │   ├── session.ts
│   │   ├── companion.ts
│   │   ├── user.ts
│   │   ├── navigation.ts
│   │   └── heatmap.ts
│   │
│   ├── utils/                # Helper functions
│   │   └── heatmapHelpers.ts
│   │
│   └── assets/               # Static assets
│       ├── images/
│       └── fonts/
│
├── package.json
├── app.json
├── tsconfig.json
└── babel.config.js
```

## ✅ Implemented Features

### ✨ Onboarding Flow (Complete)
- 6 beautifully designed screens
- Welcome → Truth → Promise → Bond → Proof → Success
- Gentle introduction to the app's philosophy

### 🏠 Home Screen (Companion Page)
- Growing companion visual (Seed → Sprout → Leaf → Bloom)
- Tap for affirmations
- Press and hold for breathing exercise (planned)
- Progress bar showing evolution
- Quick start button for 2-minute sessions

### 📊 Progress Dashboard
- **Safety Meter**: 7-day show-up tracking
- **Calm Heatmap**: 4-week color-coded visualization
- Session statistics (total sessions, minutes, streaks)
- Interactive day details modal

### ⚙️ Settings
- Profile management (placeholder)
- Premium upgrade
- Notifications & theme settings (planned)
- Community access
- Help & support
- Reset onboarding

### 🎨 Design System
- Complete theme with colors, typography, spacing
- Reusable components (Button, Card, Input, Modal)
- Gradient backgrounds
- Custom color palette for calm states

### 🧠 State Management
- Zustand store for global state
- Session tracking
- Companion evolution logic
- Statistics calculations

## 🚧 In Progress / Planned

### Session Flow (Next Priority)
- Mindful entry (breathing exercise)
- Subject input
- 2-minute timer
- Continue or stop choice
- Reflection page
- Reset ritual

### Firebase Integration
- User authentication
- Cloud Firestore for data sync
- Real-time updates

### AdMob Integration
- Banner ads
- Interstitial ads (every 3 sessions)

### Premium Features
- Premium subscription page
- Advanced analytics
- Custom themes
- Ad-free experience

## 🎯 Key Features from PRD

- **2-Minute Start**: Low-pressure entry point
- **Gentle Companion**: Grows with user (not streaks/scores)
- **Safety Meter**: Visual show-up tracking
- **Calm Heatmap**: 4-week color-coded progress
- **Subject Tracking**: Per-session subject input
- **Affirmations**: Positive reinforcement
- **No Pressure**: Can stop anytime
- **Anti-Doom Pattern**: Reset ritual for overwhelm

## 📦 Tech Stack

- **Framework**: React Native (Expo SDK 50)
- **Routing**: Expo Router (file-based)
- **Language**: TypeScript
- **State Management**: Zustand
- **Storage**: AsyncStorage
- **Backend**: Firebase (Firestore, Auth)
- **Monetization**: AdMob
- **UI**: Custom components + Expo Linear Gradient
- **Date Handling**: date-fns
- **Animations**: Expo Reanimated (planned)

## 🎨 Design Philosophy

- Dark gradient background (#0d1a18 → #12201e)
- Primary teal color (#7de3d3)
- Minimalist, calming interface
- Rounded corners and soft glows
- Typography: Inter font family
- Haptic feedback for interactions

## 📱 Screens Implemented

1. ✅ Onboarding (6 screens)
2. ✅ Home / Companion Page
3. ✅ Progress Dashboard
4. ✅ Settings
5. 🚧 Session Flow (7 screens) - In Progress
6. 🚧 Premium Page - Planned
7. 🚧 Community Page - Planned
8. 🚧 Share Page - Planned

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and fill in:
- Firebase configuration
- AdMob IDs
- App environment

### Customization
- Colors: `src/constants/colors.ts`
- Theme: `src/constants/theme.ts`
- Affirmations: `src/constants/affirmations.ts`
- Evolution stages: `src/constants/evolutionStages.ts`
- App config: `src/constants/config.ts`

## 🐛 Known Issues / TODOs

- [ ] Add Inter font files to `src/assets/fonts/`
- [ ] Implement session flow screens
- [ ] Add Firebase configuration
- [ ] Implement AdMob integration
- [ ] Add breathing animation
- [ ] Implement timer functionality
- [ ] Add sound effects
- [ ] Implement notifications
- [ ] Add premium features
- [ ] Write tests

## 📄 License

Private project for Sandy

## 🙏 Acknowledgments

Built with love for overwhelmed students everywhere. You're not lazy. You're just overwhelmed.
