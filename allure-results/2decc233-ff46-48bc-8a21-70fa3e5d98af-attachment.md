# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> TC_05 Verify login with a blank password
- Location: tests\Qkart\loginSpec\login.spec.ts:33:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[contains(text() , "Login")]')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - link "QKart-icon" [ref=e7] [cursor=pointer]:
      - /url: /
      - img "QKart-icon" [ref=e8]
    - generic [ref=e10]:
      - textbox "Search for items/categories" [ref=e11]
      - img [ref=e13]
      - group
    - generic [ref=e15]:
      - img "Dummy123" [ref=e17]
      - paragraph [ref=e18]: Dummy123
      - button "Logout" [ref=e19] [cursor=pointer]: Logout
  - generic [ref=e20]:
    - generic [ref=e21]:
      - paragraph [ref=e23]: India’ s FASTEST DELIVERY to your door step
      - generic [ref=e24]:
        - generic [ref=e26]:
          - img "Stylecon 9 Seater RHS Sofa Set" [ref=e27]
          - generic [ref=e28]:
            - paragraph [ref=e29]: Stylecon 9 Seater RHS Sofa Set
            - paragraph [ref=e30]: $650
            - img "3 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e32] [cursor=pointer]:
            - img [ref=e34]
            - text: Add to cart
        - generic [ref=e37]:
          - img "Thinking, Fast and Slow" [ref=e38]
          - generic [ref=e39]:
            - paragraph [ref=e40]: Thinking, Fast and Slow
            - paragraph [ref=e41]: $15
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: Add to cart
        - generic [ref=e48]:
          - img "YONEX Smash Badminton Racquet" [ref=e49]
          - generic [ref=e50]:
            - paragraph [ref=e51]: YONEX Smash Badminton Racquet
            - paragraph [ref=e52]: $100
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e54] [cursor=pointer]:
            - img [ref=e56]
            - text: Add to cart
        - generic [ref=e59]:
          - img "Roadster Mens Running Shoes" [ref=e60]
          - generic [ref=e61]:
            - paragraph [ref=e62]: Roadster Mens Running Shoes
            - paragraph [ref=e63]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
            - button "Size chart" [ref=e64] [cursor=pointer]: Size chart
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]: Size
              - generic [ref=e68]:
                - combobox "Size Size" [ref=e69] [cursor=pointer]:
                  - option "6" [selected]
                  - option "7"
                  - option "8"
                  - option "9"
                  - option "10"
                - img
            - button "Add to cart" [ref=e70] [cursor=pointer]:
              - img [ref=e72]
              - text: Add to cart
        - generic [ref=e75]:
          - img "Nike Mens Running Shoes" [ref=e76]
          - generic [ref=e77]:
            - paragraph [ref=e78]: Nike Mens Running Shoes
            - paragraph [ref=e79]: $80
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
            - button "Size chart" [ref=e80] [cursor=pointer]: Size chart
          - generic [ref=e81]:
            - generic [ref=e82]:
              - generic [ref=e83]: Size
              - generic [ref=e84]:
                - combobox [ref=e85] [cursor=pointer]:
                  - option "6" [selected]
                  - option "7"
                  - option "8"
                  - option "9"
                  - option "10"
                - img
            - button "Add to cart" [ref=e86] [cursor=pointer]:
              - img [ref=e88]
              - text: Add to cart
        - generic [ref=e91]:
          - img "Tan Leatherette Weekender Duffle" [ref=e92]
          - generic [ref=e93]:
            - paragraph [ref=e94]: Tan Leatherette Weekender Duffle
            - paragraph [ref=e95]: $150
            - img "4 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e97] [cursor=pointer]:
            - img [ref=e99]
            - text: Add to cart
        - generic [ref=e102]:
          - img "Yarine Floor Lamp" [ref=e103]
          - generic [ref=e104]:
            - paragraph [ref=e105]: Yarine Floor Lamp
            - paragraph [ref=e106]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e108] [cursor=pointer]:
            - img [ref=e110]
            - text: Add to cart
        - generic [ref=e113]:
          - img "Xtend Smart Watch" [ref=e114]
          - generic [ref=e115]:
            - paragraph [ref=e116]: Xtend Smart Watch
            - paragraph [ref=e117]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e119] [cursor=pointer]:
            - img [ref=e121]
            - text: Add to cart
        - generic [ref=e124]:
          - img "Plastic Balls" [ref=e125]
          - generic [ref=e126]:
            - paragraph [ref=e127]: Plastic Balls
            - paragraph [ref=e128]: $30
            - img "3 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e130] [cursor=pointer]:
            - img [ref=e132]
            - text: Add to cart
        - generic [ref=e135]:
          - img "Kindle" [ref=e136]
          - generic [ref=e137]:
            - paragraph [ref=e138]: Kindle
            - paragraph [ref=e139]: $30
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e141] [cursor=pointer]:
            - img [ref=e143]
            - text: Add to cart
        - generic [ref=e146]:
          - img "Connector" [ref=e147]
          - generic [ref=e148]:
            - paragraph [ref=e149]: Connector
            - paragraph [ref=e150]: $80
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e152] [cursor=pointer]:
            - img [ref=e154]
            - text: Add to cart
        - generic [ref=e157]:
          - img "Jenga" [ref=e158]
          - generic [ref=e159]:
            - paragraph [ref=e160]: Jenga
            - paragraph [ref=e161]: $120
            - img "5 Stars":
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - img
          - button "Add to cart" [ref=e163] [cursor=pointer]:
            - img [ref=e165]
            - text: Add to cart
    - generic [ref=e168]:
      - generic [ref=e170]:
        - img "Roadster Mens Running Shoes" [ref=e172]
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
      - generic [ref=e185]:
        - generic [ref=e186]: Order total
        - generic [ref=e187]: $30
      - button "Checkout" [ref=e189] [cursor=pointer]:
        - img [ref=e191]
        - text: Checkout
  - navigation "pagination navigation" [ref=e194]:
    - list [ref=e195]:
      - listitem [ref=e196]:
        - button "Go to previous page" [disabled]:
          - img
      - listitem [ref=e197]:
        - button "page 1" [ref=e198] [cursor=pointer]: "1"
      - listitem [ref=e199]:
        - button "Go to page 2" [ref=e200] [cursor=pointer]: "2"
      - listitem [ref=e201]:
        - button "Go to next page" [ref=e202] [cursor=pointer]:
          - img [ref=e203]
  - generic [ref=e205]:
    - img "QKart-icon" [ref=e207]
    - paragraph [ref=e208]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e209]:
      - paragraph [ref=e210] [cursor=pointer]:
        - link "Privacy policy" [ref=e211]:
          - /url: privacy-policy
      - paragraph [ref=e212] [cursor=pointer]:
        - link "About us" [ref=e213]:
          - /url: aboutus
      - paragraph [ref=e214] [cursor=pointer]: Contact us
      - paragraph [ref=e215] [cursor=pointer]:
        - link "Terms of Service" [ref=e216]:
          - /url: terms-of-service
