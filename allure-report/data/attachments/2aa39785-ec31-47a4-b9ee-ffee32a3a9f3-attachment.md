# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 03:Increase product quantity
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:17:6

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('[data-testid="item-qty"]') resolved to 3 elements:
    1) <div data-testid="item-qty" class="MuiBox-root css-olyig7">1</div> aka getByTestId('item-qty').first()
    2) <div data-testid="item-qty" class="MuiBox-root css-olyig7">1</div> aka getByTestId('item-qty').nth(1)
    3) <div data-testid="item-qty" class="MuiBox-root css-olyig7">1</div> aka getByTestId('item-qty').nth(2)

Call log:
  - waiting for locator('[data-testid="item-qty"]')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - link "QKart-icon" [ref=e7] [cursor=pointer]:
      - /url: /
      - img "QKart-icon" [ref=e8]
    - generic [ref=e10]:
      - textbox "Search for items/categories" [ref=e11]
      - img [ref=e13]
      - group
    - generic [ref=e15]:
      - img "Dummy123" [ref=e17]
      - paragraph [ref=e18]: Dummy123
      - button "Logout" [ref=e19] [cursor=pointer]: Logout
  - generic [ref=e20]:
    - generic [ref=e21]:
      - paragraph [ref=e23]: India’ s FASTEST DELIVERY to your door step
      - generic [ref=e24]:
        - generic [ref=e26]:
          - img "Stylecon 9 Seater RHS Sofa Set" [ref=e27]
          - generic [ref=e28]:
            - paragraph [ref=e29]: Stylecon 9 Seater RHS Sofa Set
            - paragraph [ref=e30]: $650
            - img "3 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e32] [cursor=pointer]:
            - img [ref=e34]
            - text: Add to cart
        - generic [ref=e37]:
          - img "Thinking, Fast and Slow" [ref=e38]
          - generic [ref=e39]:
            - paragraph [ref=e40]: Thinking, Fast and Slow
            - paragraph [ref=e41]: $15
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: Add to cart
        - generic [ref=e48]:
          - img "YONEX Smash Badminton Racquet" [ref=e49]
          - generic [ref=e50]:
            - paragraph [ref=e51]: YONEX Smash Badminton Racquet
            - paragraph [ref=e52]: $100
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e54] [cursor=pointer]:
            - img [ref=e56]
            - text: Add to cart
        - generic [ref=e59]:
          - img "Roadster Mens Running Shoes" [ref=e60]
          - generic [ref=e61]:
            - paragraph [ref=e62]: Roadster Mens Running Shoes
            - paragraph [ref=e63]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
            - button "Size chart" [ref=e64] [cursor=pointer]: Size chart
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]: Size
              - generic [ref=e68]:
                - combobox "Size Size" [ref=e69] [cursor=pointer]:
                  - option "6" [selected]
                  - option "7"
                  - option "8"
                  - option "9"
                  - option "10"
                - img
            - button "Add to cart" [ref=e70] [cursor=pointer]:
              - img [ref=e72]
              - text: Add to cart
        - generic [ref=e75]:
          - img "Nike Mens Running Shoes" [ref=e76]
          - generic [ref=e77]:
            - paragraph [ref=e78]: Nike Mens Running Shoes
            - paragraph [ref=e79]: $80
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
            - button "Size chart" [ref=e80] [cursor=pointer]: Size chart
          - generic [ref=e81]:
            - generic [ref=e82]:
              - generic [ref=e83]: Size
              - generic [ref=e84]:
                - combobox [ref=e85] [cursor=pointer]:
                  - option "6" [selected]
                  - option "7"
                  - option "8"
                  - option "9"
                  - option "10"
                - img
            - button "Add to cart" [ref=e86] [cursor=pointer]:
              - img [ref=e88]
              - text: Add to cart
        - generic [ref=e91]:
          - img "Tan Leatherette Weekender Duffle" [ref=e92]
          - generic [ref=e93]:
            - paragraph [ref=e94]: Tan Leatherette Weekender Duffle
            - paragraph [ref=e95]: $150
            - img "4 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e97] [cursor=pointer]:
            - img [ref=e99]
            - text: Add to cart
        - generic [ref=e102]:
          - img "Yarine Floor Lamp" [ref=e103]
          - generic [ref=e104]:
            - paragraph [ref=e105]: Yarine Floor Lamp
            - paragraph [ref=e106]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e108] [cursor=pointer]:
            - img [ref=e110]
            - text: Add to cart
        - generic [ref=e113]:
          - img "Xtend Smart Watch" [ref=e114]
          - generic [ref=e115]:
            - paragraph [ref=e116]: Xtend Smart Watch
            - paragraph [ref=e117]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e119] [cursor=pointer]:
            - img [ref=e121]
            - text: Add to cart
        - generic [ref=e124]:
          - img "Plastic Balls" [ref=e125]
          - generic [ref=e126]:
            - paragraph [ref=e127]: Plastic Balls
            - paragraph [ref=e128]: $30
            - img "3 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e130] [cursor=pointer]:
            - img [ref=e132]
            - text: Add to cart
        - generic [ref=e135]:
          - img "Kindle" [ref=e136]
          - generic [ref=e137]:
            - paragraph [ref=e138]: Kindle
            - paragraph [ref=e139]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e141] [cursor=pointer]:
            - img [ref=e143]
            - text: Add to cart
        - generic [ref=e146]:
          - img "Connector" [ref=e147]
          - generic [ref=e148]:
            - paragraph [ref=e149]: Connector
            - paragraph [ref=e150]: $80
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e152] [cursor=pointer]:
            - img [ref=e154]
            - text: Add to cart
        - generic [ref=e157]:
          - img "Jenga" [ref=e158]
          - generic [ref=e159]:
            - paragraph [ref=e160]: Jenga
            - paragraph [ref=e161]: $120
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e163] [cursor=pointer]:
            - img [ref=e165]
            - text: Add to cart
    - generic [ref=e168]:
      - generic [ref=e170]:
        - img "Stylecon 9 Seater RHS Sofa Set" [ref=e172]
        - generic [ref=e173]:
          - generic [ref=e174]: Stylecon 9 Seater RHS Sofa Set
          - generic [ref=e175]:
            - generic [ref=e176]:
              - button [ref=e177] [cursor=pointer]:
                - img [ref=e178]
              - generic [ref=e180]: "2"
              - button [active] [ref=e181] [cursor=pointer]:
                - img [ref=e182]
            - generic [ref=e184]: $650
      - generic [ref=e186]:
        - img "Roadster Mens Running Shoes" [ref=e188]
        - generic [ref=e189]:
          - generic [ref=e190]: Roadster Mens Running Shoes
          - generic [ref=e191]:
            - generic [ref=e192]:
              - button [ref=e193] [cursor=pointer]:
                - img [ref=e194]
              - generic [ref=e196]: "1"
              - button [ref=e197] [cursor=pointer]:
                - img [ref=e198]
            - generic [ref=e200]: $30
      - generic [ref=e202]:
        - img "YONEX Smash Badminton Racquet" [ref=e204]
        - generic [ref=e205]:
          - generic [ref=e206]: YONEX Smash Badminton Racquet
          - generic [ref=e207]:
            - generic [ref=e208]:
              - button [ref=e209] [cursor=pointer]:
                - img [ref=e210]
              - generic [ref=e212]: "1"
              - button [ref=e213] [cursor=pointer]:
                - img [ref=e214]
            - generic [ref=e216]: $100
      - generic [ref=e217]:
        - generic [ref=e218]: Order total
        - generic [ref=e219]: $1430
      - button "Checkout" [ref=e221] [cursor=pointer]:
        - img [ref=e223]
        - text: Checkout
  - navigation "pagination navigation" [ref=e226]:
    - list [ref=e227]:
      - listitem [ref=e228]:
        - button "Go to previous page" [disabled]:
          - img
      - listitem [ref=e229]:
        - button "page 1" [ref=e230] [cursor=pointer]: "1"
      - listitem [ref=e231]:
        - button "Go to page 2" [ref=e232] [cursor=pointer]: "2"
      - listitem [ref=e233]:
        - button "Go to next page" [ref=e234] [cursor=pointer]:
          - img [ref=e235]
  - generic [ref=e237]:
    - img "QKart-icon" [ref=e239]
    - paragraph [ref=e240]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e241]:
      - paragraph [ref=e242] [cursor=pointer]:
        - link "Privacy policy" [ref=e243]:
          - /url: privacy-policy
      - paragraph [ref=e244] [cursor=pointer]:
        - link "About us" [ref=e245]:
          - /url: aboutus
      - paragraph [ref=e246] [cursor=pointer]: Contact us
      - paragraph [ref=e247] [cursor=pointer]:
        - link "Terms of Service" [ref=e248]:
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
  17  |       
  18  |     }
  19  |     async clickCartButton() {
  20  |         await expect(this.cartPage.cartButton).toBeVisible();
  21  |         await this.cartPage.cartButton.click();
  22  |     }
  23  | async IncreaseProductQuantity(itemIndex: number = 0) {
  24  |         const buttons = await this.cartPage.IncreaseQuantityButton.all();
  25  |         if (buttons.length > itemIndex) {
  26  |             await expect(buttons[itemIndex]).toBeVisible();
  27  |             await buttons[itemIndex].click();
  28  |         }
  29  |     }
  30  | 
  31  |     async getQuantity() {
> 32  |     return await this.page.locator('[data-testid="item-qty"]').textContent();
      |                                                                ^ Error: locator.textContent: Error: strict mode violation: locator('[data-testid="item-qty"]') resolved to 3 elements:
  33  | }
  34  | 
  35  | async getOrderTotal() {
  36  |     return await this.page.locator('text=$60').textContent();
  37  | }
  38  |     async addBadmintonItemToCart() {
  39  |         await expect(this.cartPage.BadmintonItem).toBeVisible();
  40  |         await this.cartPage.BadmintonItem.click();
  41  |     }
  42  | 
  43  |     async addSofaSetItemToCart() {
  44  |         await expect(this.cartPage.sofaSetItem).toBeVisible();
  45  |         await this.cartPage.sofaSetItem.click();
  46  |     }
  47  | 
  48  |     async verifyItemAlreadyInCartMessage() {
  49  |         // Wait for cart to update after adding item
  50  |         await this.page.waitForTimeout(500);
  51  |         
  52  |         // Verify item appears in cart by checking for the price display
  53  |         const priceInCart = this.page.locator('//*[contains(text(), "$")]').first();
  54  |         await expect(priceInCart).toBeVisible();
  55  |     }
  56  | 
  57  |     async navigateToCheckout() {
  58  |         const baseUrl = this.page.url().split('/').slice(0, 3).join('/');
  59  |         await this.page.goto(`${baseUrl}/checkout`);
  60  |         await this.page.waitForLoadState('networkidle');
  61  |     }
  62  | 
  63  |     async decreaseItemQuantity(itemIndex: number = 0) {
  64  |         const buttons = await this.cartPage.quantityDecreaseButton.all();
  65  |         if (buttons.length > itemIndex) {
  66  |             await buttons[itemIndex].click();
  67  |             await this.page.waitForTimeout(500);
  68  |         }
  69  |     }
  70  | 
  71  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  72  |         const quantities = await this.cartPage.quantityDisplay.all();
  73  |         if (quantities.length > itemIndex) {
  74  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  75  |         }
  76  |     }
  77  | 
  78  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  79  |         const subtotals = await this.cartPage.itemSubtotal.all();
  80  |         if (subtotals.length > itemIndex) {
  81  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  82  |         }
  83  |     }
  84  | 
  85  |     async verifyCartTotal(expectedTotal: string) {
  86  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  87  |     }
  88  | 
  89  |     async refreshBrowserAndVerifyCartPersists() {
  90  |         await this.page.reload();
  91  |         await this.page.waitForLoadState('networkidle');
  92  |        // await this.navigateToCheckout();
  93  |     }
  94  | async verifyEmptyCartMessage() {
  95  |     await expect(
  96  |         this.page.getByText('Cart is empty. Add more items to the cart to checkout.')
  97  |     ).toBeVisible();
  98  | }
  99  |     async verifyLoginPromptMessage() {
  100 |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
  101 |     }
  102 | 
  103 |     async clickContinueShoppingButton() {
  104 |         await expect(this.cartPage.continueShoppingButton).toBeVisible();
  105 |         await this.cartPage.continueShoppingButton.click();
  106 |     }
  107 | 
  108 |     async verifyItemsExistInCheckout() {
  109 |         const items = await this.cartPage.quantityDisplay.all();
  110 |         expect(items.length).toBeGreaterThan(0);
  111 |     }
  112 | 
  113 |     async getCartItemsCount(): Promise<number> {
  114 |         const items = await this.cartPage.quantityDisplay.all();
  115 |         return items.length;
  116 |     }
  117 | 
  118 |     async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
  119 |         const subtotals = await this.cartPage.itemSubtotal.all();
  120 |         if (subtotals.length > itemIndex) {
  121 |             const currentSubtotal = await subtotals[itemIndex].textContent();
  122 |             expect(currentSubtotal).not.toBe(previousSubtotal);
  123 |         }
  124 |     }
  125 | 
  126 |     async verifyCartTotalDecreased(previousTotal: string) {
  127 |         const currentTotal = await this.cartPage.cartTotal.textContent();
  128 |         expect(currentTotal).not.toBe(previousTotal);
  129 |     }
  130 | 
  131 |     async getItemSubtotal(itemIndex: number): Promise<string | null> {
  132 |         try {
```