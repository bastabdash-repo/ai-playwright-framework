import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  use: {
    headless: false,

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    video: 'retain-on-failure'
  },

  reporter: [
    ['list'],
    ['html']
  ]
});