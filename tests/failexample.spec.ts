
import { test, expect } from '@playwright/test';

test('Example of a failed assertion', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // This is intentionally incorrect.
  await expect(page).toHaveTitle('playwright'); // This will fail because the actual title is 'Playwright'
});
