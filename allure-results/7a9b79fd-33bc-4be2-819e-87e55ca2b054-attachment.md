# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> Login_06 Verify logout functionality
- Location: tests\Qkart\loginSpec\login.spec.ts:46:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[contains(text() , "Login")]')

```

# Test source

```ts
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
> 132 |         await this.loginPage.loginLink.click();
      |                                        ^ Error: locator.click: Target page, context or browser has been closed
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
  161 |        }
  162 | 
  163 |     //Add to cart
  164 |     async verifyProductAfterLogout(username :string,password:string){
  165 |         await this.loginPage.loginLink.click();
  166 |         await this.loginPage.page.waitForLoadState('networkidle');
  167 |         //verify Login Page Title
  168 |         await expect(this.loginPage.title).toBeVisible();
  169 |         // Provide Valid login Credential
  170 |         await this.loginPage.username.fill(username);
  171 |         await this.loginPage.passwrod.fill(password);
  172 |         // Verify Login Button should be enabled after providing valid credential
  173 |         await expect(this.loginPage.button).toBeEnabled();
  174 |         await this.loginPage.button.click();
  175 |         await this.loginPage.firstProduct.first().click()
  176 |         await expect(this.loginPage.Ordertotal).toBeVisible()
  177 |         await this.loginPage.logoutButton.click()
  178 |         await this.loginPage.loginLink.click()
  179 |         await this.loginPage.username.fill(username);
  180 |         await this.loginPage.passwrod.fill(password);
  181 |          await this.loginPage.button.click();
  182 |         await expect(this.loginPage.Ordertotal).toBeVisible()
  183 |     }   
  184 |     //spacevalid
  185 |        async loginSpaceUser(loginData: LoginDetails)
  186 |     {
  187 |         // click the login link
  188 |         await this.loginPage.loginLink.click();
  189 |         await this.loginPage.page.waitForLoadState('networkidle');
  190 |         //verify Login Page Title
  191 |         await expect(this.loginPage.title).toBeVisible();
  192 |         // Provide Valid login Credential
  193 |         await this.loginPage.username.fill(loginData.Username);
  194 |         await this.loginPage.passwrod.fill(loginData.Password);
  195 |         // Verify Login Button should be enabled after providing valid credential
  196 |         await expect(this.loginPage.button).toBeEnabled();
  197 |         await this.loginPage.button.click();
  198 | 
  199 |         // verify user should login successfully
  200 |         await expect(this.loginPage.loginSuccessMessage).toBeVisible();
  201 |      
  202 | 
  203 |     }
  204 | 
  205 | }
  206 | 
```