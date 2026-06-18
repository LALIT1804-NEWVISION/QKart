# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC006_Verify Address is deleted successfully
- Location: tests\checkout.spec.ts:58:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('xpath=(//div[@class=\'MuiBox-root css-0\'])[position()=1]')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('xpath=(//div[@class=\'MuiBox-root css-0\'])[position()=1]')
    14 × locator resolved to 1 element
       - unexpected value "1"

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
      - generic [ref=e20] [cursor=pointer]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - radio [ref=e23]
            - img [ref=e25]
          - paragraph [ref=e27]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
        - button "Delete" [ref=e29]:
          - img [ref=e31]
          - paragraph [ref=e33]: Delete
      - button "Add new address" [ref=e34] [cursor=pointer]: Add new address
      - heading "Payment" [level=4] [ref=e35]
      - paragraph [ref=e36]: Payment Method
      - separator [ref=e37]
      - generic [ref=e38]:
        - paragraph [ref=e39]: Wallet
        - paragraph [ref=e40]: Pay $ 130 of available $ 30
      - button "PLACE ORDER" [ref=e41] [cursor=pointer]:
        - img [ref=e43]
        - text: PLACE ORDER
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e48]:
          - img "YONEX Smash Badminton Racquet" [ref=e50]
          - generic [ref=e51]:
            - generic [ref=e52]: YONEX Smash Badminton Racquet
            - generic [ref=e53]:
              - generic [ref=e54]: "Qty: 1"
              - generic [ref=e55]: $100
        - generic [ref=e57]:
          - img "Roadster Mens Running Shoes" [ref=e59]
          - generic [ref=e60]:
            - generic [ref=e61]: Roadster Mens Running Shoes
            - generic [ref=e62]:
              - generic [ref=e63]: "Qty: 1"
              - generic [ref=e64]: $30
        - generic [ref=e65]:
          - generic [ref=e66]: Order total
          - generic [ref=e67]: $130
      - generic [ref=e68]:
        - heading "Order Details" [level=2] [ref=e69]
        - generic [ref=e70]:
          - paragraph [ref=e71]: Products
          - paragraph [ref=e72]: "2"
        - generic [ref=e73]:
          - paragraph [ref=e74]: Subtotal
          - paragraph [ref=e75]: $130
        - generic [ref=e76]:
          - paragraph [ref=e77]: Shipping Charges
          - paragraph [ref=e78]: $0
        - generic [ref=e79]:
          - paragraph [ref=e80]: Total
          - paragraph [ref=e81]: $130
  - generic [ref=e82]:
    - img "QKart-icon" [ref=e84]
    - paragraph [ref=e85]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e86]:
      - paragraph [ref=e87] [cursor=pointer]:
        - link "Privacy policy" [ref=e88]:
          - /url: privacy-policy
      - paragraph [ref=e89] [cursor=pointer]:
        - link "About us" [ref=e90]:
          - /url: aboutus
      - paragraph [ref=e91] [cursor=pointer]: Contact us
      - paragraph [ref=e92] [cursor=pointer]:
        - link "Terms of Service" [ref=e93]:
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
  36 |         await expect(this.checkoutPage.successMsg).toBeVisible();
  37 |     }
  38 | 
  39 |      async navigateToCheckoutcart(){
  40 |         await this.page.goto("/checkout");
  41 |     }
  42 |     
  43 |     async verifyPlaceOrderDisabled(){
  44 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  45 |     }
  46 | 
  47 | 
  48 |     async verifyCartIsEmpty(){
  49 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  50 |     }
  51 | 
  52 |    
  53 |     async deleteAddress(){
  54 |         await this.checkoutPage.deleteAddressButton.click();
  55 |     }
  56 | 
  57 |     async verifyAddressDeleted(){
> 58 |         await expect(this.checkoutPage.addressList).toHaveCount(0);
     |                                                     ^ Error: expect(locator).toHaveCount(expected) failed
  59 |     }
  60 |         
  61 |     async verifyMultipleAddressAdded(){
  62 |         await expect(this.checkoutPage.addressList).toHaveCount(2);
  63 |     }
  64 | 
  65 |     async verifyValidationMessageForEmptyAddress(){
  66 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  67 |     }
  68 | }
```