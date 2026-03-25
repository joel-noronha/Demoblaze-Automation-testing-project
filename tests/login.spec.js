import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.skip("Valid Login test case", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Test-user-joel", "test@123");
  await expect(page.locator("#nameofuser")).toBeVisible();
  await expect(page.locator("#nameofuser")).toContainText("Test-user-joel");
  await expect(page.locator("#logout2")).toBeVisible();
  await expect(page.locator("#login2")).not.toBeVisible();
  await expect(page).toHaveURL("https://demoblaze.com/");
});

test.skip("invalid password login test", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Wrong password");
    await dialog.accept();
  });

  await login.login("Test-user-joel", "wrongpassword");
});

test("invalid username login test", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("User does not exist.");
    await dialog.accept();
  });

  await login.login("Test-user-joe", "test@123");
});
