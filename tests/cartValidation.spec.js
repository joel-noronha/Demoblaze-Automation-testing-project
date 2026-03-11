const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { ProductPage } = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");

test("verify product appears in cart", async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.navigateToHome();
  await home.selectProduct("MacBook air");

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });

  await product.addProductToCart();

  await home.goToCart();

  const products = await cart.getProductNames();

  expect(products).toContain("MacBook air");
});
