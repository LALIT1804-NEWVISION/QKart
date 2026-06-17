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
    - locator resolved to <button tabindex="0" type="button" class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-177pwqq">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Test source

```ts
  1  | import {CheckoutPage} from "../pages/checkoutPage";
  2  | import{Page,expect} from "@playwright/test";
  3  | import checkout from "../testdata/checkout.json";
  4  | 
  5  | 
  6  | export class CheckoutAction{
  7  |     page:Page;
  8  |     checkoutPage:CheckoutPage;
  9  | 
  10 |     constructor(page:Page){
  11 |         this.page=page;
  12 |         this.checkoutPage=new CheckoutPage(page);
  13 |     }
  14 | 
  15 |     async addNewAddress(address:string){
  16 |         await this.checkoutPage.addNewAddressBtn.click();
  17 |         await this.checkoutPage.addressTextBox.fill(address);
  18 |         await this.checkoutPage.addBtn.click();
  19 |     }
  20 | 
  21 |     async verifyAddressAdded(address:string){
  22 |         await expect(this.page.getByText(address).first()).toBeVisible();
  23 |     }
  24 | 
  25 |     async selectAddress(address:string){
  26 |         await this.checkoutPage.selectAddress(address).first().click();
  27 |     }
  28 | 
  29 |     async VerifyAddressSelected(address:string){
  30 |         await expect(this.checkoutPage.selectAddress(address).first()).toBeVisible();
  31 |     }
  32 | 
  33 |     async placeOrder(){
  34 |         await Promise.all([
  35 |         this.page.waitForLoadState("networkidle"),
  36 |             this.checkoutPage.placeOrderBtn.click()
  37 |         ]);
  38 |     
> 39 |         await this.checkoutPage.placeOrderBtn.click();
     |                                               ^ Error: locator.click: Target page, context or browser has been closed
  40 |     }
  41 | 
  42 |     async verifyOrderSuccess(){
  43 |         await expect(this.checkoutPage.ordersuccessMsg).toBeVisible();
  44 |     }
  45 | 
  46 |      async navigateToCheckoutcart(){
  47 |         await this.page.goto("/checkout");
  48 |     }
  49 |     
  50 |     async verifyPlaceOrderDisabled(){
  51 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  52 | 
  53 |     }
  54 | 
  55 |     async navigateBacktoCheckout(){
  56 |         await this.page.goBack();
  57 |     }
  58 | 
  59 |     async verifyCartIsEmpty(){
  60 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  61 |     }
  62 | 
  63 |    
  64 |     async deleteAddress(){
  65 |         await this.checkoutPage.deleteAddressButton(0).click();
  66 |     }
  67 | 
  68 |     async verifyAddressDeleted(countBefore:number){
  69 |         const countAfter=await this.checkoutPage.addressList().count();
  70 |         expect(countAfter).toBeLessThan(countBefore);
  71 |     }
  72 |         
  73 |     async verifyMultipleAddressAdded(){
  74 | await expect (this.page.getByText(checkout.address1).first()).toBeVisible();
  75 | await expect (this.page.getByText(checkout.address2).first()).toBeVisible();
  76 |   }
  77 | 
  78 |     async verifyValidationMessageForEmptyAddress(){
  79 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  80 |     }
  81 | 
  82 |     async addEmptyAddress(){
  83 |         await this.checkoutPage.addNewAddressBtn.click();
  84 |         await this.checkoutPage.addressTextBox.fill("");
  85 |         await this.checkoutPage.addBtn.click();
  86 |     }
  87 | }
```