# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\checkout\checkout.spec.ts >> TC005_Verify Cart is cleared After Successfully Order Placement
- Location: tests\Qkart\checkout\checkout.spec.ts:42:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[text()="Cart is empty. Add more items to the cart to checkout."]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[text()="Cart is empty. Add more items to the cart to checkout."]')

```

```yaml
- link "QKart-icon":
  - /url: /
  - img "QKart-icon"
- textbox "Search for items/categories"
- img "Alexandrea35019"
- paragraph: Alexandrea35019
- button "Logout"
- paragraph: India’ s FASTEST DELIVERY to your door step
- img "Stylecon 9 Seater RHS Sofa Set"
- paragraph: Stylecon 9 Seater RHS Sofa Set
- paragraph: $650
- img "3 Stars"
- button "Add to cart"
- img "Thinking, Fast and Slow"
- paragraph: Thinking, Fast and Slow
- paragraph: $15
- img "5 Stars"
- button "Add to cart"
- img "YONEX Smash Badminton Racquet"
- paragraph: YONEX Smash Badminton Racquet
- paragraph: $100
- img "5 Stars"
- button "Add to cart"
- img "Roadster Mens Running Shoes"
- paragraph: Roadster Mens Running Shoes
- paragraph: $30
- img "5 Stars"
- button "Size chart"
- text: Size
- combobox "Size Size":
  - option "6" [selected]
  - option "7"
  - option "8"
  - option "9"
  - option "10"
- button "Add to cart"
- img "Nike Mens Running Shoes"
- paragraph: Nike Mens Running Shoes
- paragraph: $80
- img "5 Stars"
- button "Size chart"
- text: Size
- combobox:
  - option "6" [selected]
  - option "7"
  - option "8"
  - option "9"
  - option "10"
- button "Add to cart"
- img "Tan Leatherette Weekender Duffle"
- paragraph: Tan Leatherette Weekender Duffle
- paragraph: $150
- img "4 Stars"
- button "Add to cart"
- img "Yarine Floor Lamp"
- paragraph: Yarine Floor Lamp
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Xtend Smart Watch"
- paragraph: Xtend Smart Watch
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Plastic Balls"
- paragraph: Plastic Balls
- paragraph: $30
- img "3 Stars"
- button "Add to cart"
- img "Kindle"
- paragraph: Kindle
- paragraph: $30
- img "5 Stars"
- button "Add to cart"
- img "Connector"
- paragraph: Connector
- paragraph: $80
- img "5 Stars"
- button "Add to cart"
- img "Jenga"
- paragraph: Jenga
- paragraph: $120
- img "5 Stars"
- button "Add to cart"
- img "Roadster Mens Running Shoes"
- text: Roadster Mens Running Shoes
- button
- text: "1"
- button
- text: $30 Order total $30
- button "Checkout"
- navigation "pagination navigation":
  - list:
    - listitem:
      - button "Go to previous page" [disabled]
    - listitem:
      - button "page 1": "1"
    - listitem:
      - button "Go to page 2": "2"
    - listitem:
      - button "Go to next page"
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
```

# Test source

```ts
  1  | import {CheckoutPage} from "../../pages/checkout/checkoutPage";
  2  | import{Page,expect} from "@playwright/test";
  3  | import checkout from "../../../src/testdata/checkout.json";
  4  | 
  5  | export class CheckoutAction{
  6  |     page:Page;
  7  |     checkoutPage:CheckoutPage;
  8  | 
  9  |     constructor(page:Page){
  10 |         this.page=page;
  11 |         this.checkoutPage=new CheckoutPage(page);
  12 |     }
  13 | 
  14 |     async addNewAddress(address:string){
  15 |         await this.checkoutPage.addNewAddressBtn.click();
  16 |         await this.checkoutPage.addressTextBox.fill(address);
  17 |         await this.checkoutPage.addBtn.click();
  18 |     }
  19 | 
  20 |     async verifyAddressAdded(address:string){
  21 |         await expect(this.page.getByText(address).first()).toBeVisible();
  22 |     }
  23 | 
  24 |     async selectAddress(address:string){ 
  25 |         await this.checkoutPage.selectAddress(address).first().click();
  26 |     }
  27 | 
  28 |     async VerifyAddressSelected(address:string){
  29 |         await expect(this.checkoutPage.selectAddress(address).first()).toBeVisible();
  30 |     }
  31 | 
  32 |     async placeOrder(){
  33 |         await Promise.all([
  34 |         this.page.waitForLoadState("networkidle"),
  35 |             this.checkoutPage.placeOrderBtn.click()
  36 |         ]);
  37 |     
  38 |        // await this.checkoutPage.placeOrderBtn.click();
  39 |     }
  40 | 
  41 | 
  42 |     async verifyOrderSuccess(){
  43 |         await expect(this.checkoutPage.successMsg).toBeVisible();
  44 |     }
  45 | 
  46 |      async navigateToCheckoutcart(){
  47 |         await this.page.goto("/checkout");
  48 |     }
  49 | 
  50 | 
  51 | async verifyRedirectedToThanksPage() {
  52 |     console.log("Current URL:", this.page.url());
  53 | }
  54 | 
  55 | 
  56 |     async navigateBacktoCheckout(){
  57 |         await this.page.goBack();
  58 |     }
  59 | 
  60 |       async verifyPlaceOrderDisabled(){
  61 |         await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
  62 | 
  63 |     }
  64 | 
  65 |     async verifyCartIsEmpty(){
> 66 |         await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  67 |     }
  68 | 
  69 |    
  70 |     async deleteAddress(){
  71 |         //await this.checkoutPage.deleteAddressButton(0).click();
  72 |             await this.page.getByTestId("DeleteIcon").first().click();
  73 | 
  74 |     }
  75 | 
  76 |     async verifyAddressDeleted(countBefore:number){
  77 |         const countAfter=await this.checkoutPage.addressList().count();
  78 |         expect(countAfter).toBeLessThan(countBefore);
  79 |     }
  80 | 
  81 |         
  82 |     async verifyMultipleAddressAdded(){
  83 | await expect (this.page.getByText(checkout.address1).first()).toBeVisible();
  84 | await expect (this.page.getByText(checkout.address2).first()).toBeVisible();
  85 |   }
  86 | 
  87 |     async verifyValidationMessageForEmptyAddress(){
  88 |         await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
  89 |     }
  90 | 
  91 |     async addEmptyAddress(){
  92 |         await this.checkoutPage.addNewAddressBtn.click();
  93 |         await this.checkoutPage.addressTextBox.fill("");
  94 |         await this.checkoutPage.addBtn.click();
  95 |     }
  96 | }
```