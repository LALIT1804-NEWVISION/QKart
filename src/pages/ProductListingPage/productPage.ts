import {Page, Locator} from "@playwright/test";

export class ProductPage{
    readonly page: Page;
    readonly homePageLogo: Locator;
    readonly registrationButton: Locator;
    readonly loginButton: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginUserButton: Locator;
    readonly headerUsername: Locator;
    readonly banner: Locator;
    readonly bannerTitle: Locator;
    readonly productGrid: Locator;
    readonly productCard: Locator;
    readonly layoutImage:Locator;
    readonly cardTitile:Locator;
    readonly productPrice:Locator;
    readonly productRating:Locator;
    
    constructor(page: Page)
    {
        this.page = page;
        this.homePageLogo = page.locator('//a/child::img[@alt="QKart-icon"]');
        this.registrationButton = page.locator('//button[text()="Register"]');
        this.loginButton = page.getByRole("button", { name: "LOGIN" });
        this.usernameField = page.locator('//input[contains(@placeholder,"Enter Username")]');
        this.passwordField = page.locator('//input[contains(@placeholder,"Enter a password")]');
        this.loginUserButton = page.locator('//button[contains(text(), "Login to QKart")]')
        this.headerUsername = page.locator('//p[@class="username-text"]');
        this.banner = page.locator('//div[@class="hero MuiBox-root css-0"]');
        this.bannerTitle = page.locator('//p[@class="hero-heading"]');
        this.productGrid = page.locator('//div[@class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-1msksyp"]');
        this.productCard = page.locator('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3 css-sycj1h"]');
        this.layoutImage=page.locator('//img[@alt="Stylecon 9 Seater RHS Sofa Set "]');
        this.cardTitile=page.locator('//p[normalize-space()="Stylecon 9 Seater RHS Sofa Set"]');
        this.productPrice=page.getByText('$650', { exact: true });
        this.productRating=page.locator('//p[text()="Stylecon 9 Seater RHS Sofa Set "]/following-sibling::span[@aria-label="3 Stars"]');
    }
}