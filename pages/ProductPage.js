export class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator(".name");
    this.productPrice = page.locator(".price-container");
    this.addToCartButton = page.locator("text=Add to cart");
  }

  async getProductName() {
    return await this.productTitle.textContent();
  }

  async getProductPrice() {
    return await this.productPrice.textContent();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }
}
