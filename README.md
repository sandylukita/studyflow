# StudyFlow - Effortless study, calm mind

**"Your brain studies best when it feels safe, not pressured."**

A calm, minimalist emotional-productivity app designed to help people study consistently without relying on motivation and without burnout. Built on neuroscience principles and behavioral psychology.

**Make studying feel as natural and effortless as brushing your teeth.**

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
│   │   └── useStore.ts       # Zustand state (PRD-aligned)
│   │
│   ├── types/                # TypeScript types (PRD v1.8)
│   │   ├── session.ts        # Session, Feeling, SessionType
│   │   ├── companion.ts      # Companion evolution system
│   │   ├── subject.ts        # Subject tracking
│   │   ├── premium.ts        # Premium features config
│   │   ├── user.ts           # User profile
│   │   ├── navigation.ts     # Navigation types
│   │   └── heatmap.ts        # Calm Flow Heatmap
│   │
│   ├── utils/                # Helper functions (PRD logic)
│   │   ├── heatmap.ts        # Heatmap calculations
│   │   ├── companion.ts      # Companion growth logic
│   │   └── stats.ts          # Emotional health metrics
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

## ✅ Core Features (PRD v1.8 Aligned)

### 1️⃣ Quick Mindful Entry ✅
- 3-second breathing bubble animation
- "Why calm matters" messaging
- Low-friction entry point

### 2️⃣ Optional Subject Input 🚧
- Biology, Writing, Work, Custom options
- Recent subjects as quick-select chips (max 4)
- Frequency tracking for insights
- **Status**: Types implemented, UI pending

### 3️⃣ 2-Min Warm Start ✅
- Low-pressure timer (can stop anytime)
- "You can stop after 2 minutes" messaging
- Session type: `2min`

### 4️⃣ Continue or Stop Prompt 🚧
- Three options: Stop, Focus Gently (15m), Deep Work (45m)
- Session types: `2min` | `focus_gently` | `deep_work`
- **Status**: Logic ready, UI pending

### 5️⃣ Do Not Disturb Reminder 🚧
- Gentle suggestion (not forceful)
- Platform-specific DND APIs

### 6️⃣ Focus Timer ✅
- Minimal design with soft visuals
- Auto-navigation on completion (no render errors!)
- Duration tracking

### 7️⃣ Reflection Chips 🚧
- Calm / Neutral / Tense / Distracted
- Growth points per feeling:
  - **Calm**: +3 points
  - **Neutral**: +1 point
  - **Tense**: +1 point ("you tried")
  - **Distracted**: +0.5 points
- **Status**: Types & logic ready, UI pending

### 8️⃣ Reset Ritual 🚧
- 10s calming end sequence
- "You did enough" messaging
- Prevents burnout

### 9️⃣ Companion Evolution ✅ (System Ready)
- **Stages**: Seed → Sprout → Bud → Leaf → Bloom → Spirit (premium)
- **Growth thresholds**: [0, 10, 25, 50, 100, 200]
- **Aura colors**: Changes based on last 3 sessions
  - Calm: Soft teal glow (#7DE3D3)
  - Tense: Warm orange (#EB9E55)
  - Distracted: Lavender (#C8A2C8)
- **Status**: Full logic implemented, visuals pending

### 🔟 Calm Flow Heatmap ✅ (System Ready)
- 4 weeks × 7 days = 28 cells
- Color-coded by dominant feeling
- Latest cell has breathing pulse animation
- Tap modal shows: date, duration, subject, feeling
- **Status**: Calculation logic complete, UI pending

### 1️⃣1️⃣ Heatmap Tap Modal 🚧
- Shows: duration, feeling, subject, notes
- CTA: "Share Calm Moment"
- CTA: "View All Sessions of [Subject]"

### 1️⃣2️⃣ Share My Calm Card 🚧
- Transparent Strava-style card
- Premium frames available

### 1️⃣3️⃣ Trigger Cards Library 🚧
- Reframes for shame, comparison, pressure
- Based on Cialdini principles

### 1️⃣4️⃣ Premium Features ✅ (System Ready)
- **Lifetime**: $9.99 one-time
- **Monthly**: $1.99/month
- Features:
  - ✅ Remove ads
  - ✅ Cloud sync (offline-first)
  - ✅ All themes
  - ✅ Premium companion skins
  - ✅ Premium share card frames
- **Status**: Feature gating complete, payment integration pending

### 1️⃣5️⃣ Community Roll Call 🚧
- Show who studied calmly today
- Optional v2 feature

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
