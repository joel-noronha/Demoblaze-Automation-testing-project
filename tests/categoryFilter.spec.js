import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("filter products by category", async ({ page }) => {
  const home = new HomePage(page);
  await home.navigateToHome();

  await page.getByRole("link", { name: "Monitors", exact: true }).click();

  await expect(page.locator("#tbodyid")).toContainText("Apple monitor 24");

  const names = await page.locator("#tbodyid h4 a").allTextContents();

  expect(names).toContain("Apple monitor 24");
});
