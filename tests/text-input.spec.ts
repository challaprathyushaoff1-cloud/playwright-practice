
import { test, expect } from '@playwright/test';

test('Check text and input value', async ({ page }) => {
  await page.setContent(`
    <h1>Login Page</h1>
    <label for="email">Email</label>
    <input id="email" type="email" />
    <button>Login</button>
    <p id="message">Please enter your details</p>
  `);

  // Check the heading text
  await expect(
    page.getByRole('heading', { name: 'Login Page' })
  ).toHaveText('Login Page');

  // Check the button is visible and enabled
  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeEnabled();

  // Fill the email field and verify its value
  await page.getByLabel('Email').fill('test@example.com');

  await expect(page.getByLabel('Email'))
    .toHaveValue('test@example.com');

  // Check a paragraph contains the expected message
  await expect(page.locator('#message'))
    .toContainText('enter your details');
});
