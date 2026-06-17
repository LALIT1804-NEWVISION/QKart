import { test } from "../../../src/custom_fixture/fixture";
import loginData from "../../../src/testdata/login.json";
 
test.describe("QKart Footer Links Validation", () => {
 
    test("TC_001 Verify successful login and redirection to home page", async ({ appAction }) => {
        await test.step("Login with valid credentials", async () => {
            await appAction.login.loginUser(loginData.LoginDetails);
        });
       
    });
 
    test("TC_002 Verify QKart logo is visible after login", async ({ appAction }) => {
        await appAction.login.loginUser(loginData.LoginDetails);
        await test.step("Verify QKart Logo Visibility", async () => {
            await appAction.footer.verifyQKartLogoVisible();
        });
    });
 
    test("TC_003 Verify that the Privacy Policy link displayed in the footer section of the Home Page opens in a new browser tab and navigates successfully",async ({ appAction }) => {
            await appAction.login.loginUser(loginData.LoginDetails);
            await test.step("Click Privacy Policy footer link and verify new tab navigation", async () => {
                await appAction.footer.verifyPrivacyPolicyFooterLink();
            });
        });
 
    test("TC_004 Verify that the About Us link displayed in the footer section of the Home Page opens in a new browser tab and navigates successfully",async ({ appAction }) => {
            await appAction.login.loginUser(loginData.LoginDetails);
            await test.step("Click About Us footer link and verify new tab navigation", async () => {
                await appAction.footer.verifyAboutUsFooterLink();
            });
        });
 
    test("TC_005 Verify that the Contact Us link displayed in the footer section of the Home Page opens the Contact Us popup successfully",async ({ appAction }) => {
            await appAction.login.loginUser(loginData.LoginDetails);
            await test.step("Click Contact Us footer link and verify Contact Us popup elements", async () => {
                await appAction.footer.verifyContactUsFooterLink();
            });
        });
 
    test("TC_006 Verify that the Terms of Service link displayed in the footer section of the Home Page opens in a new browser tab and navigates successfully",async ({ appAction }) => {
            await appAction.login.loginUser(loginData.LoginDetails);
            await test.step("Click Terms of Service footer link and verify new tab navigation", async () => {
                await appAction.footer.verifyTermsOfServiceFooterLink();
            });
        });
});