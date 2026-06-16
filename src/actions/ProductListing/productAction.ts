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

     // Arvind Work
    async verifyLayoutImageVisible(): Promise<void> {
    await expect(this.productPage.layoutImage).toBeVisible();

    const isLoaded = await this.productPage.layoutImage.evaluate(
        (img: HTMLImageElement) => img.complete
    );
    expect(isLoaded).toBeTruthy();

    const naturalWidth = await this.productPage.layoutImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
    );
    expect(naturalWidth).toBeGreaterThan(0);
}

async verifyFirstProductTitle(): Promise<void> {
    const title = this.productPage.cardTitile;
    await expect(title).toBeVisible();

    const titleText = (await title.textContent())?.trim();
    expect(titleText).toBeTruthy();
}

async verifyFirstProductPrice(): Promise<void> {
    const price = this.productPage.productPrice;
    await expect(price).toBeVisible();

    const priceText = (await price.textContent())?.trim();
    expect(priceText).toBeTruthy();

    const currencyPattern = /[₹$€£]\s?\d+(\.\d{1,2})?/;
    expect(priceText).toMatch(currencyPattern);
}

async verifyFirstProductRating(): Promise<void> {
    const ratingContainer = this.productPage.productRating;
    const stars = this.productPage.productRating; 
    await expect(ratingContainer.first()).toBeVisible();

    const filledStarsCount = await stars.count();
    expect(filledStarsCount).toBeGreaterThan(0);
    
    const ratingText = (await ratingContainer.first().textContent())?.trim();

    if (ratingText) {
        const ratingValue = parseFloat(ratingText);
        expect(ratingValue).toBeGreaterThanOrEqual(0);
        expect(ratingValue).toBeLessThanOrEqual(5);
    }   
}}