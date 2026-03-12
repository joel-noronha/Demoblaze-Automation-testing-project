export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator("#login2");
    this.usernameInput = page.locator("#loginusername");
    this.passwordInput = page.locator("#loginpassword");
    this.loginButton = page.getByRole("button", { name: "Log In" });
  }

  async gotoLoginPage() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.loginLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
