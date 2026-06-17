# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC005_Verify Cart is cleared After Successfully Order Placement
- Location: tests\checkout.spec.ts:44:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'PLACE ORDER' })
    - locator resolved to <button disabled tabindex="-1" type="button" class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root Mui-disabled  css-177pwqq">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    97 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import {CheckoutPage} from "../pages/checkoutPage";
  2  | import{Page,expect} from "@playwright/test";
  3  | 
  4  | export class CheckoutAction{
  5  |     page:Page;
  6  |     checkoutPage:CheckoutPage;
  7  | 
  8  |     constructor(page:Page){
  9  |         this.page=page;
  10 |         this.checkoutPage=new CheckoutPage(page);
  11 |     }
  12 | 
  13 |     async addNewAddress(address:string){
  14 |         await this.checkoutPage.addNewAddressBtn.click();
  15 |         await this.checkoutPage.addressTextBox.fill(address);
  16 |         await this.checkoutPage.addBtn.click();
  17 |     }
  18 | 
  19 |     async verifyAddressAdded(address:string){
  20 |         await expect(this.page.getByText(address).first()).toBeVisible();
  21 |     }
  22 | 
  23 |     async selectAddress(address:string){
  24 |         await this.checkoutPage.selectAddress(address).first().click();
  25 |     }
  26 | 
  27 |     async VerifyAddressSelected(address:string){
  28 |         await expect(this.checkoutPage.selectAddress(address).first()).toBeVisible();
  29 |     }
  30 | 
  31 |     async placeOrder(){
> 32 |         await this.checkoutPage.placeOrderBtn.click();
     |                                               ^ Error: locator.click: Target page, context or browser has been closed
  33 |     }
  34 | 
  35 |     async verifyOrderSuccess(){
  36 |         await expect(this.checkoutPage.successMsg).toBeVisible();
  37 |     }
  38 |     
  39 |     async verifyPlaceOrderDisabled(){
  40 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  41 |     }
  42 | 
  43 | 
  44 |     async verifyCartIsEmpty(){
  45 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  46 |     }
  47 | 
  48 |     async deleteAddress(){
  49 |         await this.checkoutPage.deleteAddressButton.click();
  50 |     }
  51 | 
  52 |     async verifyAddressDeleted(){
  53 |         await expect(this.checkoutPage.addressList).toHaveCount(0);
  54 |     }
  55 |         
  56 |     async verifyMultipleAddressAdded(){
  57 |         await expect(this.checkoutPage.addressList).toHaveCount(2);
  58 |     }
  59 | 
  60 |     async verifyValidationMessageForEmptyAddress(){
  61 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  62 |     }
  63 | }
```