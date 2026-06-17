# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> TC006_Verify Address is deleted successfully
- Location: tests\checkout.spec.ts:59:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('xpath=(//div[@class=\'MuiBox-root css-0\'])[position()=1]').first().locator('xpath=(//*[@data-testid="DeleteIcon"])') resolved to 17 elements:
    1) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka getByRole('button', { name: 'Delete' }).first()
    2) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka getByRole('button', { name: 'Delete' }).nth(1)
    3) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka getByRole('button', { name: 'Delete' }).nth(2)
    4) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka getByRole('button', { name: 'Delete' }).nth(3)
    5) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka getByRole('button', { name: 'Delete' }).nth(4)
    6) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka getByRole('button', { name: 'Delete' }).nth(5)
    7) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka locator('div:nth-child(7) > div:nth-child(2) > .MuiButton-root')
    8) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka locator('div:nth-child(8) > div:nth-child(2) > .MuiButton-root')
    9) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka locator('div:nth-child(9) > div:nth-child(2) > .MuiButton-root')
    10) <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv">…</svg> aka locator('div:nth-child(10) > div:nth-child(2) > .MuiButton-root')
    ...

Call log:
  - waiting for locator('xpath=(//div[@class=\'MuiBox-root css-0\'])[position()=1]').first().locator('xpath=(//*[@data-testid="DeleteIcon"])')

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
        - generic [ref=e132] [cursor=pointer]:
          - generic [ref=e133]:
            - generic [ref=e134]:
              - radio [ref=e135]
              - img [ref=e137]
            - paragraph [ref=e139]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e141]:
            - img [ref=e143]
            - paragraph [ref=e145]: Delete
        - generic [ref=e146] [cursor=pointer]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - radio [ref=e149]
              - img [ref=e151]
            - paragraph [ref=e153]: Address 2:H.NO 45, Jubilee hills,Hyderabad.
          - button "Delete" [ref=e155]:
            - img [ref=e157]
            - paragraph [ref=e159]: Delete
        - generic [ref=e160] [cursor=pointer]:
          - generic [ref=e161]:
            - generic [ref=e162]:
              - radio [ref=e163]
              - img [ref=e165]
            - paragraph [ref=e167]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e169]:
            - img [ref=e171]
            - paragraph [ref=e173]: Delete
        - generic [ref=e174] [cursor=pointer]:
          - generic [ref=e175]:
            - generic [ref=e176]:
              - radio [ref=e177]
              - img [ref=e179]
            - paragraph [ref=e181]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e183]:
            - img [ref=e185]
            - paragraph [ref=e187]: Delete
        - generic [ref=e188] [cursor=pointer]:
          - generic [ref=e189]:
            - generic [ref=e190]:
              - radio [ref=e191]
              - img [ref=e193]
            - paragraph [ref=e195]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e197]:
            - img [ref=e199]
            - paragraph [ref=e201]: Delete
        - generic [ref=e202] [cursor=pointer]:
          - generic [ref=e203]:
            - generic [ref=e204]:
              - radio [ref=e205]
              - img [ref=e207]
            - paragraph [ref=e209]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e211]:
            - img [ref=e213]
            - paragraph [ref=e215]: Delete
        - generic [ref=e216] [cursor=pointer]:
          - generic [ref=e217]:
            - generic [ref=e218]:
              - radio [ref=e219]
              - img [ref=e221]
            - paragraph [ref=e223]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e225]:
            - img [ref=e227]
            - paragraph [ref=e229]: Delete
        - generic [ref=e230] [cursor=pointer]:
          - generic [ref=e231]:
            - generic [ref=e232]:
              - radio [ref=e233]
              - img [ref=e235]
            - paragraph [ref=e237]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e239]:
            - img [ref=e241]
            - paragraph [ref=e243]: Delete
        - generic [ref=e244] [cursor=pointer]:
          - generic [ref=e245]:
            - generic [ref=e246]:
              - radio [ref=e247]
              - img [ref=e249]
            - paragraph [ref=e251]: Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001
          - button "Delete" [ref=e253]:
            - img [ref=e255]
            - paragraph [ref=e257]: Delete
      - button "Add new address" [ref=e258] [cursor=pointer]: Add new address
      - heading "Payment" [level=4] [ref=e259]
      - paragraph [ref=e260]: Payment Method
      - separator [ref=e261]
      - generic [ref=e262]:
        - paragraph [ref=e263]: Wallet
        - paragraph [ref=e264]: Pay $ 30 of available $ 4080
      - button "PLACE ORDER" [disabled]:
        - generic:
          - img
        - text: PLACE ORDER
    - generic [ref=e265]:
      - generic [ref=e266]:
        - generic [ref=e268]:
          - img "Roadster Mens Running Shoes" [ref=e270]
          - generic [ref=e271]:
            - generic [ref=e272]: Roadster Mens Running Shoes
            - generic [ref=e273]:
              - generic [ref=e274]: "Qty: 1"
              - generic [ref=e275]: $30
        - generic [ref=e276]:
          - generic [ref=e277]: Order total
          - generic [ref=e278]: $30
      - generic [ref=e279]:
        - heading "Order Details" [level=2] [ref=e280]
        - generic [ref=e281]:
          - paragraph [ref=e282]: Products
          - paragraph [ref=e283]: "1"
        - generic [ref=e284]:
          - paragraph [ref=e285]: Subtotal
          - paragraph [ref=e286]: $30
        - generic [ref=e287]:
          - paragraph [ref=e288]: Shipping Charges
          - paragraph [ref=e289]: $0
        - generic [ref=e290]:
          - paragraph [ref=e291]: Total
          - paragraph [ref=e292]: $30
  - generic [ref=e293]:
    - img "QKart-icon" [ref=e295]
    - paragraph [ref=e296]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
    - generic [ref=e297]:
      - paragraph [ref=e298] [cursor=pointer]:
        - link "Privacy policy" [ref=e299]:
          - /url: privacy-policy
      - paragraph [ref=e300] [cursor=pointer]:
        - link "About us" [ref=e301]:
          - /url: aboutus
      - paragraph [ref=e302] [cursor=pointer]: Contact us
      - paragraph [ref=e303] [cursor=pointer]:
        - link "Terms of Service" [ref=e304]:
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
> 65 |         await this.checkoutPage.deleteAddressButton(0).click();
     |                                                        ^ Error: locator.click: Error: strict mode violation: locator('xpath=(//div[@class=\'MuiBox-root css-0\'])[position()=1]').first().locator('xpath=(//*[@data-testid="DeleteIcon"])') resolved to 17 elements:
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