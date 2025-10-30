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

export default function PasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  // Password requirements state
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  const validatePassword = (text) => {
    const newRequirements = {
      length: text.length >= 8,
      uppercase: /[A-Z]/.test(text),
      number: /[0-9]/.test(text),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(text),
    };

    setRequirements(newRequirements);

    if (!text) {
      setPasswordError('Password is required');
      return false;
    } else if (!Object.values(newRequirements).every(Boolean)) {
      setPasswordError('Please meet all password requirements');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validateConfirmPassword = (text) => {
    if (!text) {
      setConfirmPasswordError('Please confirm your password');
      return false;
    } else if (text !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else {
      setConfirmPasswordError('');
      return true;
    }
  };

  const getPasswordStrength = () => {
    const metRequirements = Object.values(requirements).filter(Boolean).length;
    if (metRequirements === 0) return { text: '', color: colors.gray300, width: '0%' };
    if (metRequirements <= 2) return { text: 'Weak', color: colors.error, width: '33%' };
    if (metRequirements === 3) return { text: 'Medium', color: colors.warning, width: '66%' };
    return { text: 'Strong', color: colors.success, width: '100%' };
  };

  const handleContinue = async () => {
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (!isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Account created successfully!');
      // Navigate to main app or dashboard
    }, 2000);
  };

  const strength = getPasswordStrength();

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
            <Text style={styles.title}>Create Password</Text>
            <Text style={styles.subtitle}>
              Your password must be at least 8 characters long and include uppercase, number, and special character.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Input
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                validatePassword(text);
                if (confirmPassword) validateConfirmPassword(confirmPassword);
              }}
              onBlur={() => validatePassword(password)}
              error={passwordError}
              showPasswordToggle
              leftIcon={<Text style={styles.inputIcon}>🔒</Text>}
            />

            {/* Password Strength Indicator */}
            {password.length > 0 && (
              <View style={styles.strengthContainer}>
                <View style={styles.strengthBar}>
                  <View
                    style={[
                      styles.strengthFill,
                      { width: strength.width, backgroundColor: strength.color },
                    ]}
                  />
                </View>
                {strength.text && (
                  <Text style={[styles.strengthText, { color: strength.color }]}>
                    {strength.text}
                  </Text>
                )}
              </View>
            )}

            {/* Password Requirements */}
            {password.length > 0 && (
              <View style={styles.requirementsContainer}>
                <Text style={styles.requirementsTitle}>Password must contain:</Text>
                <View style={styles.requirement}>
                  <Text style={[styles.requirementIcon, requirements.length && styles.requirementMet]}>
                    {requirements.length ? '✓' : '○'}
                  </Text>
                  <Text style={[styles.requirementText, requirements.length && styles.requirementMet]}>
                    At least 8 characters
                  </Text>
                </View>
                <View style={styles.requirement}>
                  <Text style={[styles.requirementIcon, requirements.uppercase && styles.requirementMet]}>
                    {requirements.uppercase ? '✓' : '○'}
                  </Text>
                  <Text style={[styles.requirementText, requirements.uppercase && styles.requirementMet]}>
                    One uppercase letter
                  </Text>
                </View>
                <View style={styles.requirement}>
                  <Text style={[styles.requirementIcon, requirements.number && styles.requirementMet]}>
                    {requirements.number ? '✓' : '○'}
                  </Text>
                  <Text style={[styles.requirementText, requirements.number && styles.requirementMet]}>
                    One number
                  </Text>
                </View>
                <View style={styles.requirement}>
                  <Text style={[styles.requirementIcon, requirements.special && styles.requirementMet]}>
                    {requirements.special ? '✓' : '○'}
                  </Text>
                  <Text style={[styles.requirementText, requirements.special && styles.requirementMet]}>
                    One special character
                  </Text>
                </View>
              </View>
            )}

            <Input
              label="Confirm Password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (confirmPasswordError) validateConfirmPassword(text);
              }}
              onBlur={() => validateConfirmPassword(confirmPassword)}
              error={confirmPasswordError}
              success={confirmPassword && !confirmPasswordError && confirmPassword === password}
              showPasswordToggle
              leftIcon={<Text style={styles.inputIcon}>🔒</Text>}
            />

            {/* Continue Button */}
            <Button
              title="Create Account"
              onPress={handleContinue}
              loading={loading}
              style={styles.continueButton}
            />
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray600,
    lineHeight: 20,
  },
  form: {
    flex: 1,
  },
  inputIcon: {
    fontSize: 18,
  },
  strengthContainer: {
    marginTop: -8,
    marginBottom: 16,
  },
  strengthBar: {
    height: 4,
    backgroundColor: colors.gray200,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 8,
  },
  strengthFill: {
    height: '100%',
    borderRadius: 2,
    transition: 'all 0.3s',
  },
  strengthText: {
    fontSize: 12,
    fontWeight: '600',
  },
  requirementsContainer: {
    marginTop: -8,
    marginBottom: 16,
    padding: 12,
    backgroundColor: colors.gray50,
    borderRadius: 8,
  },
  requirementsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray700,
    marginBottom: 8,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  requirementIcon: {
    fontSize: 14,
    color: colors.gray400,
    marginRight: 8,
    width: 16,
  },
  requirementText: {
    fontSize: 13,
    color: colors.gray600,
  },
  requirementMet: {
    color: colors.success,
  },
  continueButton: {
    marginTop: 8,
  },
});
