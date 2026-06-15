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
    readonly qkartLogo: Locator;


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
        this.qkartLogo = page.getByRole('img', { name: /qkart/i }).first();

    }
}