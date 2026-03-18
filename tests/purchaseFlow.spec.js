const { test, expect } = require("../fixtures/base");
// const { expect } = require("@playwright/test");
const { readExcel } = require("../utils/excelReader");

const testData = readExcel("./test-data/orderData.xlsx", "Sheet1");

testData.forEach((data) => {
  test(`complete purchase flow for ${data.name} `, async ({
    page,
    homePage,
    cartPage,
    checkoutPage,
    productPage,
  }) => {
    await homePage.navigateToHome();
    await homePage.selectProduct(`${data.product}`);

    page.once("dialog", (dialog) => dialog.accept());
    await productPage.addProductToCart();

    await homePage.goToCart();

    await cartPage.placeOrder();

    await checkoutPage.fillCheckoutForm(data);

    await checkoutPage.purchaseOrder();

    const message = await checkoutPage.getConfirmationText();
    expect(message).toContain("Thank you for your purchase");
  });
});
