import { Locator, Page } from "@playwright/test";

export class FooterPage {

    readonly privacyPolicyLink: Locator;
    readonly aboutUsLink: Locator;
    readonly contactUsLink: Locator;
    readonly termsOfServiceLink: Locator;
    readonly contactUsPopupTitle: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly messageField: Locator;
    readonly contactNowButton: Locator;

    constructor(page: Page) {

        this.privacyPolicyLink = page.getByRole("link", { name: /privacy policy/i });
        this.aboutUsLink = page.getByRole("link", { name: /about us/i });
        this.contactUsLink = page.locator("text=Contact");
        this.termsOfServiceLink = page.getByRole("link", { name: /terms of service/i });
        this.contactUsPopupTitle = page.getByRole("heading", { name: "Contact Us" });
        this.nameField = page.getByRole("textbox", { name: "Name" });
        this.emailField = page.getByRole("textbox", { name: "Email" });
        this.messageField = page.getByRole("textbox", { name: "Message" });
        this.contactNowButton = page.getByRole("button", { name: /contact now/i });
    }
}