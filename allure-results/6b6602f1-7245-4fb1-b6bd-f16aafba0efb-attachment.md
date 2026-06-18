# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\checkout\checkout.spec.ts >> TC_03: Verify Successful Order Placement with Valid Address
- Location: tests\Qkart\checkout\checkout.spec.ts:25:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - link "QKart-icon" [ref=e6] [cursor=pointer]:
      - /url: /
      - img "QKart-icon" [ref=e7]
    - generic [ref=e8]:
      - img "Dummy123" [ref=e10]
      - paragraph [ref=e11]: Dummy123
      - button "Logout" [ref=e12] [cursor=pointer]: Logout
  - generic [ref=e13]:
    - generic [ref=e15]:
      - heading "Shipping" [level=4] [ref=e16]
      - paragraph [ref=e17]: Manage all the shipping addresses you want.This way you won 't have to enter the shipping address manually with every order.Select the address you want to get your order delivered.
      - separator [ref=e18]
      - paragraph [ref=e20]: No addresses found for this account.Please add one to proceed
      - button "Add new address" [ref=e21] [cursor=pointer]: Add new address
      - heading "Payment" [level=4] [ref=e22]
      - paragraph [ref=e23]: Payment Method
      - separator [ref=e24]
      - generic [ref=e25]:
        - paragraph [ref=e26]: Wallet
        - paragraph [ref=e27]: Pay $ 780 of available $ 30
      - button "PLACE ORDER" [disabled]:
        - generic:
          - img
        - text: PLACE ORDER
    - generic [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e31]:
          - img "YONEX Smash Badminton Racquet" [ref=e33]
          - generic [ref=e34]:
            - generic [ref=e35]: YONEX Smash Badminton Racquet
            - generic [ref=e36]:
              - generic [ref=e37]: "Qty: 1"
              - generic [ref=e38]: $100
        - generic [ref=e40]:
          - img "Stylecon 9 Seater RHS Sofa Set" [ref=e42]
          - generic [ref=e43]:
            - generic [ref=e44]: Stylecon 9 Seater RHS Sofa Set
            - generic [ref=e45]:
              - generic [ref=e46]: "Qty: 1"
              - generic [ref=e47]: $650
        - generic [ref=e49]:
          - img "Roadster Mens Running Shoes" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]: Roadster Mens Running Shoes
            - generic [ref=e54]:
              - generic [ref=e55]: "Qty: 1"
              - generic [ref=e56]: $30
        - generic [ref=e57]:
          - generic [ref=e58]: Order total
          - generic [ref=e59]: $780
      - generic [ref=e60]:
        - heading "Order Details" [level=2] [ref=e61]
        - generic [ref=e62]:
          - paragraph [ref=e63]: Products
          - paragraph [ref=e64]: "3"
        - generic [ref=e65]:
          - paragraph [ref=e66]: Subtotal
          - paragraph [ref=e67]: $780
        - generic [ref=e68]:
          - paragraph [ref=e69]: Shipping Charges
          - paragraph [ref=e70]: $0
        - generic [ref=e71]:
          - paragraph [ref=e72]: Total
          - paragraph [ref=e73]: $780
  - generic [ref=e74]:
    - img "QKart-icon" [ref=e76]
    - paragraph [ref=e77]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e78]:
      - paragraph [ref=e79] [cursor=pointer]:
        - link "Privacy policy" [ref=e80]:
          - /url: privacy-policy
      - paragraph [ref=e81] [cursor=pointer]:
        - link "About us" [ref=e82]:
          - /url: aboutus
      - paragraph [ref=e83] [cursor=pointer]: Contact us
      - paragraph [ref=e84] [cursor=pointer]:
        - link "Terms of Service" [ref=e85]:
          - /url: terms-of-service
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
> 24 |         await this.checkoutPage.selectAddress(address).first().click();
     |                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  36 |         await expect(this.checkoutPage.successMsg).toBeVisible();
  37 |     }
  38 |     
  39 |     async verifyPlaceOrderDisabled(){
  40 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  41 |     }
  42 | }
```