# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 05: Decrease product quantity in Checkout
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:34:6

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('//div[@data-testid="cart-total"]//span')

```

# Test source

```ts
  23  | 
  24  |     async addSofaSetItemToCart() {
  25  |         await expect(this.cartPage.sofaSetItem).toBeVisible();
  26  |         await this.cartPage.sofaSetItem.click();
  27  |     }
  28  | 
  29  |     async verifyItemAlreadyInCartMessage() {
  30  |         await expect(this.cartPage.itemAlreadyInCartMessage).toBeVisible();
  31  | 
  32  |         await expect(this.cartPage.itemAlreadyInCartMessage)
  33  |             .toHaveText(
  34  |                 'Item already in cart. Use the cart sidebar to update quantity or remove item.'
  35  |             );
  36  |     }
  37  | 
  38  |     async navigateToCheckout() {
  39  |         const baseUrl = this.page.url().split('/').slice(0, 3).join('/');
  40  |         await this.page.goto(`${baseUrl}/checkout`);
  41  |         await this.page.waitForLoadState('networkidle');
  42  |     }
  43  | 
  44  |     async decreaseItemQuantity(itemIndex: number = 0) {
  45  |         const buttons = await this.cartPage.quantityDecreaseButton.all();
  46  |         if (buttons.length > itemIndex) {
  47  |             await buttons[itemIndex].click();
  48  |             await this.page.waitForLoadState('networkidle');
  49  |         }
  50  |     }
  51  | 
  52  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  53  |         const quantities = await this.cartPage.quantityDisplay.all();
  54  |         if (quantities.length > itemIndex) {
  55  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  56  |         }
  57  |     }
  58  | 
  59  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  60  |         const subtotals = await this.cartPage.itemSubtotal.all();
  61  |         if (subtotals.length > itemIndex) {
  62  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  63  |         }
  64  |     }
  65  | 
  66  |     async verifyCartTotal(expectedTotal: string) {
  67  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  68  |     }
  69  | 
  70  |     async refreshBrowserAndVerifyCartPersists() {
  71  |         await this.page.reload();
  72  |         await this.page.waitForLoadState('networkidle');
  73  |         await this.navigateToCheckout();
  74  |     }
  75  | 
  76  |     async verifyEmptyCartMessage() {
  77  |         await expect(this.cartPage.emptyCartMessage).toBeVisible();
  78  |     }
  79  | 
  80  |     async verifyLoginPromptMessage() {
  81  |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
  82  |         await expect(this.cartPage.loginPromptMessage)
  83  |             .toHaveText('Login to add an item to the Cart');
  84  |     }
  85  | 
  86  |     async clickContinueShoppingButton() {
  87  |         await expect(this.cartPage.continueShoppingButton).toBeVisible();
  88  |         await this.cartPage.continueShoppingButton.click();
  89  |     }
  90  | 
  91  |     async verifyItemsExistInCheckout() {
  92  |         const items = await this.cartPage.quantityDisplay.all();
  93  |         expect(items.length).toBeGreaterThan(0);
  94  |     }
  95  | 
  96  |     async getCartItemsCount(): Promise<number> {
  97  |         const items = await this.cartPage.quantityDisplay.all();
  98  |         return items.length;
  99  |     }
  100 | 
  101 |     async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
  102 |         const subtotals = await this.cartPage.itemSubtotal.all();
  103 |         if (subtotals.length > itemIndex) {
  104 |             const currentSubtotal = await subtotals[itemIndex].textContent();
  105 |             expect(currentSubtotal).not.toBe(previousSubtotal);
  106 |         }
  107 |     }
  108 | 
  109 |     async verifyCartTotalDecreased(previousTotal: string) {
  110 |         const currentTotal = await this.cartPage.cartTotal.textContent();
  111 |         expect(currentTotal).not.toBe(previousTotal);
  112 |     }
  113 | 
  114 |     async getItemSubtotal(itemIndex: number): Promise<string | null> {
  115 |         const subtotals = await this.cartPage.itemSubtotal.all();
  116 |         if (subtotals.length > itemIndex) {
  117 |             return await subtotals[itemIndex].textContent();
  118 |         }
  119 |         return null;
  120 |     }
  121 | 
  122 |     async getCartTotal(): Promise<string | null> {
> 123 |         return await this.cartPage.cartTotal.textContent();
      |                                              ^ Error: locator.textContent: Test ended.
  124 |     }}
```