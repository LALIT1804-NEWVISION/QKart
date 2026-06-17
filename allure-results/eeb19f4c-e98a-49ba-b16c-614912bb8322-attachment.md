# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC005_Verify Cart is cleared After Successfully Order Placement
- Location: tests\checkout.spec.ts:44:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Order placed successfully')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Order placed successfully')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- img "Alexandrea35019"
- paragraph: Alexandrea35019
- button "Logout"
- heading "Shipping" [level=4]
- paragraph: Manage all the shipping addresses you want.This way you won 't have to enter the shipping address manually with every order.Select the address you want to get your order delivered.
- separator
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
- button "Delete":
  - paragraph: Delete
- button "Add new address"
- heading "Payment" [level=4]
- paragraph: Payment Method
- separator
- paragraph: Wallet
- paragraph: Pay $ 30 of available $ 4910
- button "PLACE ORDER"
- img "Roadster Mens Running Shoes"
- text: "Roadster Mens Running Shoes Qty: 1 $30 Order total $30"
- heading "Order Details" [level=2]
- paragraph: Products
- paragraph: "1"
- paragraph: Subtotal
- paragraph: $30
- paragraph: Shipping Charges
- paragraph: $0
- paragraph: Total
- paragraph: $30
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
- alert: Please select one shipping address to proceed.
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
  32 |         await Promise.all([
  33 |         this.page.waitForLoadState("networkidle"),
  34 |             this.checkoutPage.placeOrderBtn.click()
  35 |         ]);
  36 |     
  37 |         await this.checkoutPage.placeOrderBtn.click();
  38 |     }
  39 | 
  40 |     async verifyOrderSuccess(){
> 41 |         await expect(this.checkoutPage.successMsg).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  42 |     }
  43 | 
  44 |      async navigateToCheckoutcart(){
  45 |         await this.page.goto("/checkout");
  46 |     }
  47 |     
  48 |     async verifyPlaceOrderDisabled(){
  49 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  50 |     }
  51 | 
  52 | 
  53 |     async verifyCartIsEmpty(){
  54 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  55 |     }
  56 | 
  57 |    
  58 |     async deleteAddress(){
  59 |         await this.checkoutPage.deleteAddressButton.click();
  60 |     }
  61 | 
  62 |     async verifyAddressDeleted(){
  63 |         await expect(this.checkoutPage.addressList).toHaveCount(0);
  64 |     }
  65 |         
  66 |     async verifyMultipleAddressAdded(){
  67 |         await expect(this.checkoutPage.addressList).toHaveCount(2);
  68 |     }
  69 | 
  70 |     async verifyValidationMessageForEmptyAddress(){
  71 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  72 |     }
  73 | }
```