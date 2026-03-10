export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.locator("#name");
    this.countryInput = page.locator("#country");
    this.cityInput = page.locator("#city");
    this.cardInput = page.locator("#card");
    this.monthInput = page.locator("#month");
    this.yearInput = page.locator("#year");

    this.purchaseButton = page.locator("button:has-text('Purchase')");
    this.confirmationMessage = page.locator(".sweet-alert h2");
    this.okButton = page.locator(".confirm");
  }

  async fillCheckoutForm(orderDetails) {
    await this.nameInput.fill(orderDetails.name);
    await this.countryInput.fill(orderDetails.country);
    await this.cityInput.fill(orderDetails.city);
    await this.cardInput.fill(orderDetails.card);
    await this.monthInput.fill(orderDetails.month);
    await this.yearInput.fill(orderDetails.year);
  }

  async purchaseOrder() {
    await this.purchaseButton.click();
  }

  async getConfirmationText() {
    return await this.confirmationMessage.textContent();
  }

  async confirmOrder() {
    await this.okButton.click();
  }
}
