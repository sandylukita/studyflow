# 🚀 StudyFlow - Quick Start Guide

## Step 1: Install Dependencies (Already Done ✓)
Dependencies are already installed. If you need to reinstall:
```bash
npm install
```

## Step 2: Start the App
```bash
npm start
```

This will:
- Start the Expo development server
- Show a QR code in your terminal
- Open Metro bundler in your browser

## Step 3: Run on Your Device

### Option A: Physical Device (Recommended)
1. **Install Expo Go** on your phone:
   - iOS: Download from App Store
   - Android: Download from Play Store

2. **Scan the QR code**:
   - iOS: Use Camera app
   - Android: Use Expo Go app

3. **Wait for build** (first time takes 1-2 minutes)

4. **App opens** → Start using StudyFlow!

### Option B: Emulator/Simulator
```bash
# Android
npm run android

# iOS (Mac only)
npm run ios
```

---

## ✅ What to Test

### 1. Onboarding Flow (First Launch)
- [ ] See 6 onboarding screens
- [ ] Animations and transitions smooth
- [ ] "Let's begin" button works
- [ ] Navigates to main app

### 2. Home Screen (Companion Page)
- [ ] Companion visual displays
- [ ] Tap companion → See affirmation
- [ ] Progress bar shows "Seed Stage"
- [ ] "Begin 2-Minute Start" button works

### 3. Session Flow
- [ ] Breathing screen → press and hold circle
- [ ] Subject input → type something → "Add Subject"
- [ ] Timer shows 2:00 and counts down
- [ ] "Begin Warm Start" starts countdown
- [ ] After 2 minutes → "Continue or Stop" screen
- [ ] Choose "I'm Done"
- [ ] Reflection screen → select calm level
- [ ] Complete session

### 4. Progress Dashboard
- [ ] Safety Meter shows last 7 days
- [ ] If you completed a session, today shows filled icon
- [ ] Heatmap displays 4 weeks
- [ ] Tap a heatmap cell → modal shows details
- [ ] Stats cards show totals

### 5. Settings
- [ ] All menu items present
- [ ] "Reset Onboarding" → confirm → back to onboarding
- [ ] Premium page opens
- [ ] Community page opens

---

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
npm start --clear
```

### App won't load on device
1. Make sure phone and computer are on same WiFi
2. Try scanning QR code again
3. Restart Expo Go app
4. Restart development server

### TypeScript errors
```bash
npm run tsc --noEmit
```

### Clear cache
```bash
npm start -- --clear
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `app/(tabs)/index.tsx` | Home screen (Companion page) |
| `src/hooks/useStore.ts` | Global state management |
| `src/constants/theme.ts` | Colors, fonts, spacing |
| `src/constants/affirmations.ts` | Affirmation messages |
| `src/constants/evolutionStages.ts` | Companion growth logic |

---

## 🎨 Customize

### Change primary color
Edit `src/constants/colors.ts`:
```typescript
primary: '#YOUR_COLOR_HERE',
```

### Add more affirmations
Edit `src/constants/affirmations.ts`:
```typescript
export const AFFIRMATIONS = [
  // Add your messages here
];
```

### Change session duration
Edit `src/constants/config.ts`:
```typescript
DEFAULT_SESSION_DURATION: 2 * 60, // seconds
```

---

## 📱 Expected Behavior

### First Launch
1. See onboarding (6 screens)
2. Complete onboarding
3. Land on home screen
4. Companion at "Seed Stage" (0 sessions)

### After First Session
1. Complete a session
2. Companion progress increases
3. Heatmap shows today's session
4. Safety Meter shows today filled
5. Stats show: 1 total session

### After 7 Sessions
1. Companion evolves to "Sprout Stage"
2. Visual changes (different icon)
3. Progress bar resets for next stage

---

## 🎯 Success Checklist

- [ ] App runs without errors
- [ ] Can complete onboarding
- [ ] Can start and finish a session
- [ ] Session appears in heatmap
- [ ] Safety meter updates
- [ ] Companion progress increases
- [ ] Can navigate all tabs
- [ ] Can reset onboarding
- [ ] All buttons work
- [ ] No TypeScript errors

---

## 🔥 Pro Tips

1. **Use Expo Go for rapid testing** → Instant reloads
2. **Check console logs** → All debug info there
3. **Reset onboarding** from Settings → Test flow again
4. **Complete 7 sessions** → See companion evolve
5. **Try on both iOS and Android** → UI looks great on both

---

## 📞 Need Help?

Check these files:
- `README.md` → Full documentation
- `IMPLEMENTATION_SUMMARY.md` → What's been built
- Console logs → Error messages
- TypeScript errors → Type issues

---

## 🎉 You're All Set!

Run `npm start` and start testing StudyFlow!

**Remember:** You're not lazy. You're just overwhelmed. 🌱
