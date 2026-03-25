const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { ProductPage } = require("../pages/ProductPage");

test.skip("add product to cart", async ({ page }) => {
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

test("modify product id before adding to cart", async ({ page }) => {
  await page.route("**/addtocart", async (route) => {
    const request = route.request();
    const data = JSON.parse(request.postData());

    console.log("Original:", data);

    // Modify product
    data.prod_id = 3;

    console.log("Modified:", data);

    await route.continue({
      postData: JSON.stringify(data),
    });
  });

  await page.goto("/");

  await page.getByRole("link", { name: "Samsung galaxy s6" }).click();

  page.once("dialog", (dialog) => dialog.accept());

  await page.getByRole("link", { name: "Add to cart" }).click();

  await page.getByRole("link", { name: "Cart", exact: true }).click();
  await page.locator(".success").first().waitFor();

  const products = await page
    .locator(".success td:nth-child(2)")
    .allTextContents();

  console.log("Cart Products:", products);
});
