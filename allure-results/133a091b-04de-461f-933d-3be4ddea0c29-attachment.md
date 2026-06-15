# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: footerTest\footerTest.spec.ts >> QKart Footer Links Validation >> TC_005 Verify that the Contact Us link displayed in the footer section of the Home Page opens the Contact Us popup successfully
- Location: tests\footerTest\footerTest.spec.ts:40:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder('Enter your name')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByPlaceholder('Enter your name')

```

```yaml
- dialog:
  - heading [level=3]
  - text: X
  - heading "Contact Us" [level=3]
  - heading "(we generally respond in 24 hours)" [level=6]
  - textbox "Name"
  - textbox "Email"
  - textbox "Message"
  - button "Contact Now"
```

# Test source

```ts
  1  | import { expect, Page } from "@playwright/test";
  2  | import { FooterPage } from "../../pages/footerPage/footerPage";
  3  | import loginData from "../../testdata/login.json";
  4  | 
  5  | export class FooterAction {
  6  | 
  7  |     footerPage: FooterPage;
  8  | 
  9  |     constructor(private page: Page) {
  10 | 
  11 |         this.footerPage = new FooterPage(page);
  12 |     }
  13 | 
  14 |     async verifyPrivacyPolicyFooterLink() {
  15 | 
  16 |         const [newTab] = await Promise.all([
  17 |             this.page.context().waitForEvent("page"),
  18 |             this.footerPage.privacyPolicyLink.click()
  19 |         ]);
  20 | 
  21 |         await newTab.waitForLoadState();
  22 | 
  23 |         await expect(newTab).toHaveURL(
  24 |             loginData.FooterLinks.privacyPolicyUrl
  25 |         );
  26 | 
  27 |         await newTab.close();
  28 |     }
  29 | 
  30 |     async verifyAboutUsFooterLink() {
  31 | 
  32 |         const [newTab] = await Promise.all([
  33 |             this.page.context().waitForEvent("page"),
  34 |             this.footerPage.aboutUsLink.click()
  35 |         ]);
  36 | 
  37 |         await newTab.waitForLoadState();
  38 | 
  39 |         await expect(newTab).toHaveURL(
  40 |             loginData.FooterLinks.aboutUsUrl
  41 |         );
  42 | 
  43 |         await newTab.close();
  44 |     }
  45 | 
  46 |     async verifyContactUsFooterLink() {
  47 | 
  48 |     await this.footerPage.contactUsLink.click();
  49 | 
  50 |     await expect(
  51 |         this.footerPage.contactUsPopupTitle
  52 |     ).toBeVisible();
  53 | 
  54 |     await expect(
  55 |         this.footerPage.nameField
> 56 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  57 | 
  58 |     await expect(
  59 |         this.footerPage.emailField
  60 |     ).toBeVisible();
  61 | 
  62 |     await expect(
  63 |         this.footerPage.messageField
  64 |     ).toBeVisible();
  65 | 
  66 |     await expect(
  67 |         this.footerPage.contactNowButton
  68 |     ).toBeVisible();
  69 | }
  70 |     async verifyTermsOfServiceFooterLink() {
  71 | 
  72 |         const [newTab] = await Promise.all([
  73 |             this.page.context().waitForEvent("page"),
  74 |             this.footerPage.termsOfServiceLink.click()
  75 |         ]);
  76 | 
  77 |         await newTab.waitForLoadState();
  78 | 
  79 |         await expect(newTab).toHaveURL(
  80 |             loginData.FooterLinks.termsOfServiceUrl
  81 |         );
  82 | 
  83 |         await newTab.close();
  84 |     }
  85 | }
```