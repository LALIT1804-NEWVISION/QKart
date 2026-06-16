# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC_02:Verify Selecting a Shipping Address
- Location: tests\checkout.spec.ts:15:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001') resolved to 4 elements:
    1) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').first()
    2) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(1)
    3) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(2)
    4) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(3)

Call log:
  - waiting for getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001')

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
      - generic [ref=e19]:
        - generic [ref=e20] [cursor=pointer]:
          - generic [ref=e21]:
            - generic [ref=e22]:
              - radio [ref=e23]
              - img [ref=e25]
            - paragraph [ref=e27]: Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001
          - button "Delete" [ref=e29]:
            - img [ref=e31]
            - paragraph [ref=e33]: Delete
        - generic [ref=e34] [cursor=pointer]:
          - generic [ref=e35]:
            - generic [ref=e36]:
              - radio [ref=e37]
              - img [ref=e39]
            - paragraph [ref=e41]: Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001
          - button "Delete" [ref=e43]:
            - img [ref=e45]
            - paragraph [ref=e47]: Delete
        - generic [ref=e48] [cursor=pointer]:
          - generic [ref=e49]:
            - generic [ref=e50]:
              - radio [ref=e51]
              - img [ref=e53]
            - paragraph [ref=e55]: Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001
          - button "Delete" [ref=e57]:
            - img [ref=e59]
            - paragraph [ref=e61]: Delete
        - generic [ref=e62] [cursor=pointer]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - radio [ref=e65]
              - img [ref=e67]
            - paragraph [ref=e69]: Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001
          - button "Delete" [ref=e71]:
            - img [ref=e73]
            - paragraph [ref=e75]: Delete
      - button "Add new address" [ref=e76] [cursor=pointer]: Add new address
      - heading "Payment" [level=4] [ref=e77]
      - paragraph [ref=e78]: Payment Method
      - separator [ref=e79]
      - generic [ref=e80]:
        - paragraph [ref=e81]: Wallet
        - paragraph [ref=e82]: Pay $ 780 of available $ 1390
      - button "PLACE ORDER" [disabled]:
        - generic:
          - img
        - text: PLACE ORDER
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e86]:
          - img "Roadster Mens Running Shoes" [ref=e88]
          - generic [ref=e89]:
            - generic [ref=e90]: Roadster Mens Running Shoes
            - generic [ref=e91]:
              - generic [ref=e92]: "Qty: 1"
              - generic [ref=e93]: $30
        - generic [ref=e95]:
          - img "YONEX Smash Badminton Racquet" [ref=e97]
          - generic [ref=e98]:
            - generic [ref=e99]: YONEX Smash Badminton Racquet
            - generic [ref=e100]:
              - generic [ref=e101]: "Qty: 1"
              - generic [ref=e102]: $100
        - generic [ref=e104]:
          - img "Stylecon 9 Seater RHS Sofa Set" [ref=e106]
          - generic [ref=e107]:
            - generic [ref=e108]: Stylecon 9 Seater RHS Sofa Set
            - generic [ref=e109]:
              - generic [ref=e110]: "Qty: 1"
              - generic [ref=e111]: $650
        - generic [ref=e112]:
          - generic [ref=e113]: Order total
          - generic [ref=e114]: $780
      - generic [ref=e115]:
        - heading "Order Details" [level=2] [ref=e116]
        - generic [ref=e117]:
          - paragraph [ref=e118]: Products
          - paragraph [ref=e119]: "3"
        - generic [ref=e120]:
          - paragraph [ref=e121]: Subtotal
          - paragraph [ref=e122]: $780
        - generic [ref=e123]:
          - paragraph [ref=e124]: Shipping Charges
          - paragraph [ref=e125]: $0
        - generic [ref=e126]:
          - paragraph [ref=e127]: Total
          - paragraph [ref=e128]: $780
  - generic [ref=e129]:
    - img "QKart-icon" [ref=e131]
    - paragraph [ref=e132]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e133]:
      - paragraph [ref=e134] [cursor=pointer]:
        - link "Privacy policy" [ref=e135]:
          - /url: privacy-policy
      - paragraph [ref=e136] [cursor=pointer]:
        - link "About us" [ref=e137]:
          - /url: aboutus
      - paragraph [ref=e138] [cursor=pointer]: Contact us
      - paragraph [ref=e139] [cursor=pointer]:
        - link "Terms of Service" [ref=e140]:
          - /url: terms-of-service
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
> 24 |         await this.checkoutPage.selectAddress(address).click();
     |                                                        ^ Error: locator.click: Error: strict mode violation: getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore - 560001') resolved to 4 elements:
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