export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProducts = page.locator("#tbodyid tr");
    this.deleteLinks = page.locator("a:has-text('Delete')");
    this.placeOrderButton = page.locator("button:has-text('Place Order')");
  }

  async getProductNames() {
    const products = this.page.locator("#tbodyid tr td:nth-child(2)");
    return await products.allTextContents();
  }

  async deleteFirstProduct() {
    await this.deleteLinks.first().click();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
