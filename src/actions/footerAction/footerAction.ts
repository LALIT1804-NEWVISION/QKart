import { expect, Page } from "@playwright/test";
import { FooterPage } from "../../pages/footerPage/footerPage";
import login from "../../../src/testdata/login.json";
import {loginAction} from "../loginAction/loginAction";

export class FooterAction {

    footerPage: FooterPage;

    constructor(private page: Page) {

        this.footerPage = new FooterPage(page);
    }
    async verifyQKartLogoVisible() {
        await expect(this.footerPage.qKartLogo).toBeVisible();
    }
    async verifyPrivacyPolicyFooterLink() {

        const [newTab] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.footerPage.privacyPolicyLink.click()
        ]);

        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL(loginData.FooterLinks.privacyPolicyUrl);
        await newTab.close();
    }

    async verifyAboutUsFooterLink() {

        const [newTab] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.footerPage.aboutUsLink.click()
        ]);

        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL(loginData.FooterLinks.aboutUsUrl);
        await newTab.close();
    }

    async verifyContactUsFooterLink() {

        await this.footerPage.contactUsLink.click();
        await expect(this.footerPage.contactUsPopupTitle).toBeVisible();
        await expect(this.footerPage.nameField).toBeVisible();
        await expect(this.footerPage.emailField).toBeVisible();
        await expect(this.footerPage.messageField).toBeVisible();
        await expect(this.footerPage.contactNowButton).toBeVisible();
    }
    async verifyTermsOfServiceFooterLink() {

        const [newTab] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.footerPage.termsOfServiceLink.click()
        ]);

        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL(loginData.FooterLinks.termsOfServiceUrl);
        await newTab.close();
    }
}