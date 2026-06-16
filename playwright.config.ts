import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright'],
  ],

  globalSetup: './auth.setup.ts',

  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on-first-retry',
  },

  projects: [
    // 🔐 Default authenticated tests
    {
      name: 'authenticated',
      testIgnore: ['**/guest/**/*.spec.ts'], // guest tests skip here
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
    },

    // 👤 Guest-only tests
    {
      name: 'guest',
      testMatch: ['**/guest/**/*.spec.ts'], // only guest folder tests
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
    },
  ],
});