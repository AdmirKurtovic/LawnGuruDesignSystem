import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../theme/colors';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Navigate to SignIn after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>LawnGuru</Text>
          </View>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Hire The Best Lawn & Landscape Pros
        </Text>
        <Text style={styles.subtitle}>
          Working in Your Neighborhood
        </Text>
      </View>

      {/* Bottom Text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Your lawn care journey starts here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
  },
  tagline: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.gray900,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray600,
    textAlign: 'center',
  },
  footer: {
    paddingBottom: 48,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: colors.gray500,
    textAlign: 'center',
  },
});
