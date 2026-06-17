import {Page, Locator} from "@playwright/test";

export class loginPages
{
    readonly page: Page;
    readonly loginLink: Locator;
    readonly title: Locator;
    readonly username: Locator;
    readonly passwrod: Locator;
    readonly button: Locator;
    readonly loginSuccessMessage: Locator;
    readonly userCredentialValidation: Locator;
    readonly qkartLogo: Locator;

    // Invalid Credential Validation
    readonly errorMessageIncorrectUsername: Locator;
    readonly errorMessageIncorrectPassword: Locator;
    readonly errorMessageBlankUsername: Locator;
    readonly errorMessageBlankPassword: Locator;
    readonly logoutButton: Locator;

    //Add to cart
    readonly firstProduct:Locator;
    readonly Ordertotal:Locator



    constructor(page: Page)
    {
        this.page = page;
        this.loginLink = page.locator('//button[contains(text() , "Login")]');
        this.title = page.getByRole('heading', { name: 'Login' });
        this.username = page.locator('//input[contains(@placeholder,"Enter Username")]');
        this.passwrod = page.locator('//input[contains(@placeholder,"Enter a password")]');
        this.button = page.locator('//button[contains(text(), "Login to QKart")]')
        this.loginSuccessMessage = page.locator('//div[contains(text() , "Logged in successfully")]')
        this.userCredentialValidation = page.locator('//p[contains(text(), "Dummy123")]')
        this.qkartLogo = page.getByRole('img', { name: /qkart/i }).first();

        // Invalid Credential Validation
        this.errorMessageIncorrectUsername = page.locator('//div[contains(text() , "Username does not exist")]')
        this.errorMessageIncorrectPassword = page.locator('//div[contains(text() , "Password is incorrect")]')
        this.errorMessageBlankUsername = page.locator('//div[contains(text() , "Username is a required field")]')
        this.errorMessageBlankPassword = page.locator('//div[contains(text() , "Password is a required field")]')
        this.logoutButton = page.locator('//button[contains(text() , "Logout")]')
       // Add to cart 
        this.firstProduct=page.getByRole('button',{name:'Add to cart'})
        this.Ordertotal=page.locator("//div[text()='Order total']")


    }
}