<template>
  <div class="welcome-screen">
    <!-- Hero Section with Background -->
    <div class="hero-section">
      <!-- Background Image with Overlay -->
      <div class="hero-background">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80"
          alt="Beautiful suburban neighborhood"
          class="hero-image"
        />
        <div class="hero-overlay" />
      </div>

      <!-- Content Container -->
      <div class="content-wrapper">
        <div class="content-container">
          <!-- Logo with Animation -->
          <div class="logo-container">
            <div class="logo">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="currentColor" class="text-primary" opacity="0.9"/>
                <path d="M30 50 Q35 40, 40 50 T50 50 T60 50 T70 50" stroke="white" stroke-width="3" fill="none"/>
                <path d="M30 55 Q35 45, 40 55 T50 55 T60 55 T70 55" stroke="white" stroke-width="3" fill="none"/>
                <path d="M30 60 Q35 50, 40 60 T50 60 T60 60 T70 60" stroke="white" stroke-width="3" fill="none"/>
                <path d="M30 65 Q35 55, 40 65 T50 65 T60 65 T70 65" stroke="white" stroke-width="3" fill="none"/>
              </svg>
            </div>
          </div>

          <!-- Headline -->
          <div class="text-center space-y-3 mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Get Your Lawn Done Right
            </h1>
            <p class="text-lg text-white/90">
              Book vetted local pros in
              <span class="text-primary font-semibold">{{ userLocation }}</span>
              <span class="text-white/70"> • </span>
              Instant confirmation
            </p>
          </div>

          <!-- Social Proof Card -->
          <LgCard class="glass-card mb-8">
            <div class="flex items-center justify-center divide-x divide-white/20">
              <div class="stat-item">
                <div class="stat-number">50K+</div>
                <div class="stat-label">Happy Customers</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">4.8★</div>
                <div class="stat-label">Average Rating</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Pro Providers</div>
              </div>
            </div>
          </LgCard>

          <!-- Error Alert -->
          <LgAlert
            v-if="authError"
            variant="destructive"
            class="mb-4"
          >
            <AlertCircle class="h-4 w-4" />
            <div>
              <div class="font-medium">Authentication Error</div>
              <div class="text-sm">{{ authError }}</div>
            </div>
          </LgAlert>

          <!-- Auth Buttons -->
          <div class="space-y-3 mb-6">
            <LgButton
              variant="default"
              size="lg"
              class="w-full"
              :disabled="isLoading"
              @click="handleAuth('google')"
            >
              <svg v-if="!isGoogleLoading" class="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <Loader2 v-else class="mr-2 h-5 w-5 animate-spin" />
              {{ isGoogleLoading ? 'Signing in...' : 'Continue with Google' }}
            </LgButton>

            <LgButton
              variant="default"
              size="lg"
              class="w-full"
              :disabled="isLoading"
              @click="handleAuth('apple')"
            >
              <svg v-if="!isAppleLoading" class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <Loader2 v-else class="mr-2 h-5 w-5 animate-spin" />
              {{ isAppleLoading ? 'Signing in...' : 'Continue with Apple' }}
            </LgButton>

            <LgButton
              variant="secondary"
              size="lg"
              class="w-full"
              :disabled="isLoading"
              @click="handleEmailAuth"
            >
              <Mail class="mr-2 h-5 w-5" />
              Continue with Email
            </LgButton>
          </div>

          <!-- Separator -->
          <div class="relative my-6">
            <LgSeparator />
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="bg-background/80 backdrop-blur-sm px-4 text-sm text-white/70">
                or
              </span>
            </div>
          </div>

          <!-- Login Link -->
          <LgButton
            variant="ghost"
            size="lg"
            class="w-full mb-3 text-white hover:bg-white/10"
            @click="handleLogin"
          >
            Already have an account? <span class="font-semibold ml-1">Login</span>
          </LgButton>

          <!-- Guest Browse -->
          <LgButton
            variant="link"
            size="sm"
            class="w-full text-primary hover:text-primary/80"
            @click="handleGuest"
          >
            Browse without signing up
          </LgButton>

          <!-- Trust Badges -->
          <div class="flex items-center justify-center gap-6 my-8">
            <div class="badge-item">
              <LgBadge variant="outline" class="badge-icon">
                <ShieldCheck class="h-4 w-4 text-primary" />
              </LgBadge>
              <span class="badge-label">Insured</span>
            </div>
            <div class="badge-item">
              <LgBadge variant="outline" class="badge-icon">
                <BadgeCheck class="h-4 w-4 text-primary" />
              </LgBadge>
              <span class="badge-label">Verified</span>
            </div>
            <div class="badge-item">
              <LgBadge variant="outline" class="badge-icon">
                <CheckCircle2 class="h-4 w-4 text-primary" />
              </LgBadge>
              <span class="badge-label">Guaranteed</span>
            </div>
          </div>

          <!-- Provider CTA -->
          <LgCard class="provider-card">
            <div class="text-center space-y-3">
              <p class="text-sm text-white/90">
                Are you a lawn care professional?
              </p>
              <LgButton
                variant="outline"
                size="default"
                class="border-white/30 text-white hover:bg-white/10"
                @click="handleProviderSignup"
              >
                <Briefcase class="mr-2 h-4 w-4" />
                Become a Provider
              </LgButton>
            </div>
          </LgCard>

          <!-- Legal Footer -->
          <div class="text-center space-y-3 mt-6">
            <div class="flex items-center justify-center gap-2 text-xs text-white/80">
              <Lock class="h-3.5 w-3.5" />
              <span>Your data is encrypted and secure</span>
            </div>
            <p class="text-xs text-white/70">
              By continuing, you agree to our
              <a href="#terms" class="text-primary hover:underline">Terms of Service</a>
              and
              <a href="#privacy" class="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Mail,
  Loader2,
  AlertCircle,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Briefcase,
  Lock
} from 'lucide-vue-next'

