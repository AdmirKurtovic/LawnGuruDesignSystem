import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { colors } from '../theme/colors';

export default function CreateAccountScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);

  const validateFirstName = (text) => {
    if (!text) {
      setFirstNameError('First name is required');
      return false;
    } else if (text.length < 2) {
      setFirstNameError('First name must be at least 2 characters');
      return false;
    } else {
      setFirstNameError('');
      return true;
    }
  };

  const validateLastName = (text) => {
    if (!text) {
      setLastNameError('Last name is required');
      return false;
    } else if (text.length < 2) {
      setLastNameError('Last name must be at least 2 characters');
      return false;
    } else {
      setLastNameError('');
      return true;
    }
  };

  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(text)) {
      setEmailError('Please enter a valid email');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (text) => {
    if (!text) {
      setPasswordError('Password is required');
      return false;
    } else if (text.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const formatPhone = (text) => {
    const cleaned = text.replace(/\D/g, '');
    const limited = cleaned.slice(0, 10);

    if (limited.length >= 6) {
      return `${limited.slice(0, 3)}-${limited.slice(3, 6)}-${limited.slice(6)}`;
    } else if (limited.length >= 3) {
      return `${limited.slice(0, 3)}-${limited.slice(3)}`;
    } else {
      return limited;
    }
  };

  const handlePhoneChange = (text) => {
    const formatted = formatPhone(text);
    setPhone(formatted);
  };

  const handleContinue = async () => {
    const isFirstNameValid = validateFirstName(firstName);
    const isLastNameValid = validateLastName(lastName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Password');
    }, 2000);
  };

  const handleSocialSignUp = (provider) => {
    alert(`Signing up with ${provider}...`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Input
              label="First name"
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={(text) => {
                const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
                setFirstName(capitalized);
                if (firstNameError) validateFirstName(capitalized);
              }}
              onBlur={() => validateFirstName(firstName)}
              error={firstNameError}
              success={firstName && !firstNameError}
              autoCapitalize="words"
            />

            <Input
              label="Last name"
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={(text) => {
                const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
                setLastName(capitalized);
                if (lastNameError) validateLastName(capitalized);
              }}
              onBlur={() => validateLastName(lastName)}
              error={lastNameError}
              success={lastName && !lastNameError}
              autoCapitalize="words"
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) validateEmail(text);
              }}
              onBlur={() => validateEmail(email)}
              error={emailError}
              success={email && !emailError}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            <Input
              label="Phone number"
              placeholder="Enter mobile number"
              value={phone}
              onChangeText={handlePhoneChange}
              keyboardType="phone-pad"
              autoComplete="tel"
            />

            <Input
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) validatePassword(text);
              }}
              onBlur={() => validatePassword(password)}
              error={passwordError}
              showPasswordToggle
            />

            {/* Continue Button */}
            <Button
              title="Continue →"
              onPress={handleContinue}
              loading={loading}
              style={styles.continueButton}
            />

            {/* Sign In Link */}
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.signInLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 20,
    color: colors.gray900,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.gray900,
  },
  form: {
    flex: 1,
  },
  continueButton: {
    marginTop: 8,
    marginBottom: 24,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: colors.gray600,
  },
  signInLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});
