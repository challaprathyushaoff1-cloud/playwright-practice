
import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async goto(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }

  async addFirstItemToCart(): Promise<void> {
    const firstItemAddToCartButton = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    await firstItemAddToCartButton.click();
  }
}