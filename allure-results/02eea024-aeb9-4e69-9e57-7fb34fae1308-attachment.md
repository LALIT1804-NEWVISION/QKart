# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 06: Verify Checkout total calculation
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:47:5

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
          - paragraph [ref=e27]: Pay $ 0 of available $ 1420
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
      - text: Could not fetch cart details. Check that the backend is running, reachable and returns valid JSON.
```

# Test source

```ts
  1   | import { CartAction } from "../../../../src/actions/cartAction/cartAction";
  2   | import { test, expect } from "../../../../src/custom_fixture/fixture";
  3   | import loginData from '../../../../src/testdata/login.json';
  4   |  
  5   |  
  6   | test("testcases 01: Add product to Checkout ", async ({ appAction }) => {
  7   |    
  8   |     await appAction.cart.addItemsToCart();
  9   |     await appAction.cart.clickCartButton();
  10  | });
  11  |  
  12  | test("testcases 02: Add multiple products", async ({ appAction }) => {
  13  | 
  14  |     await appAction.cart.addBadmintonItemToCart();
  15  |     await appAction.cart.addSofaSetItemToCart();
  16  | });
  17  |  
  18  | test("testcases 03:Increase product quantity", async ({ appAction }) => {
  19  |    
  20  |     await appAction.cart.addItemsToCart();
  21  |     await appAction.cart.IncreaseProductQuantity();
  22  |     await appAction.cart.verifyItemQuantity(0, 2);
  23  | });
  24  |  
  25  | test("testcases 04: Add Same Item again", async ({ appAction, page }) => {
  26  | 
  27  |  
  28  |     await appAction.cart.addItemsToCart();
  29  |  
  30  |     await page.waitForLoadState('networkidle');
  31  |  
  32  |     await appAction.cart.addItemsToCart();
  33  |  
  34  |     await appAction.cart.verifyItemAlreadyInCartMessage();
  35  | });
  36  |  
  37  | test("testcases 05: Decrease product quantity in Checkout", async ({ appAction }) => {
  38  |  
  39  |     await appAction.cart.addItemsToCart();
  40  |     await appAction.cart.IncreaseProductQuantity();
  41  |  
  42  |     await appAction.cart.verifyItemQuantity(0, 2);
  43  |     await appAction.cart.decreaseItemQuantity();
  44  |     await appAction.cart.verifyItemQuantity(0, 1);
  45  | });
  46  |  
  47  | test("testcases 06: Verify Checkout total calculation", async ({ appAction }) => {
  48  |    
  49  |     //  await appAction.cart.addItemsToCart();
  50  |     await appAction.cart.addItemsToCart();
  51  |     await appAction.cart.addBadmintonItemToCart();
  52  |  
  53  |     await appAction.cart.navigateToCheckout();
  54  |  
  55  |     const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
  56  |     const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);
  57  |  
> 58  |     expect(shoesSubtotal).toBeTruthy();
      |                           ^ Error: expect(received).toBeTruthy()
  59  |     expect(badmintonSubtotal).toBeTruthy();
  60  | });
  61  |  
  62  | test("testcases 07: Persist items after browser refresh", async ({ appAction }) => {
  63  |    
  64  |  
  65  |     await appAction.cart.addItemsToCart();
  66  |     await appAction.cart.addBadmintonItemToCart();
  67  |  
  68  |     await appAction.cart.navigateToCheckout();
  69  |  
  70  |     const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();
  71  |  
  72  |     await appAction.cart.refreshBrowserAndVerifyCartPersists();
  73  |  
  74  |     const itemsAfterRefresh = await appAction.cart.getCartItemsCount();
  75  |  
  76  |     expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
  77  | });
  78  |  
  79  | test('guest user test', async ({ browser }) => {
  80  | 
  81  |   // Fresh guest/incognito context
  82  |   const context = await browser.newContext({
  83  |     storageState: undefined,
  84  |   });
  85  | 
  86  |   const page = await context.newPage();
  87  | 
  88  |   // Create fresh action using guest page
  89  |   const cartAction = new CartAction(page);
  90  | 
  91  |   await page.goto('https://crio-qkart-frontend-qa.vercel.app');
  92  | 
  93  |   await cartAction.addItemsToCart();
  94  | 
  95  |   await cartAction.verifyLoginPromptMessage();
  96  | 
  97  |   await context.close();
  98  | });
  99  | test("testcases 09: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
  100 |   
  101 |  
  102 |     await appAction.cart.addItemsToCart();
  103 |  
  104 |  
  105 |     await appAction.cart.verifyItemQuantity(0, 1);
  106 |  
  107 |     await appAction.cart.decreaseItemQuantity(0);
  108 |  
  109 |     await appAction.cart.verifyItemQuantity(0, 0);
  110 | });
  111 |  
  112 | test("testcases 10: Empty Checkout UI state", async ({ appAction }) => {
  113 | 
  114 |     await appAction.cart.verifyEmptyCartMessage();
  115 |  
  116 | });
```