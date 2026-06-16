# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 08: Prevent guest from adding products
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:67:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[contains(text(),"Login to add")]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[contains(text(),"Login to add")]')

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
- img "YONEX Smash Badminton Racquet"
- text: YONEX Smash Badminton Racquet
- button
- text: "2"
- button
- text: $100
- img "Stylecon 9 Seater RHS Sofa Set"
- text: Stylecon 9 Seater RHS Sofa Set
- button
- text: "1"
- button
- text: $650
- img "Roadster Mens Running Shoes"
- text: Roadster Mens Running Shoes
- button
- text: "1"
- button
- text: $30 Order total $880
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
- alert: Item already in cart. Use the cart sidebar to update quantity or remove item.
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
  23  |     async IncreaseProductQuantity(itemIndex: number = 0) {
  24  |         const buttons = await this.cartPage.IncreaseQuantityButton.all();
  25  |         if (buttons.length > itemIndex) {
  26  |             await expect(buttons[itemIndex]).toBeVisible();
  27  |             await buttons[itemIndex].click();
  28  |         }
  29  |     }
  30  | 
  31  |     async getQuantity() {
  32  |         return await this.page.locator('[data-testid="item-qty"]').first().textContent();
  33  |     }
  34  | 
  35  |     async getOrderTotal() {
  36  |         // Get the order total from the cart sidebar
  37  |         return await this.cartPage.cartTotal.textContent();
  38  |     }
  39  |     async addBadmintonItemToCart() {
  40  |         await expect(this.cartPage.BadmintonItem).toBeVisible();
  41  |         await this.cartPage.BadmintonItem.click();
  42  |     }
  43  | 
  44  |     async addSofaSetItemToCart() {
  45  |         await expect(this.cartPage.sofaSetItem).toBeVisible();
  46  |         await this.cartPage.sofaSetItem.click();
  47  |     }
  48  | 
  49  |     async verifyItemAlreadyInCartMessage() {
  50  |         // Wait for cart to update after adding item
  51  |         await this.page.waitForTimeout(500);
  52  | 
  53  |         // Verify item appears in cart by checking for the price display
  54  |         const priceInCart = this.page.locator('//*[contains(text(), "$")]').first();
  55  |         await expect(priceInCart).toBeVisible();
  56  |     }
  57  | 
  58  |     async navigateToCheckout() {
  59  |         const baseUrl = this.page.url().split('/').slice(0, 3).join('/');
  60  |         await this.page.goto(`${baseUrl}/checkout`);
  61  |         await this.page.waitForLoadState('networkidle');
  62  |     }
  63  | 
  64  |     async decreaseItemQuantity(itemIndex: number = 0) {
  65  |         const buttons = await this.cartPage.quantityDecreaseButton.all();
  66  |         if (buttons.length > itemIndex) {
  67  |             await buttons[itemIndex].click();
  68  |             await this.page.waitForTimeout(500);
  69  |         }
  70  |     }
  71  | 
  72  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  73  |         const quantities = await this.cartPage.quantityDisplay.all();
  74  |         if (quantities.length > itemIndex) {
  75  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  76  |         }
  77  |     }
  78  | 
  79  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  80  |         const subtotals = await this.cartPage.itemSubtotal.all();
  81  |         if (subtotals.length > itemIndex) {
  82  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  83  |         }
  84  |     }
  85  | 
  86  |     async verifyCartTotal(expectedTotal: string) {
  87  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  88  |     }
  89  | 
  90  |     async refreshBrowserAndVerifyCartPersists() {
  91  |         await this.page.reload();
  92  |         await this.page.waitForLoadState('networkidle');
  93  |         // await this.navigateToCheckout();
  94  |     }
  95  |     async verifyEmptyCartMessage() {
  96  |         await expect(
  97  |             this.page.getByText('Cart is empty. Add more items to the cart to checkout.')
  98  |         ).toBeVisible();
  99  |     }
  100 |     async verifyLoginPromptMessage() {
> 101 |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
      |                                                        ^ Error: expect(locator).toBeVisible() failed
  102 |     }
  103 | 
  104 |     async clickContinueShoppingButton() {
  105 |         await expect(this.cartPage.continueShoppingButton).toBeVisible();
  106 |         await this.cartPage.continueShoppingButton.click();
  107 |     }
  108 | 
  109 |     async verifyItemsExistInCheckout() {
  110 |         const items = await this.cartPage.quantityDisplay.all();
  111 |         expect(items.length).toBeGreaterThan(0);
  112 |     }
  113 | 
  114 |     async getCartItemsCount(): Promise<number> {
  115 |         const items = await this.cartPage.quantityDisplay.all();
  116 |         return items.length;
  117 |     }
  118 | 
  119 |     async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
  120 |         const subtotals = await this.cartPage.itemSubtotal.all();
  121 |         if (subtotals.length > itemIndex) {
  122 |             const currentSubtotal = await subtotals[itemIndex].textContent();
  123 |             expect(currentSubtotal).not.toBe(previousSubtotal);
  124 |         }
  125 |     }
  126 | 
  127 |     async verifyCartTotalDecreased(previousTotal: string) {
  128 |         const currentTotal = await this.cartPage.cartTotal.textContent();
  129 |         expect(currentTotal).not.toBe(previousTotal);
  130 |     }
  131 | 
  132 |     async getItemSubtotal(itemIndex: number): Promise<string | null> {
  133 |         try {
  134 |             const subtotals = await this.cartPage.itemSubtotal.all();
  135 |             if (subtotals.length > itemIndex) {
  136 |                 return await subtotals[itemIndex].textContent();
  137 |             }
  138 |         } catch (e) {
  139 |             return null;
  140 |         }
  141 |         return null;
  142 |     }
  143 | 
  144 |     async getCartTotal(): Promise<string | null> {
  145 |         try {
  146 |             return await this.cartPage.cartTotal.textContent();
  147 |         } catch (e) {
  148 |             return null;
  149 |         }
  150 |     }
  151 | }
```