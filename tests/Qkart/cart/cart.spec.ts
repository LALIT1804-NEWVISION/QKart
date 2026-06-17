import loginData from "../../../src/testdata/login.json";
import { test, expect } from "../../../src/custom_fixture/fixture";

test.beforeEach(async ({ appAction }, testInfo) => {
    if (testInfo.title === "TC 047: Prevent guest from adding products") {
        return;
    }

    await appAction.login.loginUser(loginData.LoginDetails);
});
test("TC 040: Add product to Checkout ", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
});

test("TC 041: Add multiple products", async ({ appAction }) => {
    await appAction.cart.addBadmintonItemToCart();
    await appAction.cart.addSofaSetItemToCart();
});

test("TC 042: Increase product quantity", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.IncreaseProductQuantity();
    await appAction.cart.verifyItemQuantity(0, 2);
});

test("TC 043: Add Same Item again", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.page.waitForLoadState("networkidle");
    await appAction.cart.addItemsToCart();
    await appAction.cart.verifyItemAlreadyInCartMessage();
});

test("TC 044: Decrease product quantity in Checkout", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.IncreaseProductQuantity();
    await appAction.cart.verifyItemQuantity(0, 2);
    await appAction.cart.decreaseItemQuantity();
    await appAction.cart.verifyItemQuantity(0, 1);
});

test("TC 045: Verify Checkout total calculation", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.page.waitForTimeout(500);
    await appAction.cart.addBadmintonItemToCart();
    await appAction.cart.page.waitForTimeout(500);

  // await appAction.cart.navigateToCheckout();
    const shoesSubtotal = await appAction.cart.getItemSubtotal(0);
    const badmintonSubtotal = await appAction.cart.getItemSubtotal(1);

    expect(shoesSubtotal).toBeTruthy();
    expect(badmintonSubtotal).toBeTruthy();
     await appAction.cart.clickCartButton();
    
  
});

test("TC 046: Persist items after browser refresh", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.addBadmintonItemToCart();
    await appAction.cart.clickCartButton();

    const itemsBeforeRefresh = await appAction.cart.getCartItemsCount();

    await appAction.cart.refreshBrowserAndVerifyCartPersists();

    const itemsAfterRefresh = await appAction.cart.getCartItemsCount();

    expect(itemsAfterRefresh).toBe(itemsBeforeRefresh);
});

test("TC 047: Prevent guest from adding products", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.verifyLoginPromptMessage();
});

test("TC 048: Decrease quantity from 1 in Checkout", async ({ appAction }) => {
    await appAction.cart.addItemsToCart();
    await appAction.cart.verifyItemQuantity(0, 1);
    await appAction.cart.decreaseItemQuantity(0);
    await appAction.cart.verifyItemQuantity(0, 0);
});