import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("filter products by category", async ({ page }) => {
  const home = new HomePage(page);
  await home.navigateToHome();
  const filterText = "Monitors";
  await page.getByRole("link", { name: `${filterText}` }).click();
  const products = await page.locator("#tbodyid h4 a");
  await products.first().waitFor();
  const names = await products.allTextContents();
  console.log(names);
  expect(names).toContain("Apple monitor 24");
});
