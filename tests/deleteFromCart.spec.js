import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

test("delete product from cart", async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.navigateToHome();
  await home.selectProduct("MacBook air");

  page.on("dialog", (dialog) => dialog.accept());
  await product.addProductToCart();

  await home.goToCart();

  await cart.deleteFirstProduct();

  await expect(page.locator("#tbodyid tr")).toHaveCount(0);
});
