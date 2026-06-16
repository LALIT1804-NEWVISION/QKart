# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\cart\cart.spec.ts >> testcases 08: Prevent guest from adding products
- Location: tests\Qkart\loginSpec\cart\cart.spec.ts:69:9

# Error details

```
Error: Playwright Test did not expect test.use() to be called here.
Most common reasons include:
- You are calling test.use() in a configuration file.
- You are calling test.use() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
```

# Test source

```ts
  1  | import { test, expect } from "../../../../src/custom_fixture/fixture";
  2  | import { test as baseTest } from "@playwright/test";
  3  | 
  4  | test("testcases 01: Add product to Checkout ", async ({ appAction }) => {
  5  |     await appAction.cart.addItemsToCart();
  6  |     await appAction.cart.clickCartButton();
  7  | });
  8  | 
  9  | test("testcases 02: Add multiple products", async ({ appAction }) => {
  10 |     await appAction.cart.addBadmintonItemToCart();
  11 |     await appAction.cart.addSofaSetItemToCart();
  12 | });
  13 | 
  14 | test("testcases 03:Increase product quantity", async ({ appAction }) => {
  15 |     await appAction.cart.addItemsToCart();
  16 |     await appAction.cart.IncreaseProductQuantity();
  17 |     await appAction.cart.verifyItemQuantity(0, 2);
  18 | });
  19 | 
  20 | test("testcases 04: Add Same Item again", async ({ appAction, page }) => {
  21 |     await appAction.cart.addItemsToCart();
  22 | 
  23 |     await page.waitForLoadState('networkidle');
  24 | 
  25 |     await appAction.cart.addItemsToCart();
  26 | 
  27 |     await appAction.cart.verifyItemAlreadyInCartMessage();
  28 | });
  29 | 
  30 | test("testcases 05: Decrease product quantity in Checkout", async ({ appAction }) => {
  31 |     await appAction.cart.addItemsToCart();
  32 |     await appAction.cart.IncreaseProductQuantity();
  33 | 
  34 |     await appAction.cart.verifyItemQuantity(0, 2);
  35 |     await appAction.cart.decreaseItemQuantity();
  36 |     await appAction.cart.verifyItemQuantity(0, 1);
  37 | });
  38 | 
  39 | test("testcases 06: Verify Checkout total calculation", async ({ appAction }) => {
  40 |     //  await appAction.cart.addItemsToCart();
  41 |     await appAction.cart.addItemsToCart();
  42 |     await appAction.cart.addBadmintonItemToCart();
  43 | 
  44 |     await appAction.cart.navigateToCheckout();
  45 | 
  46 |     const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
  47 |     const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);
  48 | 
  49 |     expect(shoesSubtotal).toBeTruthy();
  50 |     expect(badmintonSubtotal).toBeTruthy();
  51 | });
  52 | 
  53 | test("testcases 07: Persist items after browser refresh", async ({ appAction }) => {
  54 |     await appAction.cart.addItemsToCart();
  55 |     await appAction.cart.addBadmintonItemToCart();
  56 | 
  57 |     await appAction.cart.navigateToCheckout();
  58 | 
  59 |     const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();
  60 | 
  61 |     await appAction.cart.refreshBrowserAndVerifyCartPersists();
  62 | 
  63 |     const itemsAfterRefresh = await appAction.cart.getCartItemsCount();
  64 | 
  65 |     expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
  66 | });
  67 | 
  68 | // Test 08: Guest user - bypasses authentication
  69 | baseTest("testcases 08: Prevent guest from adding products", async ({ page }) => {
> 70 |       test.use({ storageState: undefined });
     |            ^ Error: Playwright Test did not expect test.use() to be called here.
  71 |     await page.goto("https://crio-qkart-frontend-qa.vercel.app");
  72 |     await page.locator('//p[normalize-space()="Roadster Mens Running Shoes"]/../following-sibling::div//button[.="Add to cart"]').click();
  73 |     await expect(page.locator('//div[contains(text(),"Login to add")]')).toBeVisible();
  74 | });
  75 | 
  76 | test("testcases 09: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
  77 |     await appAction.cart.addItemsToCart();
  78 | 
  79 |     await appAction.cart.verifyItemQuantity(0, 1);
  80 | 
  81 |     await appAction.cart.decreaseItemQuantity(0);
  82 | 
  83 |     await appAction.cart.verifyItemQuantity(0, 0);
  84 | });
  85 | 
  86 | // Test 10: Empty cart - bypasses authentication
  87 | baseTest("testcases 10: Empty Checkout UI state", async ({ page }) => {
  88 | 
  89 |     await expect(page.getByText('Cart is empty. Add more items to the cart to checkout.')).toBeVisible();
  90 | });
  91 |  
```