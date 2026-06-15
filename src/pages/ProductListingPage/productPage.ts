import {Page, Locator} from "@playwright/test";

export class ProductPage{
    readonly page: Page;
    readonly homePageLogo: Locator;
    readonly registrationButton: Locator;
    readonly loginButton: Locator;
    readonly banner: Locator;
    readonly bannerTitle: Locator;
    
    constructor(page: Page)
    {
        this.page = page;
        this.homePageLogo = page.locator('//a/child::img[@alt="QKart-icon"]');
        this.registrationButton = page.locator('//button[text()="Register"]');
        this.loginButton = page.getByRole("button", { name: "LOGIN" });
        this.banner = page.locator('//div[@class="hero MuiBox-root css-0"]');
        this.bannerTitle = page.locator('//p[@class="hero-heading"]');
    }
}