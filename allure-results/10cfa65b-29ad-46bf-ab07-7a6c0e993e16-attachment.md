# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> TC_09 Verify login with leading spaces in username and password
- Location: tests\Qkart\loginSpec\login.spec.ts:55:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//p[contains(text(), "Dummy123")]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//p[contains(text(), "Dummy123")]')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- textbox "Search for items/categories"
- img "qwe321"
- paragraph: qwe321
- button "Logout"
- paragraph: India’ s FASTEST DELIVERY to your door step
- img "Stylecon 9 Seater RHS Sofa Set"
- paragraph: Stylecon 9 Seater RHS Sofa Set
- paragraph: $650
- img "3 Stars"
- button "Add to cart"
- img "Thinking, Fast and Slow"
- paragraph: Thinking, Fast and Slow
- paragraph: $15
- img "5 Stars"
- button "Add to cart"
- img "YONEX Smash Badminton Racquet"
- paragraph: YONEX Smash Badminton Racquet
- paragraph: $100
- img "5 Stars"
- button "Add to cart"
- img "Roadster Mens Running Shoes"
- paragraph: Roadster Mens Running Shoes
- paragraph: $30
- img "5 Stars"
- button "Size chart"
- text: Size
- combobox "Size Size":
  - option "6" [selected]
  - option "7"
  - option "8"
  - option "9"
  - option "10"
- button "Add to cart"
- img "Nike Mens Running Shoes"
- paragraph: Nike Mens Running Shoes
- paragraph: $80
- img "5 Stars"
- button "Size chart"
- text: Size
- combobox:
  - option "6" [selected]
  - option "7"
  - option "8"
  - option "9"
  - option "10"
- button "Add to cart"
- img "Tan Leatherette Weekender Duffle"
- paragraph: Tan Leatherette Weekender Duffle
- paragraph: $150
- img "4 Stars"
- button "Add to cart"
- img "Yarine Floor Lamp"
- paragraph: Yarine Floor Lamp
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Xtend Smart Watch"
- paragraph: Xtend Smart Watch
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Plastic Balls"
- paragraph: Plastic Balls
- paragraph: $30
- img "3 Stars"
- button "Add to cart"
- img "Kindle"
- paragraph: Kindle
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Connector"
- paragraph: Connector
- paragraph: $80
- img "5 Stars"
- button "Add to cart"
- img "Jenga"
- paragraph: Jenga
- paragraph: $120
- img "5 Stars"
- button "Add to cart"
- text: Cart is empty. Add more items to the cart to checkout.
- navigation "pagination navigation":
  - list:
    - listitem:
      - button "Go to previous page" [disabled]
    - listitem:
      - button "page 1": "1"
    - listitem:
      - button "Go to page 2": "2"
    - listitem:
      - button "Go to next page"
- img "QKart-icon"
- paragraph: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
- paragraph:
  - link "Privacy policy":
    - /url: privacy-policy
- paragraph:
  - link "About us":
    - /url: aboutus
- paragraph: Contact us
- paragraph:
  - link "Terms of Service":
    - /url: terms-of-service
