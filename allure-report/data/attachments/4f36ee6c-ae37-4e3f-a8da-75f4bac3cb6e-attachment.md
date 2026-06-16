# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 03:Increase product quantity
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:16:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//p[normalize-space()="YONEX Smash Badminton Racquet"]/../following-sibling::div//button[.="Add to cart"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//p[normalize-space()="YONEX Smash Badminton Racquet"]/../following-sibling::div//button[.="Add to cart"]')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- img "Dummy123"
- paragraph: Dummy123
- button "Logout"
- heading "Shipping" [level=4]
- paragraph: Manage all the shipping addresses you want.This way you won 't have to enter the shipping address manually with every order.Select the address you want to get your order delivered.
- separator
- paragraph: No addresses found for this account.Please add one to proceed
- button "Add new address"
- heading "Payment" [level=4]
- paragraph: Payment Method
- separator
- paragraph: Wallet
- paragraph: Pay $ 30 of available $ 1645
- button "PLACE ORDER" [disabled]
- img "Roadster Mens Running Shoes"
- text: "Roadster Mens Running Shoes Qty: 1 $30 Order total $30"
- heading "Order Details" [level=2]
- paragraph: Products
- paragraph: "1"
- paragraph: Subtotal
- paragraph: $30
- paragraph: Shipping Charges
- paragraph: $0
- paragraph: Total
- paragraph: $30
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
  17  |         await this.cartPage.cartButton.click();
  18  |     }
  19  | 
  20  |     async addBadmintonItemToCart() {
> 21  |         await expect(this.cartPage.BadmintonItem).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
  22  |         await this.cartPage.BadmintonItem.click();
  23  |     }
  24  | 
  25  |     async addSofaSetItemToCart() {
  26  |         await expect(this.cartPage.sofaSetItem).toBeVisible();
  27  |         await this.cartPage.sofaSetItem.click();
  28  |     }
  29  | 
  30  |     async verifyItemAlreadyInCartMessage() {
  31  |         // Wait for cart to update after adding item
  32  |         await this.page.waitForTimeout(500);
  33  |         
  34  |         // Verify item appears in cart by checking for the price display
  35  |         const priceInCart = this.page.locator('//*[contains(text(), "$")]').first();
  36  |         await expect(priceInCart).toBeVisible();
  37  |     }
  38  | 
  39  |     async navigateToCheckout() {
  40  |         const baseUrl = this.page.url().split('/').slice(0, 3).join('/');
  41  |         await this.page.goto(`${baseUrl}/checkout`);
  42  |         await this.page.waitForLoadState('networkidle');
  43  |     }
  44  | 
  45  |     async decreaseItemQuantity(itemIndex: number = 0) {
  46  |         const buttons = await this.cartPage.quantityDecreaseButton.all();
  47  |         if (buttons.length > itemIndex) {
  48  |             await buttons[itemIndex].click();
  49  |             await this.page.waitForLoadState('networkidle');
  50  |         }
  51  |     }
  52  | 
  53  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  54  |         const quantities = await this.cartPage.quantityDisplay.all();
  55  |         if (quantities.length > itemIndex) {
  56  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  57  |         }
  58  |     }
  59  | 
  60  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  61  |         const subtotals = await this.cartPage.itemSubtotal.all();
  62  |         if (subtotals.length > itemIndex) {
  63  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  64  |         }
  65  |     }
  66  | 
  67  |     async verifyCartTotal(expectedTotal: string) {
  68  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  69  |     }
  70  | 
  71  |     async refreshBrowserAndVerifyCartPersists() {
  72  |         await this.page.reload();
  73  |         await this.page.waitForLoadState('networkidle');
  74  |         await this.navigateToCheckout();
  75  |     }
  76  | 
  77  |     async verifyEmptyCartMessage() {
  78  |         await expect(this.cartPage.emptyCartMessage).toBeVisible();
  79  |     }
  80  | 
  81  |     async verifyLoginPromptMessage() {
  82  |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
  83  |     }
  84  | 
  85  |     async clickContinueShoppingButton() {
  86  |         await expect(this.cartPage.continueShoppingButton).toBeVisible();
  87  |         await this.cartPage.continueShoppingButton.click();
  88  |     }
  89  | 
  90  |     async verifyItemsExistInCheckout() {
  91  |         const items = await this.cartPage.quantityDisplay.all();
  92  |         expect(items.length).toBeGreaterThan(0);
  93  |     }
  94  | 
  95  |     async getCartItemsCount(): Promise<number> {
  96  |         const items = await this.cartPage.quantityDisplay.all();
  97  |         return items.length;
  98  |     }
  99  | 
  100 |     async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
  101 |         const subtotals = await this.cartPage.itemSubtotal.all();
  102 |         if (subtotals.length > itemIndex) {
  103 |             const currentSubtotal = await subtotals[itemIndex].textContent();
  104 |             expect(currentSubtotal).not.toBe(previousSubtotal);
  105 |         }
  106 |     }
  107 | 
  108 |     async verifyCartTotalDecreased(previousTotal: string) {
  109 |         const currentTotal = await this.cartPage.cartTotal.textContent();
  110 |         expect(currentTotal).not.toBe(previousTotal);
  111 |     }
  112 | 
  113 |     async getItemSubtotal(itemIndex: number): Promise<string | null> {
  114 |         try {
  115 |             const subtotals = await this.cartPage.itemSubtotal.all();
  116 |             if (subtotals.length > itemIndex) {
  117 |                 return await subtotals[itemIndex].textContent();
  118 |             }
  119 |         } catch (e) {
  120 |             return null;
  121 |         }
```