# LawnGuru Onboarding Flow - React Native

Complete onboarding flow for LawnGuru mobile app built with React Native and Expo. Includes authentication screens with real-time validation, password strength indicators, and recovery flows.

## 📱 Screens Included

1. **Splash Screen** - Welcome animation with LawnGuru branding
2. **Sign In Screen** - Email/password login with social auth options
3. **Create Account Screen** - Multi-field registration form
4. **Password Screen** - Password creation with strength indicator and requirements
5. **Forgot Password Screen** - Email recovery flow
6. **Recovery Screen** - 6-digit code verification

## 🎨 Features

- ✅ Real-time form validation with error messages
- ✅ Password strength indicator (Weak/Medium/Strong)
- ✅ Show/hide password toggle
- ✅ Auto-capitalize names
- ✅ Auto-format phone numbers (xxx-xxx-xxxx)
- ✅ Email validation with regex
- ✅ Success state indicators (green checkmarks)
- ✅ Loading states for all async actions
- ✅ Smooth navigation transitions
- ✅ Keyboard-aware scrolling
- ✅ Responsive design for all screen sizes
- ✅ Accessibility support

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Navigate to project directory:**
```bash
cd react-native-onboarding
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start the development server:**
```bash
npm start
# or
yarn start
```

4. **Run on your device:**

- **iOS:** Press `i` in the terminal or run `npm run ios`
- **Android:** Press `a` in the terminal or run `npm run android`
- **Web:** Press `w` in the terminal or run `npm run web`

## 📁 Project Structure

```
react-native-onboarding/
├── App.js                          # Main navigation setup
├── package.json                    # Dependencies
├── app.json                        # Expo configuration
├── src/
│   ├── components/                 # Reusable components
│   │   ├── Button.js              # Primary/secondary/outline buttons
│   │   └── Input.js               # Text input with validation
│   ├── screens/                    # Screen components
│   │   ├── SplashScreen.js        # Welcome splash screen
│   │   ├── SignInScreen.js        # Login screen
│   │   ├── CreateAccountScreen.js # Registration form
│   │   ├── PasswordScreen.js      # Password creation with strength
│   │   ├── ForgotPasswordScreen.js # Password recovery email
│   │   └── RecoveryScreen.js      # 6-digit code verification
│   └── theme/
│       └── colors.js              # Color palette
└── README.md
```

## 🎨 Design System

### Colors

```javascript
Primary: #008934 (LawnGuru Green)
Success: #10B981
Error: #EF4444
Warning: #F59E0B
```

### Components

#### Button
```jsx
<Button
  title="Continue"
  onPress={handlePress}
  variant="primary"      // primary | secondary | outline
  loading={false}
  disabled={false}
/>
```

#### Input
```jsx
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  error={emailError}
  success={isValid}
  showPasswordToggle={false}
  leftIcon={<Text>✉️</Text>}
/>
```

## 🔄 Navigation Flow

```
Splash Screen (2s auto-redirect)
    ↓
Sign In Screen
    ├─→ Create Account Screen → Password Screen → ✅ Success
    └─→ Forgot Password Screen → Recovery Screen → Reset Password
```

## ✨ Screen Details

### 1. Splash Screen
- Auto-navigates to Sign In after 2 seconds
- Shows LawnGuru logo and tagline
- Clean, minimal design

### 2. Sign In Screen
- Email and password inputs with validation
- "Forgot password?" link
- Social login buttons (Google, Apple)
- "Sign up" link to registration
- Real-time validation feedback

### 3. Create Account Screen
- First name, last name, email, phone, password fields
- Auto-capitalization for names
- Auto-formatting for phone numbers
- Real-time validation with success indicators
- Navigates to Password screen on continue

### 4. Password Screen
- Password and confirm password inputs
- Real-time password strength indicator (Weak/Medium/Strong)
- Visual requirements checklist:
  - ✓ At least 8 characters
  - ✓ One uppercase letter
  - ✓ One number
  - ✓ One special character
- Validates password match
- Creates account on success

### 5. Forgot Password Screen
- Email input for recovery
- Sends reset link to email
- Shows success confirmation
- Resend email option

### 6. Recovery Screen
- 6-digit code input (auto-focus next field)
- Visual feedback for filled/error states
- Code expiration timer
- Resend code option
- Validates code and navigates to reset

## 🔐 Validation Rules

### Email
- Required field
- Valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)

### Password
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 number
- At least 1 special character

### Names
- Minimum 2 characters
- Auto-capitalized first letter

### Phone
- Optional field
- Auto-formatted as xxx-xxx-xxxx
- Numbers only

## 📱 Testing

### Test the flows:

1. **Sign In Flow:**
   - Enter invalid email → See error
   - Enter valid credentials → Navigate to home

2. **Sign Up Flow:**
   - Fill all fields with invalid data → See errors
   - Fix validation → See green checkmarks
   - Continue → Navigate to password screen

3. **Password Creation:**
   - Type weak password → See red strength bar
   - Meet requirements → See green checkmarks
   - Passwords don't match → See error
   - Create account → Success

4. **Recovery Flow:**
   - Enter email → Receive recovery email
   - Enter 6-digit code → Verify
   - Enter "123456" (demo code) → Success

## 🎯 Next Steps

- [ ] Connect to real authentication API
- [ ] Add biometric authentication (Face ID / Touch ID)
- [ ] Implement OAuth for Google/Apple sign-in
- [ ] Add email verification flow
- [ ] Implement actual password reset API
- [ ] Add analytics tracking
- [ ] Add error logging
- [ ] Implement token management
- [ ] Add remember me functionality
- [ ] Create onboarding tutorial screens

## 🛠 Customization

### Change Primary Color

Edit `src/theme/colors.js`:
```javascript
export const colors = {
  primary: '#YOUR_COLOR',
  // ...
};
```

### Modify Validation Rules

Edit validation functions in each screen:
```javascript
const validateEmail = (text) => {
  // Your custom validation
};
```

### Update Logo

Replace the logo in `SplashScreen.js` with your image:
```jsx
<Image source={require('./assets/logo.png')} />
```

## 📚 Dependencies

- **React Native:** Mobile framework
- **Expo:** Development platform
- **React Navigation:** Screen navigation
- **React Native Safe Area Context:** Handle safe areas
- **React Native Screens:** Native navigation performance

## 🐛 Troubleshooting

**Metro bundler not starting:**
```bash
npx expo start -c
```

**Dependencies not installing:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

**iOS build issues:**
```bash
cd ios && pod install && cd ..
```

## 📄 License

This project is part of the LawnGuru design system.

## 🤝 Contributing

1. Follow the existing code style
2. Test on both iOS and Android
3. Update this README with any new features
4. Maintain accessibility standards

## 📞 Support

For questions or issues, contact the LawnGuru development team.

---

**Built with ❤️ for LawnGuru**
