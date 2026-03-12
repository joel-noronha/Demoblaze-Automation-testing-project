export class HomePage {
  constructor(page) {
    this.page = page;
    this.productLinks = page.locator(".card-title a");
    this.cartLink = page.locator("#cartur");
    this.logoutLink = page.locator("#logout2");
    this.userNameLabel = page.locator("#nameofuser");
  }

  async navigateToHome() {
    await this.page.goto("/");
  }

  async selectProduct(productName) {
    for (let i = 0; i < 5; i++) {
      const product = this.page.locator(".card-title a", {
        hasText: productName,
      });

      if ((await product.count()) > 0) {
        await product.first().click();
        return;
      }

      await this.page.locator("#next2").click();
      await this.page.waitForTimeout(1000);
    }

    throw new Error(`Product ${productName} not found`);
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}
