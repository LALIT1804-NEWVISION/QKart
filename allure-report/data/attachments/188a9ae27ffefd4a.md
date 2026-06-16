# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 04: Add Same Item again
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:22:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Item already in cart. Use the cart sidebar to update quantity or remove item')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Item already in cart. Use the cart sidebar to update quantity or remove item')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- textbox "Search for items/categories"
- img "Dummy123"
- paragraph: Dummy123
- button "Logout"
- paragraph: India’ s FASTEST DELIVERY to your door step
- img "Stylecon 9 Seater RHS Sofa Set"
- paragraph: Stylecon 9 Seater RHS Sofa Set
- paragraph: $650
- img "3 Stars"
- button "Add to cart"
- img "Thinking, Fast and Slow"
- paragraph: Thinking, Fast and Slow
- paragraph: $15
- img "5 Stars"
- button "Add to cart"
- img "YONEX Smash Badminton Racquet"
- paragraph: YONEX Smash Badminton Racquet
- paragraph: $100
- img "5 Stars"
- button "Add to cart"
- img "Roadster Mens Running Shoes"
- paragraph: Roadster Mens Running Shoes
- paragraph: $30
- img "5 Stars"
- button "Size chart"
- text: Size
- combobox "Size Size":
  - option "6" [selected]
  - option "7"
  - option "8"
  - option "9"
  - option "10"
- button "Add to cart"
- img "Nike Mens Running Shoes"
- paragraph: Nike Mens Running Shoes
- paragraph: $80
- img "5 Stars"
- button "Size chart"
- text: Size
- combobox:
  - option "6" [selected]
  - option "7"
  - option "8"
  - option "9"
  - option "10"
- button "Add to cart"
- img "Tan Leatherette Weekender Duffle"
- paragraph: Tan Leatherette Weekender Duffle
- paragraph: $150
- img "4 Stars"
- button "Add to cart"
- img "Yarine Floor Lamp"
- paragraph: Yarine Floor Lamp
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Xtend Smart Watch"
- paragraph: Xtend Smart Watch
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Plastic Balls"
- paragraph: Plastic Balls
- paragraph: $30
- img "3 Stars"
- button "Add to cart"
- img "Kindle"
- paragraph: Kindle
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Connector"
- paragraph: Connector
- paragraph: $80
- img "5 Stars"
- button "Add to cart"
- img "Jenga"
- paragraph: Jenga
- paragraph: $120
- img "5 Stars"
- button "Add to cart"
- img "Roadster Mens Running Shoes"
- text: Roadster Mens Running Shoes
- button
- text: "1"
- button
- text: $30 Order total $30
- button "Checkout"
- navigation "pagination navigation":
  - list:
    - listitem:
      - button "Go to previous page" [disabled]
    - listitem:
      - button "page 1": "1"
    - listitem:
      - button "Go to page 2": "2"
    - listitem:
      - button "Go to next page"
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
- alert: Logged in successfully
```

# Test source

```ts
  1  | import { cartPages } from "../../pages/addTocart/Cartpage";
  2  | import { expect, Page } from "@playwright/test";
  3  | 
  4  | export class CartAction {
  5  | 
  6  |     private readonly page: Page;
  7  |     private readonly cartPage: cartPages;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.cartPage = new cartPages(page);
  12 |     }
  13 | 
  14 |     async addItemsToCart() {
  15 |         await expect(this.cartPage.shoesItem).toBeVisible();
  16 |         await this.cartPage.shoesItem.click();
  17 |     }
  18 | 
  19 |     async addBadmintonItemToCart() {
  20 |         await expect(this.cartPage.BadmintonItem).toBeVisible();
  21 |         await this.cartPage.BadmintonItem.click();
  22 |     }
  23 | 
  24 |     async addSofaSetItemToCart() {
  25 |         await expect(this.cartPage.sofaSetItem).toBeVisible();
  26 |         await this.cartPage.sofaSetItem.click();
  27 |     }
  28 | 
  29 |     async verifyItemAlreadyInCartMessage() {
> 30 |         await expect(this.cartPage.itemAlreadyInCartMessage).toBeVisible();
     |                                                              ^ Error: expect(locator).toBeVisible() failed
  31 | 
  32 |         await expect(this.cartPage.itemAlreadyInCartMessage)
  33 |             .toHaveText(
  34 |                 'Item already in cart. Use the cart sidebar to update quantity or remove item'
  35 |             );
  36 |     }
  37 | }
```