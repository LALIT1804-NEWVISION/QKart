# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\productListing\productlisting.spec.ts >> TC-002-Product Listing: User Login with Valid Credentials
- Location: tests\Qkart\productListing\productlisting.spec.ts:9:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://crio-qkart-frontend-qa.vercel.app/
Call log:
  - navigating to "https://crio-qkart-frontend-qa.vercel.app/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import { test as base, expect, Page } from '@playwright/test';
  2  | import { RegisterationAction } from '../actions/RegistrationAction/registrationAction';
  3  | import { ProductAction } from '../actions/ProductListing/productAction';
  4  | import RegisterationData from "../testdata/registrationData.json";
  5  | 
  6  | 
  7  | type AppActions = {
  8  |     register: RegisterationAction;
  9  |     product: ProductAction;
  10 | 
  11 | };
  12 | 
  13 | type Fixtures = {
  14 |     gotoBaseUrl: void;
  15 |     appAction: AppActions;
  16 | };
  17 | 
  18 | export const test = base.extend<Fixtures>({
  19 |     gotoBaseUrl: [
  20 |         async ({ page }, use) => {
> 21 |             await page.goto(RegisterationData.baseUrl);
     |                        ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://crio-qkart-frontend-qa.vercel.app/
  22 |             await expect(page).toHaveURL(RegisterationData.baseUrl);
  23 |             await use();
  24 |         },
  25 |         { auto: true },
  26 |     ],
  27 | 
  28 |     appAction: async ({ page }, use) => {
  29 |         const appAction: AppActions = {
  30 |             register: new RegisterationAction(page), 
  31 |             product: new ProductAction(page),
  32 |         };
  33 |         await use(appAction);
  34 |     },
  35 | });
  36 | 
  37 | export { expect } from "@playwright/test";
  38 | 
  39 | 
```