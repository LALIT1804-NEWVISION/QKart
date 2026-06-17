import { test, expect } from "../../../src/custom_fixture/fixture";
import login from "../../../src/testdata/login.json";
import checkout from "../../../src/testdata/checkout.json";

// Test cases by Gona Vaishnavi

test("TC_01: Verify Adding a New Shipping Address", async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.addNewAddress(checkout.address1);
    await appAction.checkout.verifyAddressAdded(checkout.address1);
});

test("TC_02: Verify Selecting a Shipping Address", async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.selectAddress(checkout.address1);
    await appAction.checkout.VerifyAddressSelected(checkout.address1);
});

test("TC_03: Verify Successful Order Placement with Valid Address", async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.selectAddress(checkout.address1);
    await appAction.checkout.placeOrder();
    await appAction.checkout.verifyOrderSuccess();
});

test("TC_04: Verify Place Order Without Selecting Shipping Address", async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.verifyPlaceOrderDisabled();
});

//Test cases by Goury Vishwakarma

test("TC005_Verify Cart is cleared After Successfully Order Placement",async({appAction, page})=>{
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.addNewAddress(checkout.address1);
    await appAction.checkout.selectAddress(checkout.address1);
    await appAction.checkout.VerifyAddressSelected(checkout.address1);
    await appAction.checkout.placeOrder();
   // await appAction.checkout.verifyOrderSuccess(); 
   // await appAction.checkout.verifyRedirectedToThanksPage();
    await appAction.checkout.navigateBacktoCheckout();
    await appAction.checkout.verifyCartIsEmpty();
});



test("TC007_Verify Multiple Address added successfully",async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
     await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.addNewAddress(checkout.address1);
    await appAction.checkout.verifyAddressAdded(checkout.address1);
    await appAction.checkout.addNewAddress(checkout.address2);
    await appAction.checkout.verifyAddressAdded(checkout.address2);
    await appAction.checkout.verifyMultipleAddressAdded();
});

test("TC008_Verify Validation message for empty address",async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
     await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.addEmptyAddress();
    await appAction.checkout.verifyValidationMessageForEmptyAddress();
});

