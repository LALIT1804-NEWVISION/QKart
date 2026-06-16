import {Page, expect} from "@playwright/test";
import {ProductPage} from "../../pages/ProductListingPage/productPage";
import loginData from '../../testdata/login.json';

export class ProductAction {
    readonly productPage: ProductPage;

    constructor(page: Page) {
        this.productPage = new ProductPage(page);
    }

    async verifyPageLoadState() {
        await this.productPage.page.waitForLoadState("load");
        await expect(this.productPage.homePageLogo).toBeVisible();
    }

    async verifyLoginButtonVisibiltyAndNavigation() {
        await expect(this.productPage.loginButton).toBeVisible();
        await this.productPage.loginButton.click();
        await expect(this.productPage.page).toHaveURL(/login/);
        await this.productPage.page.goBack();
    }

    async verifyRegisterButtonVisibiltyAndNavigation() {
        await expect(this.productPage.registrationButton).toBeVisible();
        await this.productPage.registrationButton.click();
        await expect(this.productPage.page).toHaveURL(/register/);
    }

    async userLogin() {
        await this.productPage.loginButton.click();
        await this.productPage.usernameField.fill(loginData.LoginDetails.Username);
        await this.productPage.passwordField.fill(loginData.LoginDetails.Password);
        await this.productPage.loginUserButton.click();
    }

    async verifyAppAfterLogin() {
        await expect(this.productPage.page).toHaveURL(loginData.BaseURL);
        await expect(this.productPage.headerUsername).toBeVisible();
    }

    async verifyHomePageBannerVisibilty() {
        await expect(this.productPage.banner).toBeVisible();
    }

    async verifyBannerTitleVisibilty() {
        await expect(this.productPage.bannerTitle).toBeVisible();
    }

    async waitForProductGridAndCardToLoad() {
        const productGrid = this.productPage.productGrid;
        await expect(productGrid).toBeVisible({ timeout: 10000 });

        const productCards = this.productPage.productGrid;
        await expect(productCards.first()).toBeVisible({ timeout: 10000 });

        const cardCount = await productCards.count();
        expect(cardCount).toBeGreaterThan(0);
    }

    async verifyFlexLayout() {
        const gridStyles = await this.productPage.productGrid.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
            display: styles.display,
            flexWrap: styles.flexWrap,
        };
        });

        expect(gridStyles.display).toBe('flex');
        expect(gridStyles.flexWrap).toBe('wrap');
    }

    async verifyLayoutVisually() {
        await expect(this.productPage.productGrid).toHaveScreenshot('product-grid-layout.png');
    }

    
}