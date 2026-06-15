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




