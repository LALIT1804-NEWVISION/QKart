# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\checkout\checkout.spec.ts >> TC_03: Verify Successful Order Placement with Valid Address
- Location: tests\Qkart\checkout\checkout.spec.ts:23:5

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
  8  | import { SearchAction } from '../actions/searchAction/searchAction';
  9  | import { ProductAction } from '../actions/ProductListing/productAction';
  10 | import { CheckoutAction } from "../actions/checkoutAction/checkoutAction";
  11 | 
  12 | 
  13 | 
  14 | type AppActions = {
  15 |     login: loginAction;
  16 |     footer: FooterAction;
  17 |     register: RegistrationAction;
  18 |     cart: CartAction;
  19 |     search: SearchAction
  20 |     product: ProductAction;
  21 |     checkout: CheckoutAction;
  22 | 
  23 |    
  24 | 
  25 | };
  26 | 
  27 | type Fixtures = {
  28 |     gotoBaseUrl: void;
  29 |     appAction: AppActions;
  30 | };
  31 | 
  32 | export const test = base.extend<Fixtures>({
  33 |     gotoBaseUrl: [
  34 |         async ({ page }, use) => {
  35 |             await page.goto(RegistrationData.baseUrl);
  36 |             await expect(page).toHaveURL(RegistrationData.baseUrl);
  37 |             await use();
  38 |         },
  39 |         { auto: true },
  40 |     ],
  41 | 
  42 |     appAction: async ({ page }, use) => {
  43 |     
> 44 |         await page.goto(loginData.BaseURL);
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  45 |  
  46 |         const appAction: AppActions = {
  47 |             login: new loginAction(page),
  48 |             footer: new FooterAction(page),
  49 |             register: new RegistrationAction(page),
  50 |             cart: new CartAction(page),
  51 |             search: new SearchAction(page),
  52 |             product: new ProductAction(page),
  53 |            checkout: new CheckoutAction(page)
  54 | 
  55 |         };
  56 |         await use(appAction);
  57 |     },
  58 | });
  59 | 
  60 | export { expect } from "@playwright/test";
```