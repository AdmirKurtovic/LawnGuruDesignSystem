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

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

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

  const handleSendLink = async () => {
    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
    }, 2000);
  };

  const handleResend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Reset link sent!');
    }, 2000);
  };

  if (emailSent) {
    return (
      <SafeAreaView style={styles.container}>
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

          {/* Success Icon */}
          <View style={styles.successIcon}>
            <Text style={styles.successIconText}>✉️</Text>
          </View>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Check your email</Text>
            <Text style={styles.subtitle}>
              We've sent a password reset link to{'\n'}
              <Text style={styles.email}>{email}</Text>
            </Text>
          </View>

          {/* Instructions */}
          <View style={styles.instructions}>
            <Text style={styles.instructionText}>
              Click the link in the email to reset your password. If you don't see it, check your spam folder.
            </Text>
          </View>

          {/* Resend Button */}
          <Button
            title="Resend Email"
            onPress={handleResend}
            loading={loading}
            variant="outline"
            style={styles.resendButton}
          />

          {/* Back to Sign In */}
          <TouchableOpacity
            style={styles.backToSignIn}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.backToSignInText}>← Back to Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

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
            <Text style={styles.title}>Forgot password?</Text>
            <Text style={styles.subtitle}>
              No worries, we'll send you reset instructions.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
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
              leftIcon={<Text style={styles.inputIcon}>✉️</Text>}
            />

            {/* Send Button */}
            <Button
              title="Send Reset Link"
              onPress={handleSendLink}
              loading={loading}
              style={styles.sendButton}
            />

            {/* Back to Sign In */}
            <TouchableOpacity
              style={styles.backToSignIn}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={styles.backToSignInText}>← Back to Sign In</Text>
            </TouchableOpacity>
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
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },
  successIconText: {
    fontSize: 40,
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
    fontSize: 15,
    color: colors.gray600,
    lineHeight: 22,
  },
  email: {
    fontWeight: '600',
    color: colors.gray900,
  },
  form: {
    flex: 1,
  },
  inputIcon: {
    fontSize: 18,
  },
  sendButton: {
    marginTop: 8,
    marginBottom: 24,
  },
  instructions: {
    backgroundColor: colors.gray50,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  instructionText: {
    fontSize: 14,
    color: colors.gray600,
    lineHeight: 20,
  },
  resendButton: {
    marginBottom: 24,
  },
  backToSignIn: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  backToSignInText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});