- alert: Logged in successfully
```

# Test source

```ts
  1   | import {Page, expect} from "@playwright/test";
  2   | import {loginPages} from "../../pages/loginPage/loginPage";
  3   | import loginData from "../../testdata/login.json";
  4   | 
  5   | 
  6   | type LoginDetails = 
  7   | {
  8   |     Username : string,
  9   |     Password : string;
  10  |     
  11  | }
  12  | 
  13  | type incorrectLoginDetails = 
  14  | {
  15  |     Username : string,
  16  |     Password : string;
  17  |     
  18  | }
  19  | 
  20  | type incorrectPassword = 
  21  | {
  22  |     Username : string,
  23  |     Password : string,
  24  | }
  25  | 
  26  | type blankUsername = 
  27  | {
  28  |     Username : string,
  29  |     Password : string,
  30  | }
  31  | 
  32  | type blankPassword = 
  33  | {
  34  |     Username : string,
  35  |     Password : string,
  36  | }
  37  | export class loginAction
  38  | {
  39  |     private readonly loginPage : loginPages;
  40  | 
  41  |     constructor(page: Page)
  42  |     {
  43  |         this.loginPage = new loginPages(page);
  44  |     }
  45  | 
  46  |     async loginUser(loginData: LoginDetails)
  47  |     {
  48  |         // click the login link
  49  |         await this.loginPage.loginLink.click();
  50  |         await this.loginPage.page.waitForLoadState('networkidle');
  51  |         //verify Login Page Title
  52  |         await expect(this.loginPage.title).toBeVisible();
  53  |         // Provide Valid login Credential
  54  |         await this.loginPage.username.fill(loginData.Username);
  55  |         await this.loginPage.passwrod.fill(loginData.Password);
  56  |         // Verify Login Button should be enabled after providing valid credential
  57  |         await expect(this.loginPage.button).toBeEnabled();
  58  |         await this.loginPage.button.click();
  59  | 
  60  |         // verify user should login successfully
  61  |         await expect(this.loginPage.loginValidation).toBeVisible();
  62  |         // verify user credential should be correct
> 63  |         await expect(this.loginPage.userCredentialValidation).toBeVisible();
      |                                                               ^ Error: expect(locator).toBeVisible() failed
  64  | 
  65  |     }
  66  | 
  67  |     async loginWithInvalidUsername(loginData:incorrectLoginDetails)
  68  |         {
  69  |         // click the login link
  70  |         await this.loginPage.loginLink.click();
  71  |         await this.loginPage.page.waitForLoadState('networkidle');
  72  | 
  73  |         // Provide Invalid login Credential
  74  |         await this.loginPage.username.fill(loginData.Username);
  75  |         await this.loginPage.passwrod.fill(loginData.Password);
  76  |         await this.loginPage.button.click();
  77  | 
  78  |         // verify user should not login successfully and verify error message
  79  |         await expect(this.loginPage.errorMessageIncorrectUsername).toBeVisible();
  80  |          
  81  |     }
  82  | 
  83  |     async loginWithInvalidPassword(loginData:incorrectPassword)
  84  |         {
  85  |         // click the login link
  86  |         await this.loginPage.loginLink.click();
  87  |         await this.loginPage.page.waitForLoadState('networkidle');
  88  | 
  89  |         // Provide Invalid login Credential
  90  |         await this.loginPage.username.fill(loginData.Username);
  91  |         await this.loginPage.passwrod.fill(loginData.Password);
  92  |         await this.loginPage.button.click();
  93  | 
  94  |         // verify user should not login successfully and verify error message
  95  |         await expect(this.loginPage.errorMessageIncorrectPassword).toBeVisible();
  96  |          
  97  |     }
  98  | 
  99  |     async loginWithBlankUsername(loginData:blankUsername)
  100 |         {
  101 |         // click the login link
  102 |         await this.loginPage.loginLink.click();
  103 |         await this.loginPage.page.waitForLoadState('networkidle');
  104 | 
  105 |         // Provide blank Username
  106 |         await this.loginPage.username.fill(loginData.Username);
  107 |         await this.loginPage.passwrod.fill(loginData.Password);
  108 |         await this.loginPage.button.click();
  109 | 
  110 |         // verify blank username error message should be visible
  111 |         await expect(this.loginPage.errorMessageBlankUsername).toBeVisible();
  112 |            
  113 |     } 
  114 |     
  115 |     async loginWithBlankPassword(loginData:blankPassword)
  116 |         {
  117 |         // click the login link
  118 |         await this.loginPage.loginLink.click();
  119 |         await this.loginPage.page.waitForLoadState('networkidle');
  120 | 
  121 |         // Provide blank Password
  122 |         await this.loginPage.username.fill(loginData.Username);
  123 |         await this.loginPage.passwrod.fill(loginData.Password);
  124 |         await this.loginPage.button.click();
  125 | 
  126 |         // verify blank password error message should be visible
  127 |         await expect(this.loginPage.errorMessageBlankPassword).toBeVisible();
  128 |            
  129 |     }  
  130 | 
  131 |     async logoutValidation(loginData: LoginDetails)
  132 |     {
  133 |         // click the login link
  134 |         await this.loginPage.loginLink.click();
  135 |         await this.loginPage.page.waitForLoadState('networkidle');
  136 |         //verify Login Page Title
  137 |         await expect(this.loginPage.title).toBeVisible();
  138 |         // Provide Valid login Credential
  139 |         await this.loginPage.username.fill(loginData.Username);
  140 |         await this.loginPage.passwrod.fill(loginData.Password);
  141 |         // Verify Login Button should be enabled
  142 |         await expect(this.loginPage.button).toBeEnabled();
  143 |         await this.loginPage.button.click();
  144 | 
  145 |         // verify user should login successfully
  146 |         await expect(this.loginPage.loginValidation).toBeVisible();
  147 |         // verify user credential should be correct
  148 |         await expect(this.loginPage.userCredentialValidation).toBeVisible();
  149 | 
  150 |         // Verify Logout Button should be enabled
  151 |         await expect(this.loginPage.logoutButton).toBeEnabled();
  152 | 
  153 |         //click on logout button
  154 |         await this.loginPage.logoutButton.click();
  155 | 
  156 |         // verify user should logout successfully verify login button
  157 |         await expect(this.loginPage.loginLink).toBeVisible();
  158 | 
  159 |     }   
  160 |     //validLogout
  161 |        async validogoutLogo(){
  162 |            await expect(this.loginPage.logoutButton).toBeVisible();
  163 |        }
```