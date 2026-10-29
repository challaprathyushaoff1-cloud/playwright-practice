
import { test, expect } from '@playwright/test';

test('Wait for a message to appear', async ({ page }) => {
  await page.setContent(`
    <h1>Login Demo</h1>
    <button id="login">Login</button>
    <p id="status"></p>

    <script>
      document.querySelector('#login').addEventListener('click', () => {
        setTimeout(() => {
          document.querySelector('#status').textContent = 'Login successful';
        }, 2000);
      });
    </script>
  `);

  await page.getByRole('button', { name: 'Login' }).click();

  // The message appears after about 2 seconds.
  await expect(page.locator('#status'))
    .toHaveText('Login successful');
});
