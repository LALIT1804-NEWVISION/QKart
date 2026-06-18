# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC007_Verify Multiple Address added successfully
- Location: tests\checkout.spec.ts:68:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001')
Expected: visible
Error: strict mode violation: getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001') resolved to 5 elements:
    1) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').first()
    2) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(1)
    3) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(2)
    4) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(3)
    5) <p class="MuiTypography-root MuiTypography-body1 css-yg30e6"> Flat No 12, Sunrise Apartments, MG Road, Bangalo…</p> aka getByText('Flat No 12, Sunrise').nth(4)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001')

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
            - paragraph [ref=e69]: Address 2:H.NO 45, Jubilee hills,Hyderabad.
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
            - paragraph [ref=e97]: Address 2:H.NO 45, Jubilee hills,Hyderabad.
          - button "Delete" [ref=e99]:
            - img [ref=e101]
            - paragraph [ref=e103]: Delete
        - generic [ref=e104] [cursor=pointer]:
          - generic [ref=e105]:
            - generic [ref=e106]:
              - radio [ref=e107]
              - img [ref=e109]
            - paragraph [ref=e111]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e113]:
            - img [ref=e115]
            - paragraph [ref=e117]: Delete
        - generic [ref=e118] [cursor=pointer]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - radio [ref=e121]
              - img [ref=e123]
            - paragraph [ref=e125]: Address 2:H.NO 45, Jubilee hills,Hyderabad.
          - button "Delete" [ref=e127]:
            - img [ref=e129]
            - paragraph [ref=e131]: Delete
      - button "Add new address" [ref=e132] [cursor=pointer]: Add new address
      - heading "Payment" [level=4] [ref=e133]
      - paragraph [ref=e134]: Payment Method
      - separator [ref=e135]
      - generic [ref=e136]:
        - paragraph [ref=e137]: Wallet
        - paragraph [ref=e138]: Pay $ 30 of available $ 4910
      - button "PLACE ORDER" [ref=e139] [cursor=pointer]:
        - img [ref=e141]
        - text: PLACE ORDER
    - generic [ref=e143]:
      - generic [ref=e144]:
        - generic [ref=e146]:
          - img "Roadster Mens Running Shoes" [ref=e148]
          - generic [ref=e149]:
            - generic [ref=e150]: Roadster Mens Running Shoes
            - generic [ref=e151]:
              - generic [ref=e152]: "Qty: 1"
              - generic [ref=e153]: $30
        - generic [ref=e154]:
          - generic [ref=e155]: Order total
          - generic [ref=e156]: $30
      - generic [ref=e157]:
        - heading "Order Details" [level=2] [ref=e158]
        - generic [ref=e159]:
          - paragraph [ref=e160]: Products
          - paragraph [ref=e161]: "1"
        - generic [ref=e162]:
          - paragraph [ref=e163]: Subtotal
          - paragraph [ref=e164]: $30
        - generic [ref=e165]:
          - paragraph [ref=e166]: Shipping Charges
          - paragraph [ref=e167]: $0
        - generic [ref=e168]:
          - paragraph [ref=e169]: Total
          - paragraph [ref=e170]: $30
  - generic [ref=e171]:
    - img "QKart-icon" [ref=e173]
    - paragraph [ref=e174]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e175]:
      - paragraph [ref=e176] [cursor=pointer]:
        - link "Privacy policy" [ref=e177]:
          - /url: privacy-policy
      - paragraph [ref=e178] [cursor=pointer]:
        - link "About us" [ref=e179]:
          - /url: aboutus
      - paragraph [ref=e180] [cursor=pointer]: Contact us
      - paragraph [ref=e181] [cursor=pointer]:
        - link "Terms of Service" [ref=e182]:
          - /url: terms-of-service
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
  39 |         await this.checkoutPage.placeOrderBtn.click();
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
  50 |     async verifyPlaceOrderDisabled(){
  51 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  52 |     }
  53 | 
  54 | 
  55 |     async verifyCartIsEmpty(){
  56 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
  57 |     }
  58 | 
  59 |    
  60 |     async deleteAddress(){
  61 |         await this.checkoutPage.deleteAddressButton(0).click();
  62 |     }
  63 | 
  64 |     async verifyAddressDeleted(countBefore:number){
  65 |         const countAfter=await this.checkoutPage.addressList().count();
  66 |         expect(countAfter).toBeLessThan(countBefore);
  67 |     }
  68 |         
  69 |     async verifyMultipleAddressAdded(){
> 70 | await expect (this.page.getByText(checkout.address1)).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  71 | await expect (this.page.getByText(checkout.address2)).toBeVisible();
  72 |   }
  73 | 
  74 |     async verifyValidationMessageForEmptyAddress(){
  75 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  76 |     }
  77 | }
```