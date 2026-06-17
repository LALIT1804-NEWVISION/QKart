# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC005_Verify Cart is cleared After Successfully Order Placement
- Location: tests\checkout.spec.ts:44:5

# Error details

```
TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - link "QKart-icon" [ref=e6] [cursor=pointer]:
      - /url: /
      - img "QKart-icon" [ref=e7]
    - generic [ref=e8]:
      - img "Alexandrea35019" [ref=e10]
      - paragraph [ref=e11]: Alexandrea35019
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
            - paragraph [ref=e27]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e29]:
            - img [ref=e31]
            - paragraph [ref=e33]: Delete
        - generic [ref=e34] [cursor=pointer]:
          - generic [ref=e35]:
            - generic [ref=e36]:
              - radio [ref=e37]
              - img [ref=e39]
            - paragraph [ref=e41]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e43]:
            - img [ref=e45]
            - paragraph [ref=e47]: Delete
        - generic [ref=e48] [cursor=pointer]:
          - generic [ref=e49]:
            - generic [ref=e50]:
              - radio [ref=e51]
              - img [ref=e53]
            - paragraph [ref=e55]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e57]:
            - img [ref=e59]
            - paragraph [ref=e61]: Delete
        - generic [ref=e62] [cursor=pointer]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - radio [ref=e65]
              - img [ref=e67]
            - paragraph [ref=e69]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e71]:
            - img [ref=e73]
            - paragraph [ref=e75]: Delete
        - generic [ref=e76] [cursor=pointer]:
          - generic [ref=e77]:
            - generic [ref=e78]:
              - radio [ref=e79]
              - img [ref=e81]
            - paragraph [ref=e83]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e85]:
            - img [ref=e87]
            - paragraph [ref=e89]: Delete
        - generic [ref=e90] [cursor=pointer]:
          - generic [ref=e91]:
            - generic [ref=e92]:
              - radio [ref=e93]
              - img [ref=e95]
            - paragraph [ref=e97]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e99]:
            - img [ref=e101]
            - paragraph [ref=e103]: Delete
      - button "Add new address" [ref=e104] [cursor=pointer]: Add new address
      - heading "Payment" [level=4] [ref=e105]
      - paragraph [ref=e106]: Payment Method
      - separator [ref=e107]
      - generic [ref=e108]:
        - paragraph [ref=e109]: Wallet
        - paragraph [ref=e110]: Pay $ 30 of available $ 3675
      - button "PLACE ORDER" [active] [ref=e111] [cursor=pointer]:
        - img [ref=e113]
        - text: PLACE ORDER
    - generic [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e118]:
          - img "Roadster Mens Running Shoes" [ref=e120]
          - generic [ref=e121]:
            - generic [ref=e122]: Roadster Mens Running Shoes
            - generic [ref=e123]:
              - generic [ref=e124]: "Qty: 1"
              - generic [ref=e125]: $30
        - generic [ref=e126]:
          - generic [ref=e127]: Order total
          - generic [ref=e128]: $30
      - generic [ref=e129]:
        - heading "Order Details" [level=2] [ref=e130]
        - generic [ref=e131]:
          - paragraph [ref=e132]: Products
          - paragraph [ref=e133]: "1"
        - generic [ref=e134]:
          - paragraph [ref=e135]: Subtotal
          - paragraph [ref=e136]: $30
        - generic [ref=e137]:
          - paragraph [ref=e138]: Shipping Charges
          - paragraph [ref=e139]: $0
        - generic [ref=e140]:
          - paragraph [ref=e141]: Total
          - paragraph [ref=e142]: $30
  - generic [ref=e143]:
    - img "QKart-icon" [ref=e145]
    - paragraph [ref=e146]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e147]:
      - paragraph [ref=e148] [cursor=pointer]:
        - link "Privacy policy" [ref=e149]:
          - /url: privacy-policy
      - paragraph [ref=e150] [cursor=pointer]:
        - link "About us" [ref=e151]:
          - /url: aboutus
      - paragraph [ref=e152] [cursor=pointer]: Contact us
      - paragraph [ref=e153] [cursor=pointer]:
        - link "Terms of Service" [ref=e154]:
          - /url: terms-of-service
```

