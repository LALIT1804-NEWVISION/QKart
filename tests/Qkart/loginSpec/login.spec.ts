import { test, expect } from "../../../src/custom_fixture/fixture";
import loginData from "../../../src/testdata/login.json";

//test.use({ storageState: { cookies: [], origins: [] } });
test("Login_01 Verify that a user can log in with a valid username and password", async({appAction}) => 
    {
        
        console.log("Logging in with valid credentials", loginData.LoginDetails);
        await appAction.login.loginUser(loginData.LoginDetails);
        
    }
);

test("Login_02 Verify login with an invalid username", async({appAction}) => 
    {
        
        console.log("Attempting login with invalid username", loginData.incorrectLoginDetails);
        await appAction.login.loginWithInvalidUsername(loginData.incorrectLoginDetails);
        
    }
);

test("Login_03 Verify login with an invalid password", async({appAction}) => 
    {
        
        console.log("Attempting login with invalid password", loginData.incorrectPassword);
        await appAction.login.loginWithInvalidPassword(loginData.incorrectPassword);
    }
);

test("Login_04 Verify login with a blank username", async ({appAction}) => {
    
    console.log("Attempting login with blank username", loginData.blankUsername);
    await appAction.login.loginWithBlankUsername(loginData.blankUsername);
}
);

test("Login_05 Verify login with a blank password", async ({appAction}) => {
    
    console.log('Attempting login with blank password', loginData.blankPassword);
    await appAction.login.loginWithBlankPassword(loginData.blankPassword);
}
);

test("Login_06 Verify logout functionality", async ({appAction}) => {
    
    console.log("Logging in with valid credentials", loginData.LoginDetails);
    await appAction.login.logoutValidation(loginData.LoginDetails);
})

test("Login_07 Verify the login after refersh",async({appAction,page})=>{
    // Verify that the user can log in successfully with valid credentials
    // and remains logged in after refreshing the page 
     await appAction.login.loginUser(loginData.LoginDetails);
     await page.reload();
     await appAction.login.validogoutLogo();

})

test("Login_08 Verify Product After Logout ",async({appAction})=>{
    // Verify that the user can log in successfully with valid 
    // credentials and remains logged in after refreshing the page
     await appAction.login.verifyProductAfterLogout(loginData.AddtoCart.username,loginData.AddtoCart.password);
})

test("Login_09 Verify login with leading spaces in username and password",async ({appAction})=>{
    console.log("Logging in with leading spaces in username and password", loginData.SpaceCredentials);
    await appAction.login.loginSpaceUser(loginData.SpaceCredentials)
})
