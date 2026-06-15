import { test } from "../../../src/custom_fixture/fixture";
import loginData from "../../../src/testdata/login.json";


test("TC_01 Verify that a user can log in with a valid username and password", async({appAction}) => 
    {
        // User Should login with valid credential and Validate the login successfully
        await appAction.login.loginUser(loginData.LoginDetails);
    }
);

test("TC_02 Verify login with an invalid username", async({appAction}) => 
    {
        // User Should login with invalid username and Validate the error message
        await appAction.login.loginWithInvalidUsername(loginData.incorrectLoginDetails);
    }
);

test("TC_03 Verify login with an invalid password", async({appAction}) => 
    {
        // User Should login with invalid password and Validate the error message
        await appAction.login.loginWithInvalidPassword(loginData.incorrectPassword);
    }
);

test("TC_04 Verify login with a blank username", async ({appAction}) => {
    // User Should login with blank username and Validate the error message
    await appAction.login.loginWithBlankUsername(loginData.blankUsername);
}
);

test("TC_05 Verify login with a blank password", async ({appAction}) => {
    // User Should login with blank password and Validate the error message
    await appAction.login.loginWithBlankPassword(loginData.blankPassword);
}
);

test("TC_06 Verify logout functionality", async ({appAction}) => {
    // User Should login with valid credential and Validate the login successfully
    await appAction.login.logoutValidation(loginData.LoginDetails);
})