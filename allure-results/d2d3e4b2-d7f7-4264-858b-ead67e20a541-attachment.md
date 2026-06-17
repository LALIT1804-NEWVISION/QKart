# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\checkout\checkout.spec.ts >> TC_03: Verify Successful Order Placement with Valid Address
- Location: tests\Qkart\checkout\checkout.spec.ts:25:5

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
- img "Dummy123"
- paragraph: Dummy123
- button "Logout"
- heading "Shipping" [level=4]
- paragraph: Manage all the shipping addresses you want.This way you won 't have to enter the shipping address manually with every order.Select the address you want to get your order delivered.
- separator
- radio [checked]
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
- paragraph: Address 2:H.NO 45, Jubilee hills, Hyderabad.
- button "Delete":
  - paragraph: Delete
- button "Add new address"
- heading "Payment" [level=4]
- paragraph: Payment Method
- separator
- paragraph: Wallet
- paragraph: Pay $ 780 of available $ 30
- button "PLACE ORDER"
- img "Stylecon 9 Seater RHS Sofa Set"
- text: "Stylecon 9 Seater RHS Sofa Set Qty: 1 $650"
- img "Roadster Mens Running Shoes"
- text: "Roadster Mens Running Shoes Qty: 1 $30"
- img "YONEX Smash Badminton Racquet"
- text: "YONEX Smash Badminton Racquet Qty: 1 $100 Order total $780"
- heading "Order Details" [level=2]
- paragraph: Products
- paragraph: "3"
- paragraph: Subtotal
- paragraph: $780
- paragraph: Shipping Charges
- paragraph: $0
- paragraph: Total
- paragraph: $780
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
- alert: You do not have enough balance in your wallet for this purchase
```

# Test source

```ts
  1  | import {CheckoutPage} from "../../pages/checkout/checkoutPage";
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
  32 |         await this.checkoutPage.placeOrderBtn.click();
  33 |     }
  34 | 
  35 |     async verifyOrderSuccess(){
> 36 |         await expect(this.checkoutPage.successMsg).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  37 |     }
  38 |     
  39 |     async verifyPlaceOrderDisabled(){
  40 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  41 |     }
  42 | }
```