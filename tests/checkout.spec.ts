<<<<<<< HEAD
import  {test,expect} from "../src/custom_fixture/fixture";
import login from "../src/testdata/login.json";
import checkoutData from "../src/testdata/checkout.json";

test("TC005_Verify Cart is cleared After Successfully Order Placement",async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.checkout.placeOrder();
    await appAction.checkout.verifyOrderSuccess();
    await appAction.checkout.verifyCartIsEmpty();
});

test("TC006_Verify Address is deleted successfully",async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.checkout.deleteAddress();
    await appAction.checkout.verifyAddressDeleted();
});

test("TC007_Verify Multiple Address added successfully",async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.checkout.verifyMultipleAddressAdded();
});

test("TC008_Verify Validation message for empty address",async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.checkout.verifyValidationMessageForEmptyAddress();
});




=======
import checkout from "../src/testdata/checkout.json";
import { test, expect } from "../src/custom_fixture/fixture";
import login from "../src/testdata/login.json";

//Test cases by Gona Vaishnavi
test('TC_01:Verify Adding a New Shipping Address', async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.addNewAddress(checkout.address);
    await appAction.checkout.verifyAddressAdded(checkout.address);
});

test('TC_02:Verify Selecting a Shipping Address', async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout(); 
    await appAction.checkout.selectAddress(checkout.address);
    await appAction.checkout.VerifyAddressSelected(checkout.address);
});

test('TC_03:Verify Successful Order Placement with Valid Address', async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
     await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.selectAddress(checkout.address);
    await appAction.checkout.placeOrder();
    await appAction.checkout.verifyOrderSuccess();
});

test('TC_04:Verify Place Order Without Selecting Shipping address', async ({ appAction }) => {
    await appAction.login.loginUser(login.LoginDetails);
     await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
    await appAction.cart.navigateToCheckout();
    await appAction.checkout.verifyPlaceOrderDisabled();
});
>>>>>>> 076acdd3ff4fd9dd6a03bdb0c65d2c24ece85d02
