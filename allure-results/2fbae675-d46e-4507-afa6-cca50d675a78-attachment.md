# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\cart\cart.spec.ts >> TC 042: Increase product quantity
- Location: tests\Qkart\cart\cart.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - link "QKart-icon" [ref=e7] [cursor=pointer]:
      - /url: /
      - img "QKart-icon" [ref=e8]
    - button "Back to explore" [ref=e9] [cursor=pointer]:
      - img [ref=e11]
      - text: Back to explore
  - generic [ref=e14]:
    - heading "Login" [level=2] [ref=e15]
    - generic "Username" [ref=e16]:
      - generic: Username
      - generic [ref=e17]:
        - textbox "Username" [ref=e18]:
          - /placeholder: Enter Username
          - text: Dummy123
        - group
    - generic [ref=e19]:
      - generic: Password
      - generic [ref=e20]:
        - textbox "Password" [active] [ref=e21]:
          - /placeholder: Enter a password
          - text: Dummy@123
        - group
    - button "Login to QKart" [ref=e22] [cursor=pointer]: Login to QKart
    - paragraph [ref=e23]:
      - text: Don't have an account?
      - link "Register now" [ref=e24] [cursor=pointer]:
        - /url: /register
  - generic [ref=e25]:
    - img "QKart-icon" [ref=e27]
    - paragraph [ref=e28]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e29]:
      - paragraph [ref=e30] [cursor=pointer]:
        - link "Privacy policy" [ref=e31]:
          - /url: privacy-policy
      - paragraph [ref=e32] [cursor=pointer]:
        - link "About us" [ref=e33]:
          - /url: aboutus
      - paragraph [ref=e34] [cursor=pointer]: Contact us
      - paragraph [ref=e35] [cursor=pointer]:
        - link "Terms of Service" [ref=e36]:
          - /url: terms-of-service
```

# Test source

```ts
  1  | import loginData from "../../../src/testdata/login.json";
  2  | import { test, expect } from "../../../src/custom_fixture/fixture";
  3  | 
> 4  | test.beforeEach(async ({ appAction }, testInfo) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  5  |     if (testInfo.title === "TC 048: Prevent guest from adding products") {
  6  |         return;
  7  |     }
  8  |      await appAction.login.loginUser(loginData.LoginDetails);
  9  | });
  10 | 
  11 | test("TC 040: Add product to Checkout ", async ({ appAction }) => {
  12 |     await appAction.cart.addItemsToCart();
  13 |     await appAction.cart.clickCartButton();
  14 | });
  15 | 
  16 | test("TC 041: Add multiple products", async ({ appAction }) => {
  17 |     await appAction.cart.addBadmintonItemToCart();
  18 |     await appAction.cart.addSofaSetItemToCart();
  19 | });
  20 | 
  21 | test("TC 042: Increase product quantity", async ({ appAction }) => {
  22 |     await appAction.cart.addItemsToCart();
  23 |     await appAction.cart.IncreaseProductQuantity();
  24 |     await appAction.cart.verifyItemQuantity(0, 2);
  25 | });
  26 | 
  27 | test("TC 043: Add Same Item again", async ({ appAction }) => {
  28 |     await appAction.cart.addItemsToCart();
  29 |     await appAction.cart.page.waitForLoadState("networkidle");
  30 |     await appAction.cart.addItemsToCart();
  31 |     await appAction.cart.verifyItemAlreadyInCartMessage();
  32 | });
  33 | 
  34 | test("TC 045: Decrease product quantity in Checkout", async ({ appAction }) => {
  35 |     await appAction.cart.addItemsToCart();
  36 |     await appAction.cart.IncreaseProductQuantity();
  37 |     await appAction.cart.verifyItemQuantity(0, 2);
  38 |     await appAction.cart.decreaseItemQuantity();
  39 |     await appAction.cart.verifyItemQuantity(0, 1);
  40 | });
  41 | 
  42 | test("TC 046: Verify Checkout total calculation", async ({ appAction }) => {
  43 |     await appAction.cart.addItemsToCart();
  44 |     await appAction.cart.page.waitForTimeout(500);
  45 |     await appAction.cart.addBadmintonItemToCart();
  46 |     await appAction.cart.page.waitForTimeout(500);
  47 | 
  48 |     // Verify subtotals are visible in the cart sidebar before clicking checkout
  49 |     const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
  50 |     const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);
  51 | 
  52 |     expect(shoesSubtotal).toBeTruthy();
  53 |     expect(badmintonSubtotal).toBeTruthy();
  54 | 
  55 |     // Now click checkout button to navigate to checkout page
  56 |     await appAction.cart.clickCartButton();
  57 | });
  58 | 
  59 | test("TC 047: Persist items after browser refresh", async ({ appAction }) => {
  60 |     await appAction.cart.addItemsToCart();
  61 |     await appAction.cart.addBadmintonItemToCart();
  62 |     await appAction.cart.navigateToCheckout();
  63 | 
  64 |     const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();
  65 | 
  66 |     await appAction.cart.refreshBrowserAndVerifyCartPersists();
  67 | 
  68 |     const itemsAfterRefresh = await appAction.cart.getCartItemsCount();
  69 | 
  70 |     expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
  71 | });
  72 | 
  73 | test("TC 048: Prevent guest from adding products", async ({ appAction }) => {
  74 |     await appAction.cart.addItemsToCart();
  75 |     await appAction.cart.verifyLoginPromptMessage();
  76 | });
  77 | 
  78 | test("TC 049: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
  79 |     await appAction.cart.addItemsToCart();
  80 |     await appAction.cart.verifyItemQuantity(0, 1);
  81 |     await appAction.cart.decreaseItemQuantity(0);
  82 |     await appAction.cart.verifyItemQuantity(0, 0);
  83 | });
```