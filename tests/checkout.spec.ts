import checkout from "../src/testdata/checkout.json";
import {test ,expect} from "../src/custom_fixture/fixture";
import login from "../src/testdata/login.json";

//Test cases by Gona Vaishnavi
test('TC_01:Verify Adding a New Shipping Address', async({appAction})=>{
 await appAction.login.loginUser(login.LoginDetails);
await appAction.checkout.addNewAddress(checkout.address);
await appAction.checkout.verifyAddressAdded(checkout.address);
});

test('TC_02:Verify Selecting a Shipping Address', async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails);
    await appAction.checkout.selectAddress(checkout.address);
    await appAction.checkout.VerifyAddressSelected(checkout.address);
});

test('TC_03:Verify Successful Order Placement with Valid Address', async({appAction})=>{
    await appAction.login.loginUser(login.LoginDetails); 
     await appAction.checkout.selectAddress(checkout.address);
     await appAction.checkout.placeOrder();
     await appAction.checkout.verifyOrderSuccess();
})

test('TC_04:Verify Place Order Without Selecting Shipping address',async({appAction})=>{
     await appAction.login.loginUser(login.LoginDetails); 
     await appAction.checkout.verifyPlaceOrderDisabled();
})