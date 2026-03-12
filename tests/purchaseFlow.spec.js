const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { ProductPage } = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { readExcel } = require("../utils/excelReader");

const testData = readExcel("./test-data/orderData.xlsx", "Sheet1");

testData.forEach((data) => {
  test(`complete purchase flow for ${data.name} `, async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await home.navigateToHome();
    await home.selectProduct(`${data.product}`);

    page.once("dialog", (dialog) => dialog.accept());
    await product.addProductToCart();

    await home.goToCart();

    await cart.placeOrder();

    await checkout.fillCheckoutForm(data);

    await checkout.purchaseOrder();

    const message = await checkout.getConfirmationText();
    expect(message).toContain("Thank you for your purchase");
  });
});
