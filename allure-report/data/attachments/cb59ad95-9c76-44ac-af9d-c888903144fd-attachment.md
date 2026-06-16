# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 05: Decrease product quantity in Checkout
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:34:6

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/checkout", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
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
            - button "Add to cart" [active] [ref=e54] [cursor=pointer]:
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
                - button [ref=e177] [cursor=pointer]:
                  - img [ref=e178]
                - generic [ref=e180]: "1"
                - button [ref=e181] [cursor=pointer]:
                  - img [ref=e182]
              - generic [ref=e184]: $30
        - generic [ref=e186]:
          - img "YONEX Smash Badminton Racquet" [ref=e188]
          - generic [ref=e189]:
            - generic [ref=e190]: YONEX Smash Badminton Racquet
            - generic [ref=e191]:
              - generic [ref=e192]:
                - button [ref=e193] [cursor=pointer]:
                  - img [ref=e194]
                - generic [ref=e196]: "1"
                - button [ref=e197] [cursor=pointer]:
                  - img [ref=e198]
              - generic [ref=e200]: $100
        - generic [ref=e201]:
          - generic [ref=e202]: Order total
          - generic [ref=e203]: $130
        - button "Checkout" [ref=e205] [cursor=pointer]:
          - img [ref=e207]
          - text: Checkout
    - navigation "pagination navigation" [ref=e210]:
      - list [ref=e211]:
        - listitem [ref=e212]:
          - button "Go to previous page" [disabled]:
            - img
        - listitem [ref=e213]:
          - button "page 1" [ref=e214] [cursor=pointer]: "1"
        - listitem [ref=e215]:
          - button "Go to page 2" [ref=e216] [cursor=pointer]: "2"
        - listitem [ref=e217]:
          - button "Go to next page" [ref=e218] [cursor=pointer]:
            - img [ref=e219]
    - generic [ref=e221]:
      - img "QKart-icon" [ref=e223]
      - paragraph [ref=e224]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
      - generic [ref=e225]:
        - paragraph [ref=e226] [cursor=pointer]:
          - link "Privacy policy" [ref=e227]:
            - /url: privacy-policy
        - paragraph [ref=e228] [cursor=pointer]:
          - link "About us" [ref=e229]:
            - /url: aboutus
        - paragraph [ref=e230] [cursor=pointer]: Contact us
        - paragraph [ref=e231] [cursor=pointer]:
          - link "Terms of Service" [ref=e232]:
            - /url: terms-of-service
  - alert [ref=e237]:
    - generic [ref=e238]:
      - img [ref=e239]
      - text: Logged in successfully
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
  17  |     }
  18  | 
  19  |     async addBadmintonItemToCart() {
  20  |         await expect(this.cartPage.BadmintonItem).toBeVisible();
  21  |         await this.cartPage.BadmintonItem.click();
  22  |     }
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
> 39  |         await this.page.goto('/checkout');
      |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  40  |         await this.page.waitForLoadState('networkidle');
  41  |     }
  42  | 
  43  |     async decreaseItemQuantity(itemIndex: number = 0) {
  44  |         const buttons = await this.cartPage.quantityDecreaseButton.all();
  45  |         if (buttons.length > itemIndex) {
  46  |             await buttons[itemIndex].click();
  47  |             await this.page.waitForLoadState('networkidle');
  48  |         }
  49  |     }
  50  | 
  51  |     async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
  52  |         const quantities = await this.cartPage.quantityDisplay.all();
  53  |         if (quantities.length > itemIndex) {
  54  |             await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
  55  |         }
  56  |     }
  57  | 
  58  |     async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
  59  |         const subtotals = await this.cartPage.itemSubtotal.all();
  60  |         if (subtotals.length > itemIndex) {
  61  |             await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
  62  |         }
  63  |     }
  64  | 
  65  |     async verifyCartTotal(expectedTotal: string) {
  66  |         await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
  67  |     }
  68  | 
  69  |     async refreshBrowserAndVerifyCartPersists() {
  70  |         await this.page.reload();
  71  |         await this.page.waitForLoadState('networkidle');
  72  |         await this.navigateToCheckout();
  73  |     }
  74  | 
  75  |     async verifyEmptyCartMessage() {
  76  |         await expect(this.cartPage.emptyCartMessage).toBeVisible();
  77  |     }
  78  | 
  79  |     async verifyLoginPromptMessage() {
  80  |         await expect(this.cartPage.loginPromptMessage).toBeVisible();
  81  |         await expect(this.cartPage.loginPromptMessage)
  82  |             .toHaveText('Login to add an item to the Cart');
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
  100 |     async verifyItemsCountPersistAfterRefresh() {
  101 |         const itemsBeforeRefresh = await this.getCartItemsCount();
  102 |         await this.refreshBrowserAndVerifyCartPersists();
  103 |         const itemsAfterRefresh = await this.getCartItemsCount();
  104 |         expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
  105 |     }
  106 | }
```