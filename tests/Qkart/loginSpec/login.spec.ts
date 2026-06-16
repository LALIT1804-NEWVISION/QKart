import { test, expect } from "../../../src/custom_fixture/fixture";
import loginData from "../../../src/testdata/login.json";


test("TC_01 Verify that a user can log in with a valid username and password", async({appAction}) => 
    {
        // User Should login with valid credential and Validate the login successfully
        console.log("Logging in with valid credentials", loginData.LoginDetails);
        await appAction.login.loginUser(loginData.LoginDetails);
        
    }
);

test("TC_02 Verify login with an invalid username", async({appAction}) => 
    {
        // User Should login with invalid username and Validate the error message
        console.log("Attempting login with invalid username", loginData.incorrectLoginDetails);
        await appAction.login.loginWithInvalidUsername(loginData.incorrectLoginDetails);
        
    }
);

test("TC_03 Verify login with an invalid password", async({appAction}) => 
    {
        // User Should login with invalid password and Validate the error message
        console.log("Attempting login with invalid password", loginData.incorrectPassword);
        await appAction.login.loginWithInvalidPassword(loginData.incorrectPassword);
    }
);

test("TC_04 Verify login with a blank username", async ({appAction}) => {
    // User Should login with blank username and Validate the error message
    console.log("Attempting login with blank username", loginData.blankUsername);
    await appAction.login.loginWithBlankUsername(loginData.blankUsername);
}
);

test("TC_05 Verify login with a blank password", async ({appAction}) => {
    // User Should login with blank password and Validate the error message
    console.log('Attempting login with blank password', loginData.blankPassword);
    await appAction.login.loginWithBlankPassword(loginData.blankPassword);
}
);

test("TC_06 Verify logout functionality", async ({appAction}) => {
    // User Should login with valid credential and Validate the login successfully
    console.log("Logging in with valid credentials", loginData.LoginDetails);
    await appAction.login.logoutValidation(loginData.LoginDetails);
})

test("TC_07 Verify the login after refersh",async({appAction,page})=>{
    //Verify that the user can log in successfully with valid credentials and remains logged in after refreshing the page 
     await appAction.login.loginUser(loginData.LoginDetails);
     await page.reload();
     await appAction.login.validogoutLogo();

})

test("TC_08 Verify Product After Logout ",async({appAction})=>{
    //Verify that the user can log in successfully with valid credentials and remains logged in after refreshing the page
     await appAction.login.verifyProductAfterLogout(loginData.AddtoCart.username,loginData.AddtoCart.password);
})

test("TC_09 Verify login with leading spaces in username and password",async ({appAction})=>{
    console.log("Logging in with leading spaces in username and password", loginData.SpaceCredentials);
    await appAction.login.loginSpaceUser(loginData.SpaceCredentials)
})

