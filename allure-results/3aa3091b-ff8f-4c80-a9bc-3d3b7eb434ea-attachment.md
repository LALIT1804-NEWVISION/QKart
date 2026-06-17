# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC005_Verify Cart is cleared After Successfully Order Placement
- Location: tests\checkout.spec.ts:44:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /thanks/
Received string:  "https://crio-qkart-frontend-qa.vercel.app/checkout"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://crio-qkart-frontend-qa.vercel.app/checkout"

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
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
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
- radio
- paragraph: Address 2:H.NO 45, Jubilee hills,Hyderabad.
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Address 2:H.NO 45, Jubilee hills,Hyderabad.
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Address 2:H.NO 45, Jubilee hills,Hyderabad.
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
- button "Delete":
  - paragraph: Delete
- radio
- paragraph: Address 2:H.NO 45, Jubilee hills,Hyderabad.
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
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
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
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
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
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
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
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
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
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
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
- radio
- paragraph: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
- button "Delete":
  - paragraph: Delete
- button "Add new address"
- heading "Payment" [level=4]
- paragraph: Payment Method
- separator
- paragraph: Wallet
- paragraph: Pay $ 30 of available $ 3810
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
  39 |        // await this.checkoutPage.placeOrderBtn.click();
  40 |     }
  41 | 
  42 |     async verifyOrderSuccess(){
  43 |         await expect(this.checkoutPage.successMsg).toBeVisible();
  44 |     }
  45 | 
  46 |      async navigateToCheckoutcart(){
  47 |         await this.page.goto("/checkout");
  48 |     }
  49 | 
  50 |     async verifyRedirectedToThanksPage(){
> 51 |         await expect(this.page).toHaveURL(/thanks/);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  52 | 
  53 |     }
  54 |     
  55 |     async navigateBacktoCheckout(){
  56 |         await this.page.goBack();
  57 |     }
  58 | 
  59 |       async verifyPlaceOrderDisabled(){
  60 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  61 | 
  62 |     }
  63 | 
  64 |     async verifyCartIsEmpty(){
  65 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  66 |     }
  67 | 
  68 |    
  69 |     async deleteAddress(){
  70 |         await this.checkoutPage.deleteAddressButton(0).click();
  71 |     }
  72 | 
  73 |     async verifyAddressDeleted(countBefore:number){
  74 |         const countAfter=await this.checkoutPage.addressList().count();
  75 |         expect(countAfter).toBeLessThan(countBefore);
  76 |     }
  77 |         
  78 |     async verifyMultipleAddressAdded(){
  79 | await expect (this.page.getByText(checkout.address1).first()).toBeVisible();
  80 | await expect (this.page.getByText(checkout.address2).first()).toBeVisible();
  81 |   }
  82 | 
  83 |     async verifyValidationMessageForEmptyAddress(){
  84 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  85 |     }
  86 | 
  87 |     async addEmptyAddress(){
  88 |         await this.checkoutPage.addNewAddressBtn.click();
  89 |         await this.checkoutPage.addressTextBox.fill("");
  90 |         await this.checkoutPage.addBtn.click();
  91 |     }
  92 | }
```