import {Page, Locator} from "@playwright/test";

export class loginPages
{
    readonly page: Page;
    readonly loginLink: Locator;
    readonly title: Locator;
    readonly username: Locator;
    readonly passwrod: Locator;
    readonly button: Locator;
    readonly loginValidation: Locator;
    readonly userCredentialValidation: Locator;

    // Invalid Credential Validation
    readonly errorMessageIncorrectUsername: Locator;
    readonly errorMessageIncorrectPassword: Locator;
    readonly errorMessageBlankUsername: Locator;
    readonly errorMessageBlankPassword: Locator;
    readonly logoutButton: Locator;



    constructor(page: Page)
    {
        this.page = page;
        this.loginLink = page.locator('//button[contains(text() , "Login")]');
        this.title = page.getByRole('heading', { name: 'Login' });
        this.username = page.locator('//input[contains(@placeholder,"Enter Username")]');
        this.passwrod = page.locator('//input[contains(@placeholder,"Enter a password")]');
        this.button = page.locator('//button[contains(text(), "Login to QKart")]')
        this.loginValidation = page.locator('//div[contains(@id, "notistack-snackbar")]')
        this.userCredentialValidation = page.locator('//p[contains(text(), "Dummy123")]')

        // Invalid Credential Validation
        this.errorMessageIncorrectUsername = page.locator('//div[contains(text() , "Username does not exist")]')
        this.errorMessageIncorrectPassword = page.locator('//div[contains(text() , "Password is incorrect")]')
        this.errorMessageBlankUsername = page.locator('//div[contains(text() , "Username is a required field")]')
        this.errorMessageBlankPassword = page.locator('//div[contains(text() , "Password is a required field")]')
        this.logoutButton = page.locator('//button[contains(text() , "Logout")]')

    }
}