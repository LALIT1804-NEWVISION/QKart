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
  61  |     
  62  |         await expect(this.cartPage.quantityDecreaseButton).toBeVisible();
  63  |         await this.cartPage.quantityDecreaseButton.click();
  64  |          
  65  |     return await this.page.locator('[data-testid="item-qty"]').textContent();
  66  |     
  67  | 
  68  |     }
  69  | 
  70  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  71  |         const quantities = await this.cartPage.quantityDisplay.all();
  72  |         if (quantities.length > itemIndex) {
  73  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  74  |         }
  75  |     }
  76  | 
  77  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  78  |         const subtotals = await this.cartPage.itemSubtotal.all();
  79  |         if (subtotals.length > itemIndex) {
  80  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  81  |         }
  82  |     }
  83  | 
  84  |     async verifyCartTotal(expectedTotal: string) {
  85  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  86  |     }
  87  | 
  88  |     async refreshBrowserAndVerifyCartPersists() {
  89  |         await this.page.reload();
  90  |         await this.page.waitForLoadState('networkidle');
  91  |         await this.navigateToCheckout();
  92  |     }
  93  | 
  94  |     async verifyEmptyCartMessage() {
  95  |         await expect(this.cartPage.emptyCartMessage).toBeVisible();
  96  |     }
  97  | 
  98  |     async verifyLoginPromptMessage() {
  99  |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
  100 |     }
  101 | 
  102 |     async clickContinueShoppingButton() {
  103 |         await expect(this.cartPage.continueShoppingButton).toBeVisible();
  104 |         await this.cartPage.continueShoppingButton.click();
  105 |     }
  106 | 
  107 |     async verifyItemsExistInCheckout() {
  108 |         const items = await this.cartPage.quantityDisplay.all();
  109 |         expect(items.length).toBeGreaterThan(0);
  110 |     }
  111 | 
  112 |     async getCartItemsCount(): Promise<number> {
  113 |         const items = await this.cartPage.quantityDisplay.all();
  114 |         return items.length;
  115 |     }
  116 | 
  117 |     async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
  118 |         const subtotals = await this.cartPage.itemSubtotal.all();
  119 |         if (subtotals.length > itemIndex) {
  120 |             const currentSubtotal = await subtotals[itemIndex].textContent();
  121 |             expect(currentSubtotal).not.toBe(previousSubtotal);
  122 |         }
  123 |     }
  124 | 
  125 |     async verifyCartTotalDecreased(previousTotal: string) {
  126 |         const currentTotal = await this.cartPage.cartTotal.textContent();
  127 |         expect(currentTotal).not.toBe(previousTotal);
  128 |     }
  129 | 
  130 |     async getItemSubtotal(itemIndex: number): Promise<string | null> {
  131 |         try {
  132 |             const subtotals = await this.cartPage.itemSubtotal.all();
  133 |             if (subtotals.length > itemIndex) {
```