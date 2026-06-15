import { test } from "../../../src/custom_fixture/fixture";
import loginData from "../../../src/testdata/login.json";

test("Verify that a user can log in with a valid username and password", async({appAction}) => 
    {
        // User Should login with valid credential and Validate the login successfully
        await appAction.login.loginUser(loginData.LoginDetails);
    }
)


