# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC005_Verify Cart is cleared After Successfully Order Placement
- Location: tests\checkout.spec.ts:44:5

# Error details

```
Test timeout of 30000ms exceeded while setting up "gotoBaseUrl".
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://crio-qkart-frontend-qa.vercel.app/", waiting until "load"

```

# Test source

```ts
  1  | import { test as base, expect, Page } from '@playwright/test';
  2  | import {RegisterationAction} from "../actions/RegistrationAction/registrationAction";
  3  | import RegisterationData from "../testdata/registrationData.json";
  4  | import { CartAction } from '../actions/cartAction/cartAction';
  5  | import loginData from '../testdata/login.json';
  6  | import { loginAction } from '../actions/loginAction/loginAction';
  7  | import { CheckoutAction } from "../actions/checkoutAction";
  8  | 
  9  | type AppActions = {
  10 |     register: RegisterationAction;
  11 |     cart: CartAction;
  12 |     login: loginAction;
  13 |     checkout: CheckoutAction;
  14 | };
  15 | 
  16 | type Fixtures = {
  17 |     gotoBaseUrl: void;
  18 |     appAction: AppActions;
  19 | };
  20 | 
  21 | export const test = base.extend<Fixtures>({
  22 |     gotoBaseUrl: [
  23 |         async ({ page }, use) => {
> 24 |             await page.goto(RegisterationData.baseUrl);
     |                        ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  25 |             await expect(page).toHaveURL(RegisterationData.baseUrl);
  26 |             await use();
  27 |         },
  28 |         { auto: true },
  29 |     ],
  30 | 
  31 |     appAction: async ({ page }, use) => {
  32 |         const appAction: AppActions = {
  33 |             register: new RegisterationAction(page),
  34 |             cart: new CartAction(page),
  35 |             login: new loginAction(page),
  36 |             checkout: new CheckoutAction(page)
  37 |         };
  38 |         await use(appAction);
  39 |     },
  40 | });
  41 | 
  42 | export { expect } from "@playwright/test";
  43 | 
  44 | 
```