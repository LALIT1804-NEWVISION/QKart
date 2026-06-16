# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 05: Decrease product quantity in Checkout
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:37:6

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('text=$60')

```

# Test source

```ts
  1   | import { cartPages } from "../../pages/addTocart/Cartpage";
  2   | import { expect, Page } from "@playwright/test";
  3   | 
  4   | export class CartAction {
  5   | 
  6   |     readonly page: Page;
  7   |     private readonly cartPage: cartPages;
  8   | 
  9   |     constructor(page: Page) {
  10  |         this.page = page;
  11  |         this.cartPage = new cartPages(page);
  12  |     }
  13  | 
  14  |     async addItemsToCart() {
  15  |         await expect(this.cartPage.shoesItem).toBeVisible();
  16  |         await this.cartPage.shoesItem.click();
  17  |       
  18  |     }
  19  |     async clickCartButton() {
  20  |         await expect(this.cartPage.cartButton).toBeVisible();
  21  |         await this.cartPage.cartButton.click();
  22  |     }
  23  | async IncreaseProductQuantity() {
  24  |         await expect(this.cartPage.IncreaseQuantityButton).toBeVisible();
  25  |         await this.cartPage.IncreaseQuantityButton.click();
  26  |     }
  27  | 
  28  |     async getQuantity() {
  29  |     return await this.page.locator('[data-testid="item-qty"]').textContent();
  30  | }
  31  | 
  32  | async getOrderTotal() {
> 33  |     return await this.page.locator('text=$60').textContent();
      |                                                ^ Error: locator.textContent: Target page, context or browser has been closed
  34  | }
  35  |     async addBadmintonItemToCart() {
  36  |         await expect(this.cartPage.BadmintonItem).toBeVisible();
  37  |         await this.cartPage.BadmintonItem.click();
  38  |     }
  39  | 
  40  |     async addSofaSetItemToCart() {
  41  |         await expect(this.cartPage.sofaSetItem).toBeVisible();
  42  |         await this.cartPage.sofaSetItem.click();
  43  |     }
  44  | 
  45  |     async verifyItemAlreadyInCartMessage() {
  46  |         // Wait for cart to update after adding item
  47  |         await this.page.waitForTimeout(500);
  48  |         
  49  |         // Verify item appears in cart by checking for the price display
  50  |         const priceInCart = this.page.locator('//*[contains(text(), "$")]').first();
  51  |         await expect(priceInCart).toBeVisible();
  52  |     }
  53  | 
  54  |     async navigateToCheckout() {
  55  |         const baseUrl = this.page.url().split('/').slice(0, 3).join('/');
  56  |         await this.page.goto(`${baseUrl}/checkout`);
  57  |         await this.page.waitForLoadState('networkidle');
  58  |     }
  59  | 
  60  |     async decreaseItemQuantity() {
  61  |        // await expect(this.cartPage.IncreaseQuantityButton).toBeVisible();
  62  |        // await this.cartPage.IncreaseQuantityButton.click();
  63  |         await expect(this.cartPage.quantityDecreaseButton).toBeVisible();
  64  |         await this.cartPage.quantityDecreaseButton.click();
  65  |     }
  66  | 
  67  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  68  |         const quantities = await this.cartPage.quantityDisplay.all();
  69  |         if (quantities.length > itemIndex) {
  70  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  71  |         }
  72  |     }
  73  | 
  74  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  75  |         const subtotals = await this.cartPage.itemSubtotal.all();
  76  |         if (subtotals.length > itemIndex) {
  77  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  78  |         }
  79  |     }
  80  | 
  81  |     async verifyCartTotal(expectedTotal: string) {
  82  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  83  |     }
  84  | 
  85  |     async refreshBrowserAndVerifyCartPersists() {
  86  |         await this.page.reload();
  87  |         await this.page.waitForLoadState('networkidle');
  88  |         await this.navigateToCheckout();
  89  |     }
  90  | 
  91  |     async verifyEmptyCartMessage() {
  92  |         await expect(this.cartPage.emptyCartMessage).toBeVisible();
  93  |     }
  94  | 
  95  |     async verifyLoginPromptMessage() {
  96  |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
  97  |     }
  98  | 
  99  |     async clickContinueShoppingButton() {
  100 |         await expect(this.cartPage.continueShoppingButton).toBeVisible();
  101 |         await this.cartPage.continueShoppingButton.click();
  102 |     }
  103 | 
  104 |     async verifyItemsExistInCheckout() {
  105 |         const items = await this.cartPage.quantityDisplay.all();
  106 |         expect(items.length).toBeGreaterThan(0);
  107 |     }
  108 | 
  109 |     async getCartItemsCount(): Promise<number> {
  110 |         const items = await this.cartPage.quantityDisplay.all();
  111 |         return items.length;
  112 |     }
  113 | 
  114 |     async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
  115 |         const subtotals = await this.cartPage.itemSubtotal.all();
  116 |         if (subtotals.length > itemIndex) {
  117 |             const currentSubtotal = await subtotals[itemIndex].textContent();
  118 |             expect(currentSubtotal).not.toBe(previousSubtotal);
  119 |         }
  120 |     }
  121 | 
  122 |     async verifyCartTotalDecreased(previousTotal: string) {
  123 |         const currentTotal = await this.cartPage.cartTotal.textContent();
  124 |         expect(currentTotal).not.toBe(previousTotal);
  125 |     }
  126 | 
  127 |     async getItemSubtotal(itemIndex: number): Promise<string | null> {
  128 |         try {
  129 |             const subtotals = await this.cartPage.itemSubtotal.all();
  130 |             if (subtotals.length > itemIndex) {
  131 |                 return await subtotals[itemIndex].textContent();
  132 |             }
  133 |         } catch (e) {
```