# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\Registration\registration.spec.ts >> Registration Functionality >> REG_005 - Verify Username Minimum Length Validation
- Location: tests\Qkart\Registration\registration.spec.ts:28:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.error')
Expected substring: "Username must be at least 6 characters"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.error')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- button "Back to explore"
- heading "Register" [level=2]
- text: Username
- textbox "Username":
  - /placeholder: Enter Username
  - text: Sheli
- text: Password
- textbox "Password":
  - /placeholder: Enter a password with minimum 6 characters
  - text: Test@14791
- paragraph: Password must be atleast 6 characters length
- text: Confirm Password
- textbox "Confirm Password":
  - /placeholder: Re-enter your password to confirm
  - text: Test@14791
- button "Register Now"
- paragraph:
  - text: Already have an account?
  - link "Login here":
    - /url: /login
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
- alert: Username must be at least 6 characters
```

# Test source

```ts
  18  |   private generateUserData() {
  19  |     const randomNumber = faker.number.int({min: 10000,max: 99999,});
  20  |     return {
  21  |       username: `${faker.person.firstName()}${randomNumber}`,
  22  |       password: `Test@${randomNumber}`,
  23  |       confirmpassword: `Test@${randomNumber}`,
  24  |     };
  25  |   }
  26  | 
  27  |   private saveUserData(userData: any) {
  28  |     const existingUsers = Array.isArray(
  29  |       RegisterationData.generatedUserData
  30  |     )
  31  |       ? RegisterationData.generatedUserData
  32  |       : [];
  33  | 
  34  |     const updatedUsers =
  35  |       existingUsers.length >= 10
  36  |         ? [userData]
  37  |         : [...existingUsers, userData];
  38  | 
  39  |     const updatedJsonData = {
  40  |       ...RegisterationData,
  41  |       generatedUserData: updatedUsers,
  42  |     };
  43  | 
  44  |     writeFileSync(
  45  |       "src/testdata/registrationData.json",
  46  |       JSON.stringify(updatedJsonData, null, 2)
  47  |     );
  48  |   }
  49  | 
  50  |   async registeration_details() {
  51  |     const userData = this.generateUserData();
  52  |     this.saveUserData(userData);
  53  |     console.log("Username:", userData.username);
  54  |     console.log("Password:", userData.password);
  55  |     await this.registerationPage.Username.fill(userData.username);
  56  |     await this.registerationPage.password.fill(userData.password);
  57  |     await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
  58  |     await this.registerationPage.registerNowButton.click();
  59  |   }
  60  |   
  61  |   async registerWithBlankUsername() {
  62  |     const userData = this.generateUserData();
  63  |     await this.registerationPage.password.fill(userData.password);
  64  |     await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
  65  |     await this.registerationPage.registerNowButton.click();
  66  |   }
  67  | 
  68  |   async registerWithBlankPassword() {
  69  |     const userData = this.generateUserData();
  70  |     await this.registerationPage.Username.fill(userData.username);
  71  |     await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
  72  |     await this.registerationPage.registerNowButton.click();
  73  |   }
  74  |   async registerWithAllBlankFields() {
  75  |     await this.registerationPage.registerNowButton.click();
  76  |   }
  77  | 
  78  |   async registerWithShortUsername() {
  79  |     const userData = this.generateUserData();
  80  |     await this.registerationPage.Username.fill(userData.username.substring(0, 5));
  81  |     await this.registerationPage.password.fill(userData.password);
  82  |     await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
  83  |     await this.registerationPage.registerNowButton.click();
  84  |   }
  85  |   async registerWithShortPassword() {
  86  |     const userData = this.generateUserData();
  87  |     await this.registerationPage.Username.fill(userData.username);
  88  |     await this.registerationPage.password.fill("Pass1");
  89  |     await this.registerationPage.confirmPassword.fill("Pass1");
  90  |     await this.registerationPage.registerNowButton.click();
  91  |   }
  92  | 
  93  |  
  94  |   async registerWithPasswordMismatch() {
  95  |     const userData = this.generateUserData();
  96  |     await this.registerationPage.Username.fill(userData.username);
  97  |     await this.registerationPage.password.fill(userData.password);
  98  |     await this.registerationPage.confirmPassword.fill(`${userData.password}123`);
  99  |     await this.registerationPage.registerNowButton.click();
  100 |   }
  101 |   async registerWithExistingUsername() {
  102 |     const existingUsers = RegisterationData.generatedUserData;
  103 |     const existingUser =existingUsers && existingUsers.length > 0 ? existingUsers[0]: null;
  104 |     if (!existingUser) {
  105 |       throw new Error("No existing user found in registrationData.json");
  106 |     }
  107 |     await this.registerationPage.Username.fill(existingUser.username);
  108 |     await this.registerationPage.password.fill(existingUser.password);
  109 |     await this.registerationPage.confirmPassword.fill(existingUser.confirmpassword);
  110 |     await this.registerationPage.registerNowButton.click();
  111 |   }
  112 | 
  113 |   async verifyRegistrationSuccessMessage() {
  114 |     await expect(this.registerationPage.successMessage).toHaveText("Registered Successfully");
  115 |   }
  116 | 
  117 |   async verifyErrorMessage(message: string) {
> 118 |     await expect(this.registerationPage.errorMessage).toContainText(message);
      |                                                       ^ Error: expect(locator).toContainText(expected) failed
  119 |   }
  120 | }
  121 | 
  122 | 
```