// State
const authError = ref(null)
const isGoogleLoading = ref(false)
const isAppleLoading = ref(false)
const userLocation = ref('Your Neighborhood')

// Computed
const isLoading = computed(() => isGoogleLoading.value || isAppleLoading.value)

// Methods
const handleAuth = async (provider) => {
  authError.value = null

  if (provider === 'google') {
    isGoogleLoading.value = true
  } else if (provider === 'apple') {
    isAppleLoading.value = true
  }

  try {
    // Simulate authentication
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure
        if (Math.random() > 0.3) {
          resolve()
        } else {
          reject(new Error('Authentication failed. Please try again.'))
        }
      }, 2000)
    })

    // Success - navigate to dashboard
    console.log(`✅ Successfully authenticated with ${provider}`)
    // router.push('/dashboard')
  } catch (error) {
    authError.value = error.message
  } finally {
    isGoogleLoading.value = false
    isAppleLoading.value = false
  }
}

const handleEmailAuth = () => {
  console.log('📧 Opening email signup...')
  // router.push('/signup/email')
}

const handleLogin = () => {
  console.log('🔑 Opening login...')
  // router.push('/login')
}

const handleGuest = () => {
  console.log('👀 Browsing as guest...')
  // router.push('/browse')
}

const handleProviderSignup = () => {
  console.log('💼 Opening provider signup...')
  // router.push('/provider/signup')
}

// Get user location
const getUserLocation = async () => {
  try {
    // Simulate location fetch
    // In production, use geolocation API or IP-based service
    const locations = ['Seattle', 'Portland', 'San Francisco', 'Los Angeles', 'Austin']
    userLocation.value = locations[Math.floor(Math.random() * locations.length)]
  } catch (error) {
    console.error('Failed to get location:', error)
  }
}

// Lifecycle
onMounted(() => {
  getUserLocation()
})
</script>

<style scoped>
.welcome-screen {
  @apply min-h-screen relative overflow-hidden;
}

.hero-section {
  @apply relative min-h-screen flex items-center justify-center;
}

.hero-background {
  @apply absolute inset-0;
}

.hero-image {
  @apply w-full h-full object-cover;
  animation: subtle-zoom 20s ease-in-out infinite alternate;
}

@keyframes subtle-zoom {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.hero-overlay {
  @apply absolute inset-0 bg-gradient-to-b from-black/50 to-black/75;
}

.content-wrapper {
  @apply relative z-10 w-full px-4 py-12;
}

.content-container {
  @apply max-w-md mx-auto;
  animation: fade-in-up 0.8s ease-out;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-container {
  @apply flex justify-center mb-10;
}

.logo {
  @apply w-20 h-20;
  filter: drop-shadow(0 4px 16px rgba(0, 137, 52, 0.5));
  animation: logo-float 3s ease-in-out infinite;
}

@keyframes logo-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Glass Card Effect */
.glass-card {
  @apply bg-white/10 backdrop-blur-md border-white/20;
}

.stat-item {
  @apply flex flex-col items-center px-6 py-3;
}

.stat-number {
  @apply text-2xl font-bold text-primary mb-1;
}

.stat-label {
  @apply text-xs text-white/90;
}

/* Badge Items */
.badge-item {
  @apply flex flex-col items-center gap-2;
}

.badge-icon {
  @apply rounded-full p-2 bg-primary/20 border-primary/30;
}

.badge-label {
  @apply text-xs text-white/90;
}

/* Provider Card */
.provider-card {
  @apply bg-transparent border-white/20 backdrop-blur-sm;
}

/* Responsive */
@media (max-width: 768px) {
  .stat-item {
    @apply px-4 py-2;
  }

  .stat-number {
    @apply text-xl;
  }
}
</style>
