import {Page, expect} from "@playwright/test";
import {loginPages} from "../../pages/loginPage/loginPage";
import loginData from "../../testdata/login.json";


type LoginDetails = 
{
    Username : string,
    Password : string;
    
}
export class loginAction
{
    private readonly loginPage : loginPages;

    constructor(page: Page)
    {
        this.loginPage = new loginPages(page);
    }

    async loginUser( loginData: LoginDetails)
    {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
        //verify Login Page Title
        await expect(this.loginPage.title).toBeVisible();
        // Provide Valid login Credential
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        await this.loginPage.button.click();

        // verify user should login successfully
       // await expect(this.loginPage.loginValidation).toBeVisible();
        // verify user credential should be correct
        //await expect(this.loginPage.userCredentialValidation).toBeVisible();
    }
}