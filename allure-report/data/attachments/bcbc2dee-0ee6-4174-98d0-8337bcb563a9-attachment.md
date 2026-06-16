# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 05: Decrease product quantity in Checkout
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:37:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=$60')

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
        - img "Roadster Mens Running Shoes" [ref=e172]
        - generic [ref=e173]:
          - generic [ref=e174]: Roadster Mens Running Shoes
          - generic [ref=e175]:
            - generic [ref=e176]:
              - button [active] [ref=e177] [cursor=pointer]:
                - img [ref=e178]
              - generic [ref=e180]: "1"
              - button [ref=e181] [cursor=pointer]:
                - img [ref=e182]
            - generic [ref=e184]: $30
      - generic [ref=e185]:
        - generic [ref=e186]: Order total
        - generic [ref=e187]: $30
      - button "Checkout" [ref=e189] [cursor=pointer]:
        - img [ref=e191]
        - text: Checkout
  - navigation "pagination navigation" [ref=e194]:
    - list [ref=e195]:
      - listitem [ref=e196]:
        - button "Go to previous page" [disabled]:
          - img
      - listitem [ref=e197]:
        - button "page 1" [ref=e198] [cursor=pointer]: "1"
      - listitem [ref=e199]:
        - button "Go to page 2" [ref=e200] [cursor=pointer]: "2"
      - listitem [ref=e201]:
        - button "Go to next page" [ref=e202] [cursor=pointer]:
          - img [ref=e203]
  - generic [ref=e205]:
    - img "QKart-icon" [ref=e207]
    - paragraph [ref=e208]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e209]:
      - paragraph [ref=e210] [cursor=pointer]:
        - link "Privacy policy" [ref=e211]:
          - /url: privacy-policy
      - paragraph [ref=e212] [cursor=pointer]:
        - link "About us" [ref=e213]:
          - /url: aboutus
      - paragraph [ref=e214] [cursor=pointer]: Contact us
      - paragraph [ref=e215] [cursor=pointer]:
        - link "Terms of Service" [ref=e216]:
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
      |                                                ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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