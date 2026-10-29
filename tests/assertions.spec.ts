
import { test, expect } from '@playwright/test';

test('Day 12 - basic assertions', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check the page title
  await expect(page).toHaveTitle(/Playwright/);

  // Check that the main heading is visible
  await expect(
    page.getByRole('heading', { level: 1 }).first()
  ).toBeVisible();

  // Check that the page URL is correct
  await expect(page).toHaveURL(/playwright\.dev/);
});
