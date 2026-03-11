const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { ProductPage } = require("../pages/ProductPage");

test("add product to cart", async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);

  await home.navigateToHome();
  await home.selectProduct("MacBook air");

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });

  await product.addProductToCart();
});
