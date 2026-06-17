# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\productListing\productlisting.spec.ts >> TC-001-Product Listing: Home Page Load and Navigation Verification
- Location: tests\Qkart\productListing\productlisting.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//button[text()="Register"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//button[text()="Register"]')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- button "Back to explore"
- heading "Login" [level=2]
- text: Username
- textbox "Username":
  - /placeholder: Enter Username
- text: Password
- textbox "Password":
  - /placeholder: Enter a password
- button "Login to QKart"
- paragraph:
  - text: Don't have an account?
  - link "Register now":
    - /url: /register
- img "QKart-icon"
- paragraph: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
- paragraph:
  - link "Privacy policy":
    - /url: privacy-policy
- paragraph:
  - link "About us":
    - /url: aboutus
- paragraph: Contact us
- paragraph:
  - link "Terms of Service":
    - /url: terms-of-service
```

# Test source

```ts
  1  | import {Page, expect} from "@playwright/test";
  2  | import {ProductPage} from "../../pages/ProductListingPage/productPage";
  3  | 
  4  | 
  5  | export class ProductAction {
  6  |     readonly productPage: ProductPage;
  7  | 
  8  |     constructor(page: Page) {
  9  |         this.productPage = new ProductPage(page);
  10 |     }
  11 | 
  12 |     async verifyPageLoadState() {
  13 |         await this.productPage.page.waitForLoadState("load");
  14 |         await expect(this.productPage.homePageLogo).toBeVisible();
  15 |     }
  16 | 
  17 |     async verifyLoginButtonVisibiltyAndNavigation() {
  18 |         await expect(this.productPage.loginButton).toBeVisible();
  19 |         await this.productPage.loginButton.click();
  20 |         await expect(this.productPage.page).toHaveURL(/login/);
  21 |     }
  22 | 
  23 |     async verifyRegisterButtonVisibiltyAndNavigation() {
> 24 |         await expect(this.productPage.registrationButton).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  25 |         await this.productPage.registrationButton.click();
  26 |         await expect(this.productPage.page).toHaveURL(/register/);
  27 |     }
  28 | 
  29 | 
  30 | }
```