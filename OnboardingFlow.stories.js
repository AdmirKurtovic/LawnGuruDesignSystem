/**
 * Onboarding Flow - Multi-step onboarding after user signs up
 *
 * ## User Journey
 * 1. Welcome message
 * 2. Service selection
 * 3. Location/address entry
 * 4. Schedule preferences
 * 5. Confirmation
 *
 * ## Figma Prototype
 * Link your interactive Figma prototype to see the complete flow
 */
export default {
  title: 'Screens/Onboarding/Flow',
  parameters: {
    layout: 'fullscreen',
    // 🎨 ADD YOUR FIGMA PROTOTYPE LINK HERE
    design: [
      {
        name: 'Full Onboarding Flow',
        type: 'figma',
        url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru-Onboarding?node-id=FLOW_NODE_ID',
      },
      {
        name: 'Interactive Prototype',
        type: 'figma',
        url: 'https://www.figma.com/proto/YOUR_FILE_ID/LawnGuru-Onboarding?node-id=PROTOTYPE_START',
        allowFullscreen: true,
      },
    ],
  },
  tags: ['autodocs'],
}

// ===========================
// Story: Step 1 - Welcome
// ===========================
export const Step1Welcome = {
  render: () => ({
    template: `
      <div class="onboarding-container">
        <div class="step-indicator">Step 1 of 4</div>
        <h1>Welcome to LawnGuru!</h1>
        <p>Let's get your lawn care started in just a few steps.</p>
        <button class="btn-primary">Get Started</button>
      </div>
    `,
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=STEP1_NODE_ID',
    },
    docs: {
      description: {
        story: 'Initial welcome message explaining what to expect in onboarding.',
      },
    },
  },
}

// ===========================
// Story: Step 2 - Service Selection
// ===========================
export const Step2ServiceSelection = {
  render: () => ({
    template: `
      <div class="onboarding-container">
        <div class="step-indicator">Step 2 of 4</div>
        <h1>Select Your Services</h1>
        <p>Choose the lawn care services you need</p>

        <div class="service-grid">
          <div class="service-card">
            <h3>🌿 Lawn Mowing</h3>
            <p>Weekly or bi-weekly mowing</p>
          </div>
          <div class="service-card">
            <h3>🌱 Fertilization</h3>
            <p>Seasonal fertilization plan</p>
          </div>
          <div class="service-card">
            <h3>🚫 Weed Control</h3>
            <p>Keep your lawn weed-free</p>
          </div>
          <div class="service-card">
            <h3>🍂 Cleanup</h3>
            <p>Seasonal yard cleanup</p>
          </div>
        </div>

        <div class="button-group">
          <button class="btn-secondary">Back</button>
          <button class="btn-primary">Next</button>
        </div>
      </div>
    `,
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=STEP2_NODE_ID',
    },
    docs: {
      description: {
        story: 'Service selection with multiple options in a card grid.',
      },
    },
  },
}

// ===========================
// Story: Step 3 - Location
// ===========================
export const Step3Location = {
  render: () => ({
    template: `
      <div class="onboarding-container">
        <div class="step-indicator">Step 3 of 4</div>
        <h1>Where Do You Need Service?</h1>
        <p>Enter your property address</p>

        <div class="form-group">
          <label>Street Address</label>
          <input type="text" placeholder="123 Main Street" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" placeholder="Seattle" />
          </div>
          <div class="form-group">
            <label>State</label>
            <input type="text" placeholder="WA" />
          </div>
          <div class="form-group">
            <label>ZIP Code</label>
            <input type="text" placeholder="98101" />
          </div>
        </div>

        <div class="map-preview">
          <div class="map-placeholder">📍 Map Preview</div>
        </div>

        <div class="button-group">
          <button class="btn-secondary">Back</button>
          <button class="btn-primary">Next</button>
        </div>
      </div>
    `,
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=STEP3_NODE_ID',
    },
    docs: {
      description: {
        story: 'Address entry form with map preview.',
      },
    },
  },
}

