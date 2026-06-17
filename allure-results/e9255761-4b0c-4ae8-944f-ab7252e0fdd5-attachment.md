# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\checkout\checkout.spec.ts >> TC_03: Verify Successful Order Placement with Valid Address
- Location: tests\Qkart\checkout\checkout.spec.ts:25:5

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
- img "Alexandrea35019"
- paragraph: Alexandrea35019
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
- img "Roadster Mens Running Shoes"
- text: Roadster Mens Running Shoes
- button
- text: "1"
- button
- text: $30 Order total $30
- button "Checkout"
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
```

# Test source

```ts
  1   | import {Page, expect} from "@playwright/test";
  2   | import {loginPages} from "../../pages/loginPage/loginPage";
  3   | 
  4   | 
  5   | type LoginDetails = 
  6   | {
  7   |     Username : string,
  8   |     Password : string;   
  9   | }
  10  | 
  11  | type incorrectLoginDetails = 
  12  | {
  13  |     Username : string,
  14  |     Password : string;   
  15  | }
  16  | 
  17  | type incorrectPassword = 
  18  | {
  19  |     Username : string,
  20  |     Password : string,
  21  | }
  22  | 
  23  | type blankUsername = 
  24  | {
  25  |     Username : string,
  26  |     Password : string,
  27  | }
  28  | 
  29  | type blankPassword = 
  30  | {
  31  |     Username : string,
  32  |     Password : string,
  33  | }
  34  | export class loginAction
  35  | {
  36  |     private readonly loginPage : loginPages;
  37  | 
  38  |     constructor(page: Page)
  39  |     {
  40  |         this.loginPage = new loginPages(page);
  41  |     }
  42  | 
  43  |     async loginUser(loginData : LoginDetails)
  44  |     {
  45  |         // click the login link
  46  |         await this.loginPage.loginLink.click();
  47  |         await this.loginPage.page.waitForLoadState('networkidle');
  48  |         //verify Login Page Title
  49  |         await expect(this.loginPage.title).toBeVisible();
  50  |         // Provide Valid login Credential
  51  |         await this.loginPage.username.fill(loginData.Username);
  52  |         await this.loginPage.passwrod.fill(loginData.Password);
  53  |         // Verify Login Button should be enabled after providing valid credential
  54  |         await expect(this.loginPage.button).toBeEnabled();
  55  |         await this.loginPage.button.click();
  56  | 
  57  |         // verify user should login successfully
  58  |         await expect(this.loginPage.loginSuccessMessage).toHaveText('Logged in successfully');
  59  |         
  60  |         // verify user credential should be correct
> 61  |         await expect(this.loginPage.userCredentialValidation).toBeVisible();   
      |                                                               ^ Error: expect(locator).toBeVisible() failed
  62  | 
  63  |     }
  64  | 
  65  |     async loginWithInvalidUsername(loginData:incorrectLoginDetails)
  66  |         {
  67  |         // click the login link
  68  |         await this.loginPage.loginLink.click();
  69  |         await this.loginPage.page.waitForLoadState('networkidle');
  70  | 
  71  |         // Provide Invalid login Credential
  72  |         await this.loginPage.username.fill(loginData.Username);
  73  |         await this.loginPage.passwrod.fill(loginData.Password);
  74  |         await this.loginPage.button.click();
  75  | 
  76  |         // verify user should not login successfully and verify error message
  77  |         await expect(this.loginPage.errorMessageIncorrectUsername).toBeVisible();
  78  |          
  79  |     }
  80  | 
  81  |     async loginWithInvalidPassword(loginData:incorrectPassword)
  82  |         {
  83  |         // click the login link
  84  |         await this.loginPage.loginLink.click();
  85  |         await this.loginPage.page.waitForLoadState('networkidle');
  86  | 
  87  |         // Provide Invalid login Credential
  88  |         await this.loginPage.username.fill(loginData.Username);
  89  |         await this.loginPage.passwrod.fill(loginData.Password);
  90  |         await this.loginPage.button.click();
  91  | 
  92  |         // verify user should not login successfully and verify error message
  93  |         await expect(this.loginPage.errorMessageIncorrectPassword).toBeVisible();
  94  |          
  95  |     }
  96  | 
  97  | 
  98  |     async loginWithBlankUsername(loginData:blankUsername)
  99  |         {
  100 |         // click the login link
  101 |         await this.loginPage.loginLink.click();
  102 |         await this.loginPage.page.waitForLoadState('networkidle');
  103 | 
  104 |         // Provide blank Username
  105 |         await this.loginPage.username.fill(loginData.Username);
  106 |         await this.loginPage.passwrod.fill(loginData.Password);
  107 |         await this.loginPage.button.click();
  108 | 
  109 |         // verify blank username error message should be visible
  110 |         await expect(this.loginPage.errorMessageBlankUsername).toBeVisible();
  111 |            
  112 |     } 
  113 |     
  114 |     async loginWithBlankPassword(loginData:blankPassword)
  115 |         {
  116 |         // click the login link
  117 |         await this.loginPage.loginLink.click();
  118 |         await this.loginPage.page.waitForLoadState('networkidle');
  119 | 
  120 |         // Provide blank Password
  121 |         await this.loginPage.username.fill(loginData.Username);
  122 |         await this.loginPage.passwrod.fill(loginData.Password);
  123 |         await this.loginPage.button.click();
  124 | 
  125 |         // verify blank password error message should be visible
  126 |         await expect(this.loginPage.errorMessageBlankPassword).toBeVisible();
  127 |            
  128 |     }  
  129 | 
  130 |     async logoutValidation(loginData: LoginDetails)
  131 |     {
  132 |         // click the login link
  133 |         await this.loginPage.loginLink.click();
  134 |         await this.loginPage.page.waitForLoadState('networkidle');
  135 |         //verify Login Page Title
  136 |         await expect(this.loginPage.title).toBeVisible();
  137 |         // Provide Valid login Credential
  138 |         await this.loginPage.username.fill(loginData.Username);
  139 |         await this.loginPage.passwrod.fill(loginData.Password);
  140 |         // Verify Login Button should be enabled
  141 |         await expect(this.loginPage.button).toBeEnabled();
  142 |         await this.loginPage.button.click();
  143 | 
  144 |         // verify user should login successfully
  145 |         await expect(this.loginPage.loginSuccessMessage).toBeVisible();
  146 |         // verify user credential should be correct
  147 |         await expect(this.loginPage.userCredentialValidation).toBeVisible();
  148 | 
  149 |         // Verify Logout Button should be enabled
  150 |         await expect(this.loginPage.logoutButton).toBeEnabled();
  151 | 
  152 |         //click on logout button
  153 |         await this.loginPage.logoutButton.click();
  154 | 
  155 |         // verify user should logout successfully verify login button
  156 |         await expect(this.loginPage.loginLink).toBeVisible();
  157 | 
  158 |     }   
  159 |     //validLogout
  160 |        async validogoutLogo(){
  161 |            await expect(this.loginPage.logoutButton).toBeVisible();
```