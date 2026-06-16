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
}