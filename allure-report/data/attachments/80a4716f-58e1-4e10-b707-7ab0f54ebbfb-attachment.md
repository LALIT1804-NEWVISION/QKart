# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 06: Verify Checkout total calculation
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:54:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: null
```

# Page snapshot

```yaml
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
        - paragraph [ref=e27]: Pay $ 780 of available $ 1645
      - button "PLACE ORDER" [disabled]:
        - generic:
          - img
        - text: PLACE ORDER
    - generic [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e31]:
          - img "Roadster Mens Running Shoes" [ref=e33]
          - generic [ref=e34]:
            - generic [ref=e35]: Roadster Mens Running Shoes
            - generic [ref=e36]:
              - generic [ref=e37]: "Qty: 1"
              - generic [ref=e38]: $30
        - generic [ref=e40]:
          - img "YONEX Smash Badminton Racquet" [ref=e42]
          - generic [ref=e43]:
            - generic [ref=e44]: YONEX Smash Badminton Racquet
            - generic [ref=e45]:
              - generic [ref=e46]: "Qty: 1"
              - generic [ref=e47]: $100
        - generic [ref=e49]:
          - img "Stylecon 9 Seater RHS Sofa Set" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]: Stylecon 9 Seater RHS Sofa Set
            - generic [ref=e54]:
              - generic [ref=e55]: "Qty: 1"
              - generic [ref=e56]: $650
        - generic [ref=e57]:
          - generic [ref=e58]: Order total
          - generic [ref=e59]: $780
      - generic [ref=e60]:
        - heading "Order Details" [level=2] [ref=e61]
        - generic [ref=e62]:
          - paragraph [ref=e63]: Products
          - paragraph [ref=e64]: "3"
        - generic [ref=e65]:
          - paragraph [ref=e66]: Subtotal
          - paragraph [ref=e67]: $780
        - generic [ref=e68]:
          - paragraph [ref=e69]: Shipping Charges
          - paragraph [ref=e70]: $0
        - generic [ref=e71]:
          - paragraph [ref=e72]: Total
          - paragraph [ref=e73]: $780
  - generic [ref=e74]:
    - img "QKart-icon" [ref=e76]
    - paragraph [ref=e77]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e78]:
      - paragraph [ref=e79] [cursor=pointer]:
        - link "Privacy policy" [ref=e80]:
          - /url: privacy-policy
      - paragraph [ref=e81] [cursor=pointer]:
        - link "About us" [ref=e82]:
          - /url: aboutus
      - paragraph [ref=e83] [cursor=pointer]: Contact us
      - paragraph [ref=e84] [cursor=pointer]:
        - link "Terms of Service" [ref=e85]:
          - /url: terms-of-service
