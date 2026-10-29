import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { readFileSync } from "fs";

interface BadLogin {
  username: string;
  password: string;
  message: string;
}

const badLogins: BadLogin[] = JSON.parse(
  readFileSync("testdata/badlogins.json", "utf-8")
);

for (const data of badLogins) {
  test(`login fails for ${data.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);
    await expect(loginPage.errorMessage).toContainText(data.message);
  });
}