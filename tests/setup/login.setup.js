import { test as setup, expect } from "../../fixtures/base";

setup("Valid Login test case", async ({ loginPage, page }) => {
  await loginPage.gotoLoginPage();
  await loginPage.login("Test-user-joel", "test@123");
  await expect(page.locator("#nameofuser")).toBeVisible();
  await expect(page.locator("#nameofuser")).toContainText("Test-user-joel");
  await expect(page.locator("#logout2")).toBeVisible();
  await expect(page.locator("#login2")).not.toBeVisible();
  await expect(page).toHaveURL("https://demoblaze.com/");
  await page.context().storageState({ path: ".auth/user.json" });
});