```

# Test source

```ts
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
  63  |         await expect(this.loginPage.userCredentialValidation).toBeVisible();
  64  |         
  65  |         //await this.loginPage.page.context().storageState({path: 'authentication/user.json'});
  66  | 
  67  |     }
  68  | 
  69  |     async loginWithInvalidUsername(loginData:incorrectLoginDetails)
  70  |         {
  71  |         // click the login link
  72  |         await this.loginPage.loginLink.click();
  73  |         await this.loginPage.page.waitForLoadState('networkidle');
  74  | 
  75  |         // Provide Invalid login Credential
  76  |         await this.loginPage.username.fill(loginData.Username);
  77  |         await this.loginPage.passwrod.fill(loginData.Password);
  78  |         await this.loginPage.button.click();
  79  | 
  80  |         // verify user should not login successfully and verify error message
  81  |         await expect(this.loginPage.errorMessageIncorrectUsername).toBeVisible();
  82  |          
  83  |     }
  84  | 
  85  |     async loginWithInvalidPassword(loginData:incorrectPassword)
  86  |         {
  87  |         // click the login link
  88  |         await this.loginPage.loginLink.click();
  89  |         await this.loginPage.page.waitForLoadState('networkidle');
  90  | 
  91  |         // Provide Invalid login Credential
  92  |         await this.loginPage.username.fill(loginData.Username);
  93  |         await this.loginPage.passwrod.fill(loginData.Password);
  94  |         await this.loginPage.button.click();
  95  | 
  96  |         // verify user should not login successfully and verify error message
  97  |         await expect(this.loginPage.errorMessageIncorrectPassword).toBeVisible();
  98  |          
  99  |     }
  100 | 
  101 |     async loginWithBlankUsername(loginData:blankUsername)
  102 |         {
  103 |         // click the login link
  104 |         await this.loginPage.loginLink.click();
  105 |         await this.loginPage.page.waitForLoadState('networkidle');
  106 | 
  107 |         // Provide blank Username
  108 |         await this.loginPage.username.fill(loginData.Username);
  109 |         await this.loginPage.passwrod.fill(loginData.Password);
  110 |         await this.loginPage.button.click();
  111 | 
  112 |         // verify blank username error message should be visible
  113 |         await expect(this.loginPage.errorMessageBlankUsername).toBeVisible();
  114 |            
  115 |     } 
  116 |     
  117 |     async loginWithBlankPassword(loginData:blankPassword)
  118 |         {
  119 |         // click the login link
> 120 |         await this.loginPage.loginLink.click();
      |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  121 |         await this.loginPage.page.waitForLoadState('networkidle');
  122 | 
  123 |         // Provide blank Password
  124 |         await this.loginPage.username.fill(loginData.Username);
  125 |         await this.loginPage.passwrod.fill(loginData.Password);
  126 |         await this.loginPage.button.click();
  127 | 
  128 |         // verify blank password error message should be visible
  129 |         await expect(this.loginPage.errorMessageBlankPassword).toBeVisible();
  130 |            
  131 |     }  
  132 | 
  133 |     async logoutValidation(loginData: LoginDetails)
  134 |     {
  135 |         // click the login link
  136 |         await this.loginPage.loginLink.click();
  137 |         await this.loginPage.page.waitForLoadState('networkidle');
  138 |         //verify Login Page Title
  139 |         await expect(this.loginPage.title).toBeVisible();
  140 |         // Provide Valid login Credential
  141 |         await this.loginPage.username.fill(loginData.Username);
  142 |         await this.loginPage.passwrod.fill(loginData.Password);
  143 |         // Verify Login Button should be enabled
  144 |         await expect(this.loginPage.button).toBeEnabled();
  145 |         await this.loginPage.button.click();
  146 | 
  147 |         // verify user should login successfully
  148 |         await expect(this.loginPage.loginValidation).toBeVisible();
  149 |         // verify user credential should be correct
  150 |         await expect(this.loginPage.userCredentialValidation).toBeVisible();
  151 | 
  152 |         // Verify Logout Button should be enabled
  153 |         await expect(this.loginPage.logoutButton).toBeEnabled();
  154 | 
  155 |         //click on logout button
  156 |         await this.loginPage.logoutButton.click();
  157 | 
  158 |         // verify user should logout successfully verify login button
  159 |         await expect(this.loginPage.loginLink).toBeVisible();
  160 | 
  161 |     }   
  162 | }
  163 | 
```