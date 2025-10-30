# 🚀 Quick Setup Guide - LawnGuru Onboarding

Get your React Native onboarding flow running in 5 minutes!

## ⚡ Quick Start (Copy & Paste)

```bash
# Navigate to project
cd react-native-onboarding

# Install dependencies
npm install

# Start the app
npm start
```

Then press:
- **`i`** for iOS simulator
- **`a`** for Android emulator
- **`w`** for web browser

## 📋 Prerequisites Checklist

### Required:
- ✅ Node.js (v16+) - [Download](https://nodejs.org/)
- ✅ npm or yarn
- ✅ Expo CLI - `npm install -g expo-cli`

### Optional (for device testing):
- 📱 iOS Simulator (Mac only) - Install Xcode from App Store
- 🤖 Android Studio + Android Emulator - [Download](https://developer.android.com/studio)
- 📲 Expo Go app on your phone - [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

## 🎯 First Time Setup

### Step 1: Check Node.js
```bash
node --version
# Should show v16.0.0 or higher
```

### Step 2: Install Expo CLI
```bash
npm install -g expo-cli
```

### Step 3: Install Project Dependencies
```bash
cd react-native-onboarding
npm install
```

### Step 4: Start Development Server
```bash
npm start
```

You'll see a QR code in your terminal!

## 📱 Running on Devices

### iOS Simulator (Mac Only)
```bash
npm run ios
```

**First time?**
- Install Xcode from App Store
- Open Xcode → Preferences → Components → Install iOS Simulator

### Android Emulator
```bash
npm run android
```

**First time?**
1. Install [Android Studio](https://developer.android.com/studio)
2. Open Android Studio → Tools → AVD Manager
3. Create Virtual Device (Pixel 5 recommended)
4. Start emulator before running `npm run android`

### Physical Device (Easiest!)
1. Download **Expo Go** app:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Run `npm start`
3. Scan QR code with:
   - **iOS:** Camera app
   - **Android:** Expo Go app

### Web Browser
```bash
npm run web
```
Opens at `http://localhost:19006`

## 🔧 Common Issues & Fixes

### "Cannot find module 'expo'"
```bash
npm install
```

### "Metro bundler won't start"
```bash
npx expo start -c
# -c clears cache
```

### "Port 19000 already in use"
```bash
# Kill the process
lsof -ti:19000 | xargs kill -9

# Or start on different port
npx expo start --port 19001
```

### "iOS build failed"
```bash
cd ios
pod install
cd ..
npm run ios
```

### "Android emulator not found"
1. Open Android Studio
2. Tools → AVD Manager
3. Click Play ▶️ on any device
4. Wait for emulator to start
5. Run `npm run android` again

### "Dependencies not resolving"
```bash
# Nuclear option - fresh install
rm -rf node_modules
rm package-lock.json
npm install
```

## 🎨 Testing the Screens

Once running, you'll see:

1. **Splash Screen** (2 seconds)
   ↓
2. **Sign In Screen**
   - Test email: any@email.com
   - Test password: Password123!

3. **Create Account**
   - Try invalid email → See errors
   - Fill correctly → See checkmarks

4. **Password Creation**
   - Type "test" → See strength: Weak
   - Type "Test123!" → See strength: Strong

5. **Recovery Flow**
   - Use code: **123456** (demo)

## 📱 Device Compatibility

### iOS
- ✅ iOS 13.0+
- ✅ iPhone 6s and newer
- ✅ iPad (all models)

### Android
- ✅ Android 5.0+ (API 21+)
- ✅ All screen sizes

## 🔥 Hot Tips

### Live Reload
- Shake device (physical)
- Press `Cmd/Ctrl + D` (simulator)
- Press `r` in terminal

### Fast Refresh
- Save any file → Auto-updates
- Keeps component state
- Super fast!

### Debug Menu
- **iOS Simulator:** `Cmd + D`
- **Android Emulator:** `Cmd/Ctrl + M`
- **Device:** Shake device

### Useful Commands
```bash
# Clear cache and restart
npm start -- --clear

# Run on specific device
npm run ios -- --simulator="iPhone 14 Pro"

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

## 📊 Project Stats

- **6 Screens** - Complete onboarding flow
- **2 Reusable Components** - Button & Input
- **Real-time Validation** - All forms
- **Password Strength** - Visual indicator
- **Auto-formatting** - Phone numbers

## 🎯 Next Actions

After successful setup:

1. ✅ Test all screens
2. ✅ Modify `colors.js` with your brand colors
3. ✅ Update logo in `SplashScreen.js`
4. ✅ Connect to your API endpoints
5. ✅ Add your Firebase/OAuth configs

## 📞 Need Help?

### Common Questions:

**Q: Can I use this with bare React Native?**
A: Yes! Just eject from Expo or copy the components.

**Q: How do I add more screens?**
A: Create file in `src/screens/`, add to `App.js` Stack.Screen

**Q: Where do I add API calls?**
A: In the `handleSubmit` functions of each screen

**Q: How do I customize colors?**
A: Edit `src/theme/colors.js`

**Q: Can I use TypeScript?**
A: Yes! Rename files to `.tsx` and add types

### Resources:
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)

## ✅ Verification Checklist

Before considering setup complete:

- [ ] App starts without errors
- [ ] Can navigate between screens
- [ ] Form validation works
- [ ] Password strength indicator shows
- [ ] Can type in all input fields
- [ ] Buttons respond to taps
- [ ] Back buttons work
- [ ] Keyboard shows/hides properly

## 🎉 You're Ready!

Your LawnGuru onboarding flow is ready to customize and integrate with your backend!

**Happy coding! 🚀**

---

**Pro Tip:** Bookmark this file for quick reference during development.
