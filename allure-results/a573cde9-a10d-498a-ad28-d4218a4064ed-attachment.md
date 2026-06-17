# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\cart\cart.spec.ts >> TC 045: Verify Checkout total calculation
- Location: tests\Qkart\cart\cart.spec.ts:42:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: null
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "QKart-icon" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "QKart-icon" [ref=e7]
      - generic [ref=e8]:
        - img "Dummy123" [ref=e10]
        - paragraph [ref=e11]: Dummy123
        - button "Logout" [ref=e12] [cursor=pointer]: Logout
    - generic [ref=e13]:
      - generic [ref=e15]:
        - heading "Shipping" [level=4] [ref=e16]
        - paragraph [ref=e17]: Manage all the shipping addresses you want.This way you won 't have to enter the shipping address manually with every order.Select the address you want to get your order delivered.
        - separator [ref=e18]
        - paragraph [ref=e20]: No addresses found for this account.Please add one to proceed
        - button "Add new address" [ref=e21] [cursor=pointer]: Add new address
        - heading "Payment" [level=4] [ref=e22]
        - paragraph [ref=e23]: Payment Method
        - separator [ref=e24]
        - generic [ref=e25]:
          - paragraph [ref=e26]: Wallet
          - paragraph [ref=e27]: Pay $ 0 of available $ 30
        - button "PLACE ORDER" [disabled]:
          - generic:
            - img
          - text: PLACE ORDER
      - generic [ref=e29]:
        - img [ref=e30]
        - generic [ref=e32]: Cart is empty. Add more items to the cart to checkout.
    - generic [ref=e33]:
      - img "QKart-icon" [ref=e35]
      - paragraph [ref=e36]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
      - generic [ref=e37]:
        - paragraph [ref=e38] [cursor=pointer]:
          - link "Privacy policy" [ref=e39]:
            - /url: privacy-policy
        - paragraph [ref=e40] [cursor=pointer]:
          - link "About us" [ref=e41]:
            - /url: aboutus
        - paragraph [ref=e42] [cursor=pointer]: Contact us
        - paragraph [ref=e43] [cursor=pointer]:
          - link "Terms of Service" [ref=e44]:
            - /url: terms-of-service
  - alert [ref=e49]:
    - generic [ref=e50]:
      - img [ref=e51]
      - text: Logged in successfully
```

# Test source

```ts
  1  | import loginData from "../../../src/testdata/login.json";
  2  | import { test, expect } from "../../../src/custom_fixture/fixture";
  3  | 
  4  | test.beforeEach(async ({ appAction }, testInfo) => {
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
  34 | test("TC 044: Decrease product quantity in Checkout", async ({ appAction }) => {
  35 |     await appAction.cart.addItemsToCart();
  36 |     await appAction.cart.IncreaseProductQuantity();
  37 |     await appAction.cart.verifyItemQuantity(0, 2);
  38 |     await appAction.cart.decreaseItemQuantity();
  39 |     await appAction.cart.verifyItemQuantity(0, 1);
  40 | });
  41 | 
  42 | test("TC 045: Verify Checkout total calculation", async ({ appAction }) => {
  43 |     await appAction.cart.addItemsToCart();
  44 |     await appAction.cart.page.waitForTimeout(500);
  45 |     await appAction.cart.addBadmintonItemToCart();
  46 |     await appAction.cart.page.waitForTimeout(500);
  47 | 
  48 |    await appAction.cart.navigateToCheckout();
  49 |     const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
  50 |     const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);
  51 | 
> 52 |     expect(shoesSubtotal).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  53 |     expect(badmintonSubtotal).toBeTruthy();
  54 |     // await appAction.cart.clickCartButton();
  55 |     
  56 |   
  57 | });
  58 | 
  59 | test("TC 046: Persist items after browser refresh", async ({ appAction }) => {
  60 |     await appAction.cart.addItemsToCart();
  61 |     await appAction.cart.addBadmintonItemToCart();
  62 |     await appAction.cart.clickCartButton();
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
  73 | test("TC 047: Prevent guest from adding products", async ({ appAction }) => {
  74 |     await appAction.cart.addItemsToCart();
  75 |     await appAction.cart.verifyLoginPromptMessage();
  76 | });
  77 | 
  78 | test("TC 048: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
  79 |     await appAction.cart.addItemsToCart();
  80 |     await appAction.cart.verifyItemQuantity(0, 1);
  81 |     await appAction.cart.decreaseItemQuantity(0);
  82 |     await appAction.cart.verifyItemQuantity(0, 0);
  83 | });
```