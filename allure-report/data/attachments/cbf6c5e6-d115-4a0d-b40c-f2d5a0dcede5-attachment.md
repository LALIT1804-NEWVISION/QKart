# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 05: Verify cart details
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:43:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[@data-testid=\'item-qty\']/following::*[name()=\'svg\' and @data-testid=\'AddOutlinedIcon\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[@data-testid=\'item-qty\']/following::*[name()=\'svg\' and @data-testid=\'AddOutlinedIcon\']')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- textbox "Search for items/categories"
- button "Login"
- button "Register"
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
- alert: Login to add an item to the Cart
```

# Test source

```ts
  1  | import  {cartPages} from "../../pages/addTocart/Cartpage";
  2  | import {test ,expect} from "@playwright/test";
  3  | import { Page } from "@playwright/test";
  4  | export class CartAction
  5  | {
  6  |   
  7  |   private readonly page: Page;
  8  |   private readonly cartPage: cartPages
  9  | 
  10 | 
  11 |     constructor(page: Page)
  12 |     {
  13 |         this.page = page;
  14 |         this.cartPage = new cartPages(page);
  15 |     }       
  16 |     
  17 | 
  18 |  async addItemsToCart() {
  19 |     await expect(this.cartPage.shoesItem).toBeVisible();
  20 |     await this.cartPage.shoesItem.click();
  21 | }
  22 | 
  23 | async addBadmintonItemToCart() {
  24 |     await expect(this.cartPage.BadmintonItem).toBeVisible();
  25 |     await this.cartPage.BadmintonItem.click();
  26 | }
  27 | 
  28 | async addSofaSetItemToCart() {
  29 |     await expect(this.cartPage.sofaSetItem).toBeVisible();
  30 |     await this.cartPage.sofaSetItem.click();
  31 | }
  32 | 
  33 | async increaseItemQuantity() {
> 34 |     await expect(this.cartPage.IncreaseQuantityButton).toBeVisible();
     |                                                        ^ Error: expect(locator).toBeVisible() failed
  35 |     await this.cartPage.IncreaseQuantityButton.click();
  36 | 
  37 | }
  38 | async decreaseItemQuantity() {
  39 |     await expect(this.cartPage.DecreaseQuantityButton).toBeVisible();
  40 |     await this.cartPage.DecreaseQuantityButton.click();
  41 | 
  42 | }
  43 | }
```