# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\productListing\productlisting.spec.ts >> TC-001-Product Listing: Home Page Load and Navigation Verification
- Location: tests\Qkart\productListing\productlisting.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - link "QKart-icon" [ref=e7] [cursor=pointer]:
      - /url: /
      - img "QKart-icon" [ref=e8]
    - button "Back to explore" [ref=e9] [cursor=pointer]:
      - img [ref=e11]
      - text: Back to explore
  - generic [ref=e14]:
    - heading "Login" [level=2] [ref=e15]
    - generic "Username" [ref=e16]:
      - generic: Username
      - generic [ref=e17]:
        - textbox "Username" [ref=e18]:
          - /placeholder: Enter Username
        - group
    - generic [ref=e19]:
      - generic: Password
      - generic [ref=e20]:
        - textbox "Password" [ref=e21]:
          - /placeholder: Enter a password
        - group
    - button "Login to QKart" [ref=e22] [cursor=pointer]: Login to QKart
    - paragraph [ref=e23]:
      - text: Don't have an account?
      - link "Register now" [ref=e24] [cursor=pointer]:
        - /url: /register
  - generic [ref=e25]:
    - img "QKart-icon" [ref=e27]
    - paragraph [ref=e28]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e29]:
      - paragraph [ref=e30] [cursor=pointer]:
        - link "Privacy policy" [ref=e31]:
          - /url: privacy-policy
      - paragraph [ref=e32] [cursor=pointer]:
        - link "About us" [ref=e33]:
          - /url: aboutus
      - paragraph [ref=e34] [cursor=pointer]: Contact us
      - paragraph [ref=e35] [cursor=pointer]:
        - link "Terms of Service" [ref=e36]:
          - /url: terms-of-service
```

# Test source

```ts
  1  | import {test} from "../../../src/custom_fixture/fixture"
  2  | import { ProductAction  } from "../../../src/actions/ProductListing/productAction"
  3  | 
  4  | test("TC-001-Product Listing: Home Page Load and Navigation Verification", async ({page, appAction}) => {
  5  |     await appAction.product.verifyPageLoadState();
  6  |     await appAction.product.verifyLoginButtonVisibiltyAndNavigation();
> 7  |     await page.goto('/');
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  8  |     await appAction.product.verifyRegisterButtonVisibiltyAndNavigation();
  9  | })
  10 | 
```