# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\checkout\checkout.spec.ts >> TC_04: Verify Place Order Without Selecting Shipping Address
- Location: tests\Qkart\checkout\checkout.spec.ts:27:5

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
- alert: Logged in successfully
```

# Test source

```ts
  1   | import {Page, expect} from "@playwright/test";
  2   | import {loginPages} from "../../pages/loginPage/loginPage";
  3   |  
  4   | type LoginDetails =
  5   | {
  6   |     Username : string,
  7   |     Password : string;  
  8   | }
  9   |  
  10  | type incorrectLoginDetails =
  11  | {
  12  |     Username : string,
  13  |     Password : string;  
  14  | }
  15  |  
  16  | type incorrectPassword =
  17  | {
  18  |     Username : string,
  19  |     Password : string,
  20  | }
  21  |  
  22  | type blankUsername =
  23  | {
  24  |     Username : string,
  25  |     Password : string,
  26  | }
  27  |  
  28  | type blankPassword =
  29  | {
  30  |     Username : string,
  31  |     Password : string,
  32  | }
  33  | export class loginAction
  34  | {
  35  |     private readonly loginPage : loginPages;
  36  |  
  37  |     constructor(page: Page)
  38  |     {
  39  |         this.loginPage = new loginPages(page);
  40  |     }
  41  |  
  42  |     async loginUser(loginData : LoginDetails)
  43  |     {
  44  |         // click the login link
  45  |         await this.loginPage.loginLink.click();
  46  |         await this.loginPage.page.waitForLoadState('networkidle');
  47  |         //verify Login Page Title
  48  |         await expect(this.loginPage.title).toBeVisible();
  49  |         // Provide Valid login Credential
  50  |         await this.loginPage.username.fill(loginData.Username);
  51  |         await this.loginPage.passwrod.fill(loginData.Password);
  52  |         // Verify Login Button should be enabled after providing valid credential
  53  |         await expect(this.loginPage.button).toBeEnabled();
  54  |         await this.loginPage.button.click();
  55  |  
  56  |         // verify user should login successfully
  57  |         await expect(this.loginPage.loginSuccessMessage).toHaveText('Logged in successfully');
  58  |        
  59  |         // verify user credential should be correct
> 60  |        await expect(this.loginPage.userCredentialValidation).toBeVisible();  
      |                                                              ^ Error: expect(locator).toBeVisible() failed
  61  |  
  62  |     }
  63  |  
  64  |     async loginWithInvalidUsername(loginData:incorrectLoginDetails)
  65  |         {
  66  |         // click the login link
  67  |         await this.loginPage.loginLink.click();
  68  |         await this.loginPage.page.waitForLoadState('networkidle');
  69  |  
  70  |         // Provide Invalid login Credential
  71  |         await this.loginPage.username.fill(loginData.Username);
  72  |         await this.loginPage.passwrod.fill(loginData.Password);
  73  |         await this.loginPage.button.click();
  74  |  
  75  |         // verify user should not login successfully and verify error message
  76  |         await expect(this.loginPage.errorMessageIncorrectUsername).toBeVisible();
  77  |          
  78  |     }
  79  |  
  80  |     async loginWithInvalidPassword(loginData:incorrectPassword)
  81  |         {
  82  |         // click the login link
  83  |         await this.loginPage.loginLink.click();
  84  |         await this.loginPage.page.waitForLoadState('networkidle');
  85  |  
  86  |         // Provide Invalid login Credential
  87  |         await this.loginPage.username.fill(loginData.Username);
  88  |         await this.loginPage.passwrod.fill(loginData.Password);
  89  |         await this.loginPage.button.click();
  90  |  
  91  |         // verify user should not login successfully and verify error message
  92  |         await expect(this.loginPage.errorMessageIncorrectPassword).toBeVisible();
  93  |          
  94  |     }
  95  |  
  96  |  
  97  |     async loginWithBlankUsername(loginData:blankUsername)
  98  |         {
  99  |         // click the login link
  100 |         await this.loginPage.loginLink.click();
  101 |         await this.loginPage.page.waitForLoadState('networkidle');
  102 |  
  103 |         // Provide blank Username
  104 |         await this.loginPage.username.fill(loginData.Username);
  105 |         await this.loginPage.passwrod.fill(loginData.Password);
  106 |         await this.loginPage.button.click();
  107 |  
  108 |         // verify blank username error message should be visible
  109 |         await expect(this.loginPage.errorMessageBlankUsername).toBeVisible();
  110 |            
  111 |     }
  112 |    
  113 |     async loginWithBlankPassword(loginData:blankPassword)
  114 |         {
  115 |         // click the login link
  116 |         await this.loginPage.loginLink.click();
  117 |         await this.loginPage.page.waitForLoadState('networkidle');
  118 |  
  119 |         // Provide blank Password
  120 |         await this.loginPage.username.fill(loginData.Username);
  121 |         await this.loginPage.passwrod.fill(loginData.Password);
  122 |         await this.loginPage.button.click();
  123 |  
  124 |         // verify blank password error message should be visible
  125 |         await expect(this.loginPage.errorMessageBlankPassword).toBeVisible();
  126 |            
  127 |     }  
  128 |  
  129 |     async logoutValidation(loginData: LoginDetails)
  130 |     {
  131 |         // click the login link
  132 |         await this.loginPage.loginLink.click();
  133 |         await this.loginPage.page.waitForLoadState('networkidle');
  134 |         //verify Login Page Title
  135 |         await expect(this.loginPage.title).toBeVisible();
  136 |         // Provide Valid login Credential
  137 |         await this.loginPage.username.fill(loginData.Username);
  138 |         await this.loginPage.passwrod.fill(loginData.Password);
  139 |         // Verify Login Button should be enabled
  140 |         await expect(this.loginPage.button).toBeEnabled();
  141 |         await this.loginPage.button.click();
  142 |  
  143 |         // verify user should login successfully
  144 |         await expect(this.loginPage.loginSuccessMessage).toBeVisible();
  145 |         // verify user credential should be correct
  146 |         await expect(this.loginPage.userCredentialValidation).toBeVisible();
  147 |  
  148 |         // Verify Logout Button should be enabled
  149 |         await expect(this.loginPage.logoutButton).toBeEnabled();
  150 |  
  151 |         //click on logout button
  152 |         await this.loginPage.logoutButton.click();
  153 |  
  154 |         // verify user should logout successfully verify login button
  155 |         await expect(this.loginPage.loginLink).toBeVisible();
  156 |  
  157 |     }  
  158 |     //validLogout
  159 |        async validogoutLogo(){
  160 |            await expect(this.loginPage.logoutButton).toBeVisible();
```