```

# Test source

```ts
  1   | import { test, expect } from "../../../../src/custom_fixture/fixture";
  2   | import loginData from '../../../../src/testdata/login.json';
  3   | 
  4   | 
  5   | test("testcases 01: Add product to Checkout ", async ({ appAction }) => {
  6   |       await appAction.login.loginUser(loginData.LoginDetails);
  7   |     await appAction.cart.addItemsToCart();
  8   | });
  9   | 
  10  | test("testcases 02: Add multiple products", async ({ appAction }) => {
  11  |     await appAction.login.loginUser(loginData.LoginDetails);
  12  |     await appAction.cart.addBadmintonItemToCart();
  13  |     await appAction.cart.addSofaSetItemToCart();
  14  | });
  15  | 
  16  | test("testcases 03:Increase product quantity", async ({ appAction }) => {
  17  |       await appAction.login.loginUser(loginData.LoginDetails);
  18  |     await appAction.cart.addItemsToCart();
  19  |     await appAction.cart.addBadmintonItemToCart();
  20  | });
  21  | 
  22  | test("testcases 04: Add Same Item again", async ({ appAction, page }) => {
  23  |     await appAction.login.loginUser(loginData.LoginDetails);
  24  | 
  25  |     await appAction.cart.addItemsToCart();
  26  | 
  27  |     await page.waitForLoadState('networkidle');
  28  | 
  29  |     await appAction.cart.addItemsToCart();
  30  | 
  31  |     await appAction.cart.verifyItemAlreadyInCartMessage();
  32  | });
  33  | 
  34  | test("testcases 05: Decrease product quantity in Checkout", async ({ appAction }) => {
  35  |     await appAction.login.loginUser(loginData.LoginDetails);
  36  |     
  37  |     await appAction.cart.addItemsToCart();
  38  |     await appAction.cart.addItemsToCart();
  39  |     
  40  |     await appAction.cart.navigateToCheckout();
  41  |     
  42  |     await appAction.cart.verifyItemQuantity(0, 2);
  43  |     
  44  |     const subtotalBefore = await appAction.cart.getItemSubtotal(0);
  45  |     
  46  |     await appAction.cart.decreaseItemQuantity(0);
  47  |     
  48  |     await appAction.cart.verifyItemQuantity(0, 1);
  49  |     if (subtotalBefore) {
  50  |         await appAction.cart.verifyItemSubtotalDecreased(0, subtotalBefore);
  51  |     }
  52  | });
  53  | 
  54  | test("testcases 06: Verify Checkout total calculation", async ({ appAction }) => {
  55  |     await appAction.login.loginUser(loginData.LoginDetails);
  56  |     
  57  |     await appAction.cart.addItemsToCart();
  58  |     await appAction.cart.addItemsToCart();
  59  |     await appAction.cart.addBadmintonItemToCart();
  60  |     
  61  |     await appAction.cart.navigateToCheckout();
  62  |     
  63  |     const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
  64  |     const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);
  65  |     
> 66  |     expect(shoesSubtotal).toBeTruthy();
      |                           ^ Error: expect(received).toBeTruthy()
  67  |     expect(badmintonSubtotal).toBeTruthy();
  68  | });
  69  | 
  70  | test("testcases 07: Persist items after browser refresh", async ({ appAction }) => {
  71  |     await appAction.login.loginUser(loginData.LoginDetails);
  72  |     
  73  |     await appAction.cart.addItemsToCart();
  74  |     await appAction.cart.addBadmintonItemToCart();
  75  |     
  76  |     await appAction.cart.navigateToCheckout();
  77  |     
  78  |     const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();
  79  |     
  80  |     await appAction.cart.refreshBrowserAndVerifyCartPersists();
  81  |     
  82  |     const itemsAfterRefresh = await appAction.cart.getCartItemsCount();
  83  |     
  84  |     expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
  85  | });
  86  | 
  87  | test("testcases 08: Prevent guest from adding products", async ({ appAction }) => {
  88  |     await appAction.cart.addItemsToCart();
  89  |     
  90  |     await appAction.cart.verifyLoginPromptMessage();
  91  | });
  92  | 
  93  | test("testcases 10: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
  94  |     await appAction.login.loginUser(loginData.LoginDetails);
  95  |     
  96  |     await appAction.cart.addItemsToCart();
  97  |     
  98  |     await appAction.cart.navigateToCheckout();
  99  |     
  100 |     await appAction.cart.verifyItemQuantity(0, 1);
  101 |     
  102 |     await appAction.cart.decreaseItemQuantity(0);
  103 |     
  104 |     await appAction.cart.verifyEmptyCartMessage();
  105 | });
  106 | 
  107 | test("testcases 11: Empty Checkout UI state", async ({ appAction }) => {
  108 |     await appAction.login.loginUser(loginData.LoginDetails);
  109 |     
  110 |     await appAction.cart.navigateToCheckout();
  111 |     
  112 |     await appAction.cart.verifyEmptyCartMessage();
  113 |     
  114 |     await appAction.cart.clickContinueShoppingButton();
  115 | });
```