// ===========================
// Story: Step 4 - Schedule
// ===========================
export const Step4Schedule = {
  render: () => ({
    template: `
      <div class="onboarding-container">
        <div class="step-indicator">Step 4 of 4</div>
        <h1>Set Your Schedule</h1>
        <p>Choose your preferred service frequency</p>

        <div class="schedule-options">
          <div class="schedule-card selected">
            <h3>Weekly</h3>
            <p>$45/week</p>
            <span class="badge">Most Popular</span>
          </div>
          <div class="schedule-card">
            <h3>Bi-Weekly</h3>
            <p>$35/service</p>
          </div>
          <div class="schedule-card">
            <h3>Monthly</h3>
            <p>$50/month</p>
          </div>
        </div>

        <div class="form-group">
          <label>Preferred Day</label>
          <select>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>

        <div class="button-group">
          <button class="btn-secondary">Back</button>
          <button class="btn-primary">Complete Setup</button>
        </div>
      </div>
    `,
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=STEP4_NODE_ID',
    },
    docs: {
      description: {
        story: 'Schedule selection with pricing options.',
      },
    },
  },
}

// ===========================
// Story: Step 5 - Confirmation
// ===========================
export const Step5Confirmation = {
  render: () => ({
    template: `
      <div class="onboarding-container">
        <div class="success-icon">✅</div>
        <h1>You're All Set!</h1>
        <p>Your lawn care is ready to go</p>

        <div class="summary-card">
          <h3>Your Plan</h3>
          <div class="summary-row">
            <span>Service:</span>
            <strong>Lawn Mowing</strong>
          </div>
          <div class="summary-row">
            <span>Frequency:</span>
            <strong>Weekly</strong>
          </div>
          <div class="summary-row">
            <span>Next Service:</span>
            <strong>Monday, Nov 4</strong>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <strong>$45/week</strong>
          </div>
        </div>

        <button class="btn-primary">Go to Dashboard</button>
        <button class="btn-link">View Schedule</button>
      </div>
    `,
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=CONFIRMATION_NODE_ID',
    },
    docs: {
      description: {
        story: 'Final confirmation screen showing summary of selections.',
      },
    },
  },
}

// ===========================
// Story: Complete Flow (All Steps)
// ===========================
export const CompleteFlow = {
  render: () => ({
    data() {
      return {
        currentStep: 1,
        maxSteps: 4,
      }
    },
    template: `
      <div class="onboarding-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: (currentStep / maxSteps * 100) + '%' }"></div>
        </div>

        <div v-if="currentStep === 1">
          <h1>Welcome to LawnGuru!</h1>
          <button @click="currentStep = 2" class="btn-primary">Get Started</button>
        </div>

        <div v-if="currentStep === 2">
          <h1>Select Your Services</h1>
          <button @click="currentStep = 3" class="btn-primary">Next</button>
        </div>

        <div v-if="currentStep === 3">
          <h1>Where Do You Need Service?</h1>
          <button @click="currentStep = 4" class="btn-primary">Next</button>
        </div>

        <div v-if="currentStep === 4">
          <h1>Set Your Schedule</h1>
          <button @click="alert('Complete!')" class="btn-primary">Complete Setup</button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive flow showing all steps. Click Next to progress through onboarding.',
      },
    },
  },
}

// ===========================
// Story: Mobile Flow
// ===========================
export const MobileFlow = {
  ...CompleteFlow,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/YOUR_FILE_ID/LawnGuru-Mobile?node-id=MOBILE_FLOW',
      allowFullscreen: true,
    },
    docs: {
      description: {
        story: 'Complete onboarding flow optimized for mobile devices.',
      },
    },
  },
}

// ===========================
// Story: With Errors
// ===========================
export const WithValidationErrors = {
  render: () => ({
    template: `
      <div class="onboarding-container">
        <div class="step-indicator">Step 3 of 4</div>
        <h1>Where Do You Need Service?</h1>

        <div class="form-group error">
          <label>Street Address</label>
          <input type="text" class="error" value="" />
          <span class="error-message">Please enter your street address</span>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" value="Seattle" />
          </div>
          <div class="form-group error">
            <label>ZIP Code</label>
            <input type="text" class="error" value="123" />
            <span class="error-message">Invalid ZIP code</span>
          </div>
        </div>

        <button class="btn-primary" disabled>Next</button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Shows validation errors when required fields are empty or invalid.',
      },
    },
  },
}
