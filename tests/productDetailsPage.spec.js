import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("verify product details page", async ({ page }) => {
  const home = new HomePage(page);

  await home.navigateToHome();
  await home.selectProduct("MacBook air");

  await expect(page.locator(".name")).toContainText("MacBook air");
  await expect(page.locator(".price-container")).toBeVisible();
});
