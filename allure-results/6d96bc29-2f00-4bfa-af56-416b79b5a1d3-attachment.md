# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> Login_01 Verify that a user can log in with a valid username and password
- Location: tests\Qkart\loginSpec\login.spec.ts:5:5

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
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
> 46  |         await this.loginPage.page.waitForLoadState('networkidle');
      |                                   ^ Error: page.waitForLoadState: Target page, context or browser has been closed
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
  60  |         await expect(this.loginPage.userCredentialValidation).toBeVisible();   
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
```