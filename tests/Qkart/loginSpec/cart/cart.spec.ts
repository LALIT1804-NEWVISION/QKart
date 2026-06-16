import { CartAction } from "../../../../src/actions/cartAction/cartAction";
import { test, expect } from "../../../../src/custom_fixture/fixture";
import loginData from '../../../../src/testdata/login.json';
 
 
test("testcases 01: Add product to Checkout ", async ({ appAction }) => {
   
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
});
 
test("testcases 02: Add multiple products", async ({ appAction }) => {

    await appAction.cart.addBadmintonItemToCart();
    await appAction.cart.addSofaSetItemToCart();
});
 
test("testcases 03:Increase product quantity", async ({ appAction }) => {
   
    await appAction.cart.addItemsToCart();
    await appAction.cart.IncreaseProductQuantity();
    await appAction.cart.verifyItemQuantity(0, 2);
});
 
test("testcases 04: Add Same Item again", async ({ appAction, page }) => {

 
    await appAction.cart.addItemsToCart();
 
    await page.waitForLoadState('networkidle');
 
    await appAction.cart.addItemsToCart();
 
    await appAction.cart.verifyItemAlreadyInCartMessage();
});
 
test("testcases 05: Decrease product quantity in Checkout", async ({ appAction }) => {
 
    await appAction.cart.addItemsToCart();
    await appAction.cart.IncreaseProductQuantity();
 
    await appAction.cart.verifyItemQuantity(0, 2);
    await appAction.cart.decreaseItemQuantity();
    await appAction.cart.verifyItemQuantity(0, 1);
});
 
test("testcases 06: Verify Checkout total calculation", async ({ appAction }) => {
   
    //  await appAction.cart.addItemsToCart();
    await appAction.cart.addItemsToCart();
    await appAction.cart.addBadmintonItemToCart();
 
    await appAction.cart.navigateToCheckout();
 
    const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
    const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);
 
    expect(shoesSubtotal).toBeTruthy();
    expect(badmintonSubtotal).toBeTruthy();
});
 
test("testcases 07: Persist items after browser refresh", async ({ appAction }) => {
   
 
    await appAction.cart.addItemsToCart();
    await appAction.cart.addBadmintonItemToCart();
 
    await appAction.cart.navigateToCheckout();
 
    const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();
 
    await appAction.cart.refreshBrowserAndVerifyCartPersists();
 
    const itemsAfterRefresh = await appAction.cart.getCartItemsCount();
 
    expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
});
 
test('guest user test', async ({ browser }) => {

  // Fresh guest/incognito context
  const context = await browser.newContext({
    storageState: undefined,
  });

  const page = await context.newPage();

  // Create fresh action using guest page
  const cartAction = new CartAction(page);

  await page.goto('https://crio-qkart-frontend-qa.vercel.app');

  await cartAction.addItemsToCart();

  await cartAction.verifyLoginPromptMessage();

  await context.close();
});
test("testcases 09: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
  
 
    await appAction.cart.addItemsToCart();
 
 
    await appAction.cart.verifyItemQuantity(0, 1);
 
    await appAction.cart.decreaseItemQuantity(0);
 
    await appAction.cart.verifyItemQuantity(0, 0);
});
 
