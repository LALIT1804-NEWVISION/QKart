import {Page, expect} from "@playwright/test";
import {loginPages} from "../../pages/loginPage/loginPage";
 
type LoginDetails =
{
    Username : string,
    Password : string;  
}
 
type incorrectLoginDetails =
{
    Username : string,
    Password : string;  
}
 
type incorrectPassword =
{
    Username : string,
    Password : string,
}
 
type blankUsername =
{
    Username : string,
    Password : string,
}
 
type blankPassword =
{
    Username : string,
    Password : string,
}
export class loginAction
{
    private readonly loginPage : loginPages;
 
    constructor(page: Page)
    {
        this.loginPage = new loginPages(page);
    }
 
    async loginUser(loginData : LoginDetails)
    {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
        //verify Login Page Title
        await expect(this.loginPage.title).toBeVisible();
        // Provide Valid login Credential
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        // Verify Login Button should be enabled after providing valid credential
        await expect(this.loginPage.button).toBeEnabled();
        await this.loginPage.button.click();
 
        // verify user should login successfully
        await expect(this.loginPage.loginSuccessMessage).toHaveText('Logged in successfully');
       
        // verify user credential should be correct
        await expect(this.loginPage.userCredentialValidation).toBeVisible();  
 
    }
 
    async loginWithInvalidUsername(loginData:incorrectLoginDetails)
        {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
 
        // Provide Invalid login Credential
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        await this.loginPage.button.click();
 
        // verify user should not login successfully and verify error message
        await expect(this.loginPage.errorMessageIncorrectUsername).toBeVisible();
         
    }
 
    async loginWithInvalidPassword(loginData:incorrectPassword)
        {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
 
        // Provide Invalid login Credential
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        await this.loginPage.button.click();
 
        // verify user should not login successfully and verify error message
        await expect(this.loginPage.errorMessageIncorrectPassword).toBeVisible();
         
    }
 
 
    async loginWithBlankUsername(loginData:blankUsername)
        {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
 
        // Provide blank Username
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        await this.loginPage.button.click();
 
        // verify blank username error message should be visible
        await expect(this.loginPage.errorMessageBlankUsername).toBeVisible();
           
    }
   
    async loginWithBlankPassword(loginData:blankPassword)
        {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
 
        // Provide blank Password
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        await this.loginPage.button.click();
 
        // verify blank password error message should be visible
        await expect(this.loginPage.errorMessageBlankPassword).toBeVisible();
           
    }  
 
    async logoutValidation(loginData: LoginDetails)
    {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
        //verify Login Page Title
        await expect(this.loginPage.title).toBeVisible();
        // Provide Valid login Credential
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        // Verify Login Button should be enabled
        await expect(this.loginPage.button).toBeEnabled();
        await this.loginPage.button.click();
 
        // verify user should login successfully
        await expect(this.loginPage.loginSuccessMessage).toBeVisible();
        // verify user credential should be correct
        await expect(this.loginPage.userCredentialValidation).toBeVisible();
 
        // Verify Logout Button should be enabled
        await expect(this.loginPage.logoutButton).toBeEnabled();
 
        //click on logout button
        await this.loginPage.logoutButton.click();
 
        // verify user should logout successfully verify login button
        await expect(this.loginPage.loginLink).toBeVisible();
 
    }  
    //validLogout
       async validogoutLogo(){
           await expect(this.loginPage.logoutButton).toBeVisible();
       }
 
    //Add to cart
    async verifyProductAfterLogout(username :string,password:string){
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
        //verify Login Page Title
        await expect(this.loginPage.title).toBeVisible();
        // Provide Valid login Credential
        await this.loginPage.username.fill(username);
        await this.loginPage.passwrod.fill(password);
        // Verify Login Button should be enabled after providing valid credential
        await expect(this.loginPage.button).toBeEnabled();
        await this.loginPage.button.click();
        await this.loginPage.firstProduct.first().click()
        await expect(this.loginPage.Ordertotal).toBeVisible()
        await this.loginPage.logoutButton.click()
        await this.loginPage.loginLink.click()
        await this.loginPage.username.fill(username);
        await this.loginPage.passwrod.fill(password);
         await this.loginPage.button.click();
        await expect(this.loginPage.Ordertotal).toBeVisible()
    }  
    //spacevalid
       async loginSpaceUser(loginData: LoginDetails)
    {
        // click the login link
        await this.loginPage.loginLink.click();
        await this.loginPage.page.waitForLoadState('networkidle');
        //verify Login Page Title
        await expect(this.loginPage.title).toBeVisible();
        // Provide Valid login Credential
        await this.loginPage.username.fill(loginData.Username);
        await this.loginPage.passwrod.fill(loginData.Password);
        // Verify Login Button should be enabled after providing valid credential
        await expect(this.loginPage.button).toBeEnabled();
        await this.loginPage.button.click();
 
        // verify user should login successfully
        await expect(this.loginPage.loginSuccessMessage).toBeVisible();
     
 
    }
 
}