
import { test, expect } from '@playwright/test';

test('Day 13 - dropdowns, checkboxes and radio buttons', async ({ page }) => {
  await page.setContent(`
    <h1>Registration Form</h1>

    <label for="country">Country</label>
    <select id="country">
      <option value="">Choose a country</option>
      <option value="india">India</option>
      <option value="usa">USA</option>
      <option value="uk">United Kingdom</option>
    </select>

    <br /><br />

    <label>
      <input type="checkbox" id="terms" />
      Accept terms and conditions
    </label>

    <br /><br />

    <p>Choose your preferred shift:</p>

    <label>
      <input type="radio" name="shift" value="morning" />
      Morning
    </label>

    <label>
      <input type="radio" name="shift" value="evening" />
      Evening
    </label>
  `);

  // 1. Select an option from the dropdown
  await page.getByLabel('Country').selectOption('usa');

  // Verify the selected option
  await expect(page.getByLabel('Country')).toHaveValue('usa');

  // 2. Check the checkbox
  await page.getByLabel('Accept terms and conditions').uncheck();

  // Verify the checkbox is selected
  await expect(
    page.getByLabel('Accept terms and conditions')
  ).not.toBeChecked();

  // 3. Select a radio button
  await page.getByLabel('Morning').check();

  // Verify the radio button is selected
  await expect(page.getByLabel('Morning')).toBeChecked();

  // Verify the other radio button is not selected
  await expect(page.getByLabel('Evening')).not.toBeChecked();
});
