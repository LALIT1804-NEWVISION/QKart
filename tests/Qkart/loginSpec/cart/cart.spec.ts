import { test } from "../../../../src/custom_fixture/fixture"; 
import loginData from '../../../../src/testdata/login.json';
// test("Verify that a user can log in with a valid username and password", async({appAction}) => 
//     {
//         // User Should login with valid credential and Validate the login successfully
//         await appAction.login.loginUser(loginData.LoginDetails);
//     }
// );
// test("testcases 01: Verify cart details", async({appAction}) => 
//     {
//         // User Should login with valid credential and Validate the login successfully
//         await appAction.cart.addItemsToCart();
//     }



    
// )


// test("testcases 02: Verify cart details", async({appAction}) => 
//     {
    
//         await appAction.cart.addBadmintonItemToCart();
//          await appAction.cart.addSofaSetItemToCart();
//     }
// )


// test("testcases 03: Verify cart details", async({appAction}) => 
//     {
//    await appAction.cart.addItemsToCart();
//    await appAction.cart.addBadmintonItemToCart();
//     }
// )
// test("testcases 04: Verify cart details", async({appAction}) => 
//     {
//    await appAction.cart.addItemsToCart();
//    await appAction.cart.addBadmintonItemToCart();
//     }
// )

test("testcases 05: Verify cart details", async({appAction}) => 
    {
    await appAction.login.loginUser(loginData.LoginDetails);
  await appAction.cart.addItemsToCart();
 

  await appAction.cart.increaseItemQuantity();
    await appAction.cart.decreaseItemQuantity();
    }
)
