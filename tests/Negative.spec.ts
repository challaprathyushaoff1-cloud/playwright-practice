import {test, expect} from '@playwright/test';

test ("valid user can login in", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("Locked_out_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('[data-test="error"]')).toContainText("locked out");
} );