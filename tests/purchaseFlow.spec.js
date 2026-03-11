const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { ProductPage } = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");

test("complete purchase flow", async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.navigateToHome();
  await home.selectProduct("MacBook air");

  page.once("dialog", (dialog) => dialog.accept());
  await product.addProductToCart();

  await home.goToCart();

  await cart.placeOrder();

  await checkout.fillCheckoutForm({
    name: "John",
    country: "India",
    city: "Bangalore",
    card: "123456789",
    month: "06",
    year: "2026",
  });

  await checkout.purchaseOrder();

  const message = await checkout.getConfirmationText();
  expect(message).toContain("Thank you for your purchase");
});
