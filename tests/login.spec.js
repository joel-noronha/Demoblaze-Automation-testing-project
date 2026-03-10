import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login test case", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Test-user-joel", "test@123");
  await expect(page.locator("#nameofuser")).toBeVisible();
  await expect(page.locator("#nameofuser")).toContainText("Test-user-joel");
  await expect(page.locator("#logout2")).toBeVisible();
  await expect(page.locator("#login2")).not.toBeVisible();
  await expect(page).toHaveURL("https://demoblaze.com/");
});
