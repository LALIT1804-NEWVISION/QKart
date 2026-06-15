# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: footerTest\footerTest.spec.ts >> QKart Footer Links Validation >> TC_005 Verify that the Contact Us link displayed in the footer section of the Home Page opens in a new browser tab and navigates successfully
- Location: tests\footerTest\footerTest.spec.ts:79:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: browserContext.waitForEvent: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
      - generic [ref=e10]:
        - textbox [ref=e11]:
          - /placeholder: Search for items/categories
        - img [ref=e13]
        - group
      - generic [ref=e15]:
        - img [ref=e17]
        - paragraph [ref=e18]: Dummy123
        - button [ref=e19] [cursor=pointer]: Logout
    - generic [ref=e20]:
      - generic [ref=e21]:
        - paragraph [ref=e23]: India’ s FASTEST DELIVERY to your door step
        - generic [ref=e24]:
          - generic [ref=e26]:
            - img [ref=e27]
            - generic [ref=e28]:
              - paragraph [ref=e29]: Stylecon 9 Seater RHS Sofa Set
              - paragraph [ref=e30]: $650
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e32] [cursor=pointer]:
              - img [ref=e34]
              - text: Add to cart
          - generic [ref=e37]:
            - img [ref=e38]
            - generic [ref=e39]:
              - paragraph [ref=e40]: Thinking, Fast and Slow
              - paragraph [ref=e41]: $15
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e43] [cursor=pointer]:
              - img [ref=e45]
              - text: Add to cart
          - generic [ref=e48]:
            - img [ref=e49]
            - generic [ref=e50]:
              - paragraph [ref=e51]: YONEX Smash Badminton Racquet
              - paragraph [ref=e52]: $100
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e54] [cursor=pointer]:
              - img [ref=e56]
              - text: Add to cart
          - generic [ref=e59]:
            - img [ref=e60]
            - generic [ref=e61]:
              - paragraph [ref=e62]: Roadster Mens Running Shoes
              - paragraph [ref=e63]: $30
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
              - button [ref=e64] [cursor=pointer]: Size chart
            - generic [ref=e65]:
              - generic [ref=e66]:
                - generic [ref=e67]: Size
                - generic [ref=e68]:
                  - combobox [ref=e69] [cursor=pointer]
                  - img
              - button [ref=e70] [cursor=pointer]:
                - img [ref=e72]
                - text: Add to cart
          - generic [ref=e75]:
            - img [ref=e76]
            - generic [ref=e77]:
              - paragraph [ref=e78]: Nike Mens Running Shoes
              - paragraph [ref=e79]: $80
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
              - button [ref=e80] [cursor=pointer]: Size chart
            - generic [ref=e81]:
              - generic [ref=e82]:
                - generic [ref=e83]: Size
                - generic [ref=e84]:
                  - combobox [ref=e85] [cursor=pointer]
                  - img
              - button [ref=e86] [cursor=pointer]:
                - img [ref=e88]
                - text: Add to cart
          - generic [ref=e91]:
            - img [ref=e92]
            - generic [ref=e93]:
              - paragraph [ref=e94]: Tan Leatherette Weekender Duffle
              - paragraph [ref=e95]: $150
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e97] [cursor=pointer]:
              - img [ref=e99]
              - text: Add to cart
          - generic [ref=e102]:
            - img [ref=e103]
            - generic [ref=e104]:
              - paragraph [ref=e105]: Yarine Floor Lamp
              - paragraph [ref=e106]: $30
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e108] [cursor=pointer]:
              - img [ref=e110]
              - text: Add to cart
          - generic [ref=e113]:
            - img [ref=e114]
            - generic [ref=e115]:
              - paragraph [ref=e116]: Xtend Smart Watch
              - paragraph [ref=e117]: $30
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e119] [cursor=pointer]:
              - img [ref=e121]
              - text: Add to cart
          - generic [ref=e124]:
            - img [ref=e125]
            - generic [ref=e126]:
              - paragraph [ref=e127]: Plastic Balls
              - paragraph [ref=e128]: $30
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e130] [cursor=pointer]:
              - img [ref=e132]
              - text: Add to cart
          - generic [ref=e135]:
            - img [ref=e136]
            - generic [ref=e137]:
              - paragraph [ref=e138]: Kindle
              - paragraph [ref=e139]: $30
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e141] [cursor=pointer]:
              - img [ref=e143]
              - text: Add to cart
          - generic [ref=e146]:
            - img [ref=e147]
            - generic [ref=e148]:
              - paragraph [ref=e149]: Connector
              - paragraph [ref=e150]: $80
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e152] [cursor=pointer]:
              - img [ref=e154]
              - text: Add to cart
          - generic [ref=e157]:
            - img [ref=e158]
            - generic [ref=e159]:
              - paragraph [ref=e160]: Jenga
              - paragraph [ref=e161]: $120
              - img:
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
                - generic:
                  - img
                  - generic:
                    - generic:
                      - img
            - button [ref=e163] [cursor=pointer]:
              - img [ref=e165]
              - text: Add to cart
      - generic [ref=e168]:
        - generic [ref=e170]:
          - img [ref=e172]
          - generic [ref=e173]:
            - generic [ref=e174]: Roadster Mens Running Shoes
            - generic [ref=e175]:
              - generic [ref=e176]:
                - button [ref=e177] [cursor=pointer]:
                  - img [ref=e178]
                - generic [ref=e180]: "1"
                - button [ref=e181] [cursor=pointer]:
                  - img [ref=e182]
              - generic [ref=e184]: $30
        - generic [ref=e186]:
          - img [ref=e188]
          - generic [ref=e189]:
            - generic [ref=e190]: YONEX Smash Badminton Racquet
            - generic [ref=e191]:
              - generic [ref=e192]:
                - button [ref=e193] [cursor=pointer]:
                  - img [ref=e194]
                - generic [ref=e196]: "1"
                - button [ref=e197] [cursor=pointer]:
                  - img [ref=e198]
              - generic [ref=e200]: $100
        - generic [ref=e202]:
          - img [ref=e204]
          - generic [ref=e205]:
            - generic [ref=e206]: Stylecon 9 Seater RHS Sofa Set
            - generic [ref=e207]:
              - generic [ref=e208]:
                - button [ref=e209] [cursor=pointer]:
                  - img [ref=e210]
                - generic [ref=e212]: "1"
                - button [ref=e213] [cursor=pointer]:
                  - img [ref=e214]
              - generic [ref=e216]: $650
        - generic [ref=e217]:
          - generic [ref=e218]: Order total
          - generic [ref=e219]: $780
        - button [ref=e221] [cursor=pointer]:
          - img [ref=e223]
          - text: Checkout
    - navigation [ref=e226]:
      - list [ref=e227]:
        - listitem [ref=e228]:
          - button [disabled]:
            - img
        - listitem [ref=e229]:
          - button [ref=e230] [cursor=pointer]: "1"
        - listitem [ref=e231]:
          - button [ref=e232] [cursor=pointer]: "2"
        - listitem [ref=e233]:
          - button [ref=e234] [cursor=pointer]:
            - img [ref=e235]
    - generic [ref=e237]:
      - img [ref=e239]
      - paragraph [ref=e240]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
      - generic [ref=e241]:
        - paragraph [ref=e242] [cursor=pointer]:
          - link [ref=e243]:
            - /url: privacy-policy
            - text: Privacy policy
        - paragraph [ref=e244] [cursor=pointer]:
          - link [ref=e245]:
            - /url: aboutus
            - text: About us
        - paragraph [ref=e246] [cursor=pointer]: Contact us
        - paragraph [ref=e247] [cursor=pointer]:
          - link [ref=e248]:
            - /url: terms-of-service
            - text: Terms of Service
  - dialog [ref=e251]:
    - generic [ref=e258]:
      - generic [ref=e260]:
        - heading [level=3]
        - generic [ref=e261] [cursor=pointer]: X
        - heading "Contact Us" [level=3] [ref=e262]
        - heading "(we generally respond in 24 hours)" [level=6] [ref=e263]
      - generic [ref=e264]:
        - textbox "Name" [ref=e267]
        - textbox "Email" [ref=e270]
      - textbox "Message" [ref=e272]
      - button "Contact Now" [ref=e275] [cursor=pointer]: Contact Now
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
  48 |         const [newTab] = await Promise.all([
> 49 |             this.page.context().waitForEvent("page"),
     |                                 ^ Error: browserContext.waitForEvent: Test timeout of 30000ms exceeded.
  50 |             this.footerPage.contactUsLink.click()
  51 |         ]);
  52 | 
  53 |         await newTab.waitForLoadState();
  54 | 
  55 |         await expect(newTab).toHaveURL(
  56 |             loginData.FooterLinks.contactUsUrl
  57 |         );
  58 | 
  59 |         await newTab.close();
  60 |     }
  61 | 
  62 |     async verifyTermsOfServiceFooterLink() {
  63 | 
  64 |         const [newTab] = await Promise.all([
  65 |             this.page.context().waitForEvent("page"),
  66 |             this.footerPage.termsOfServiceLink.click()
  67 |         ]);
  68 | 
  69 |         await newTab.waitForLoadState();
  70 | 
  71 |         await expect(newTab).toHaveURL(
  72 |             loginData.FooterLinks.termsOfServiceUrl
  73 |         );
  74 | 
  75 |         await newTab.close();
  76 |     }
  77 | }
```