# Test source

```ts
  1   | import {CheckoutPage} from "../pages/checkoutPage";
  2   | import{Page,expect} from "@playwright/test";
  3   | import checkout from "../testdata/checkout.json";
  4   | 
  5   | 
  6   | export class CheckoutAction{
  7   |     page:Page;
  8   |     checkoutPage:CheckoutPage;
  9   | 
  10  |     constructor(page:Page){
  11  |         this.page=page;
  12  |         this.checkoutPage=new CheckoutPage(page);
  13  |     }
  14  | 
  15  |     async addNewAddress(address:string){
  16  |         await this.checkoutPage.addNewAddressBtn.click();
  17  |         await this.checkoutPage.addressTextBox.fill(address);
  18  |         await this.checkoutPage.addBtn.click();
  19  |     }
  20  | 
  21  |     async verifyAddressAdded(address:string){
  22  |         await expect(this.page.getByText(address).first()).toBeVisible();
  23  |     }
  24  | 
  25  |     async selectAddress(address:string){
  26  |         await this.checkoutPage.selectAddress(address).first().click();
  27  |     }
  28  | 
  29  |     async VerifyAddressSelected(address:string){
  30  |         await expect(this.checkoutPage.selectAddress(address).first()).toBeVisible();
  31  |     }
  32  | 
  33  |     // async placeOrder(){
  34  |     //     await Promise.all([
  35  |     //     this.page.waitForLoadState("networkidle"),
  36  |     //         this.checkoutPage.placeOrderBtn.click()
  37  |     //     ]);
  38  |     
  39  |     //    // await this.checkoutPage.placeOrderBtn.click();
  40  |     // }
  41  | 
  42  | 
  43  |     async placeOrder() {
  44  |     await this.checkoutPage.placeOrderBtn.click();
  45  | 
> 46  |     await this.page.waitForURL(/thanks/, {
      |                     ^ TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
  47  |         timeout: 10000
  48  |     });
  49  | }
  50  | 
  51  |     async verifyOrderSuccess(){
  52  |         await expect(this.checkoutPage.successMsg).toBeVisible();
  53  |     }
  54  | 
  55  |      async navigateToCheckoutcart(){
  56  |         await this.page.goto("/checkout");
  57  |     }
  58  | 
  59  |     // async verifyRedirectedToThanksPage(){
  60  |     //     await expect(this.page).toHaveURL(/thanks/);
  61  | 
  62  |     // }
  63  | 
  64  |     async verifyRedirectedToThanksPage() {
  65  |     await expect(this.page).toHaveURL(/thanks/);
  66  | }
  67  |     
  68  |     async navigateBacktoCheckout(){
  69  |         await this.page.goBack();
  70  |     }
  71  | 
  72  |       async verifyPlaceOrderDisabled(){
  73  |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  74  | 
  75  |     }
  76  | 
  77  |     async verifyCartIsEmpty(){
  78  |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  79  |     }
  80  | 
  81  |    
  82  |     async deleteAddress(){
  83  |         //await this.checkoutPage.deleteAddressButton(0).click();
  84  |             await this.page.getByTestId("DeleteIcon").first().click();
  85  | 
  86  |     }
  87  | 
  88  |     async verifyAddressDeleted(countBefore:number){
  89  |         const countAfter=await this.checkoutPage.addressList().count();
  90  |         expect(countAfter).toBeLessThan(countBefore);
  91  |     }
  92  | 
  93  |         
  94  |     async verifyMultipleAddressAdded(){
  95  | await expect (this.page.getByText(checkout.address1).first()).toBeVisible();
  96  | await expect (this.page.getByText(checkout.address2).first()).toBeVisible();
  97  |   }
  98  | 
  99  |     async verifyValidationMessageForEmptyAddress(){
  100 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  101 |     }
  102 | 
  103 |     async addEmptyAddress(){
  104 |         await this.checkoutPage.addNewAddressBtn.click();
  105 |         await this.checkoutPage.addressTextBox.fill("");
  106 |         await this.checkoutPage.addBtn.click();
  107 |     }
  108 | }
```