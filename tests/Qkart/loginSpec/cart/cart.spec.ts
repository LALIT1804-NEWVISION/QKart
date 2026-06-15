import { test, expect } from "../../../../src/custom_fixture/fixture";
import loginData from '../../../../src/testdata/login.json';


test("testcases 01: Add product to Checkout ", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
});

test("testcases 02: Add multiple products", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);
    await appAction.cart.addBadmintonItemToCart();
    await appAction.cart.addSofaSetItemToCart();
});

test("testcases 03:Increase product quantity", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.IncreaseProductQuantity();
    await appAction.cart.verifyItemQuantity(0, 2);
});

test("testcases 04: Add Same Item again", async ({ appAction, page }) => {
    await appAction.login.loginUser(loginData.LoginDetails);

    await appAction.cart.addItemsToCart();

    await page.waitForLoadState('networkidle');

    await appAction.cart.addItemsToCart();

    await appAction.cart.verifyItemAlreadyInCartMessage();
});

test("testcases 05: Decrease product quantity in Checkout", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.IncreaseProductQuantity();

    await appAction.cart.verifyItemQuantity(0, 2);
    await appAction.cart.decreaseItemQuantity();
    await appAction.cart.verifyItemQuantity(0, 1);
});

test("testcases 06: Verify Checkout total calculation", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);

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
    await appAction.login.loginUser(loginData.LoginDetails);

    await appAction.cart.addItemsToCart();
    await appAction.cart.addBadmintonItemToCart();

    await appAction.cart.navigateToCheckout();

    const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();

    await appAction.cart.refreshBrowserAndVerifyCartPersists();

    const itemsAfterRefresh = await appAction.cart.getCartItemsCount();

    expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
});

test("testcases 08: Prevent guest from adding products", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();

    await appAction.cart.verifyLoginPromptMessage();
});

test("testcases 09: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);

    await appAction.cart.addItemsToCart();


    await appAction.cart.verifyItemQuantity(0, 1);

    await appAction.cart.decreaseItemQuantity(0);

    await appAction.cart.verifyItemQuantity(0, 0);
});

test("testcases 10: Empty Checkout UI state", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);
    await appAction.cart.verifyEmptyCartMessage();

});