# Playwright E-Commerce UI Automation Framework

## Overview

This project is a **UI Automation Framework** built using **Playwright with JavaScript**.  
It automates key user workflows of the Demoblaze e-commerce website including product browsing, cart operations, and checkout.

The framework follows the **Page Object Model (POM)** design pattern for better maintainability, scalability, and readability.

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Excel (xlsx) for Data-Driven Testing

---

## Project Structure

playwright-ecommerce-automation
│
├── pages
│ ├── LoginPage.js
│ ├── HomePage.js
│ ├── ProductPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
│
├── tests
│ ├── login.spec.js
│ ├── addToCart.spec.js
│ ├── cartValidation.spec.js
│ ├── purchaseFlow.spec.js
│ ├── deleteFromCart.spec.js
│ └── categoryFilter.spec.js
│
├── utils
│ └── excelReader.js
│
├── test-data
│ └── orderData.xlsx
│
├── playwright.config.js
├── package.json
└── README.md

---

## Features

- UI automation using Playwright
- Page Object Model (POM) implementation
- Multiple UI test scenarios
- End-to-end purchase flow automation
- Product category filtering validation
- Cart operations (add/remove products)
- Excel-based Data-Driven Testing
- Alert handling
- Screenshot capture on failure

---

## Test Scenarios Covered

1. Valid Login
2. Invalid Login
3. Add Product to Cart
4. Verify Product in Cart
5. Delete Product from Cart
6. Verify Product Details Page
7. Category Filter Validation
8. End-to-End Purchase Flow

---

## Running Tests

```bash
npx playwright test

```
