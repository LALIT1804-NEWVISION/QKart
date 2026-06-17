# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> Login_07 Verify the login after refersh
- Location: tests\Qkart\loginSpec\login.spec.ts:52:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://crio-qkart-frontend-qa.vercel.app/", waiting until "load"

```

# Test source

```ts
  1  | import { test as base, expect } from "@playwright/test";
  2  | import { loginAction } from "../actions/loginAction/loginAction";
  3  | import loginData from "../testdata/login.json";
  4  | import { FooterAction } from "../actions/footerAction/footerAction";
  5  | import { RegistrationAction } from '../actions/RegistrationAction/registrationAction';
  6  | import RegistrationData from "../testdata/registrationData.json";
  7  | import { CartAction } from "../actions/cartAction/cartAction";
  8  | 
  9  | type AppActions = {
  10 |     login: loginAction;
  11 |     footer: FooterAction;
  12 |     register: RegistrationAction;
  13 |     cart: CartAction;
  14 |    
  15 | 
  16 | };
  17 | 
  18 | type Fixtures = {
  19 |     gotoBaseUrl: void;
  20 |     appAction: AppActions;
  21 | };
  22 | 
  23 | export const test = base.extend<Fixtures>({
  24 |     gotoBaseUrl: [
  25 |         async ({ page }, use) => {
> 26 |             await page.goto(RegistrationData.baseUrl);
     |                        ^ Error: page.goto: Target page, context or browser has been closed
  27 |             await expect(page).toHaveURL(RegistrationData.baseUrl);
  28 |             await use();
  29 |         },
  30 |         { auto: true },
  31 |     ],
  32 | 
  33 |     appAction: async ({ page }, use) => {
  34 |     
  35 |         await page.goto(loginData.BaseURL);
  36 |  
  37 |         const appAction: AppActions = {
  38 |             login: new loginAction(page),
  39 |             footer: new FooterAction(page),
  40 |             register: new RegistrationAction(page),
  41 |             cart: new CartAction(page)
  42 |         };
  43 |         await use(appAction);
  44 |     },
  45 | });
  46 | 
  47 | export { expect } from "@playwright/test";
```