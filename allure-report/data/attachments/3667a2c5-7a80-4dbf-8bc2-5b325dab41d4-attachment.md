# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 04: Add Same Item again
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:22:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('text=Item already in cart. Use the cart sidebar to update quantity or remove item')
Expected: "Item already in cart. Use the cart sidebar to update quantity or remove item"
Received: "Item already in cart. Use the cart sidebar to update quantity or remove item."
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('text=Item already in cart. Use the cart sidebar to update quantity or remove item')
    14 × locator resolved to <div id="notistack-snackbar" class="SnackbarItem-message">…</div>
       - unexpected value "Item already in cart. Use the cart sidebar to update quantity or remove item."

```

```yaml
- text: Item already in cart. Use the cart sidebar to update quantity or remove item.
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
  30 |         await expect(this.cartPage.itemAlreadyInCartMessage).toBeVisible();
  31 | 
  32 |         await expect(this.cartPage.itemAlreadyInCartMessage)
> 33 |             .toHaveText(
     |              ^ Error: expect(locator).toHaveText(expected) failed
  34 |                 'Item already in cart. Use the cart sidebar to update quantity or remove item'
  35 |             );
  36 |     }
  37 | }
```