import {CheckoutPage} from "../../pages/checkout/checkoutPage";
import{Page,expect} from "@playwright/test";
import checkout from "../../../src/testdata/checkout.json";

export class CheckoutAction{
    page:Page;
    checkoutPage:CheckoutPage;

    constructor(page:Page){
        this.page=page;
        this.checkoutPage=new CheckoutPage(page);
    }

    async addNewAddress(address:string){
        await this.checkoutPage.addNewAddressBtn.click();
        await this.checkoutPage.addressTextBox.fill(address);
        await this.checkoutPage.addBtn.click();
    }

    async verifyAddressAdded(address:string){
        await expect(this.page.getByText(address).first()).toBeVisible();
    }

    async selectAddress(address:string){ 
        await this.checkoutPage.selectAddress(address).first().click();
    }

    async VerifyAddressSelected(address:string){
        await expect(this.checkoutPage.selectAddress(address).first()).toBeVisible();
    }

    async placeOrder(){
        await Promise.all([
        this.page.waitForLoadState("networkidle"),
            this.checkoutPage.placeOrderBtn.click()
        ]);
    
       // await this.checkoutPage.placeOrderBtn.click();
    }


    async verifyOrderSuccess(){
        await expect(this.checkoutPage.successMsg).toBeVisible();
    }

     async navigateToCheckoutcart(){
        await this.page.goto("/checkout");
    }


async verifyRedirectedToThanksPage() {
    console.log("Current URL:", this.page.url());
}


    async navigateBacktoCheckout(){
        await this.page.goBack();
    }

      async verifyPlaceOrderDisabled(){
        await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();

    }

    async verifyCartIsEmpty(){
        await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
    }

   
    async deleteAddress(){
        //await this.checkoutPage.deleteAddressButton(0).click();
            await this.page.getByTestId("DeleteIcon").first().click();

    }

    async verifyAddressDeleted(countBefore:number){
        const countAfter=await this.checkoutPage.addressList().count();
        expect(countAfter).toBeLessThan(countBefore);
    }

        
    async verifyMultipleAddressAdded(){
await expect (this.page.getByText(checkout.address1).first()).toBeVisible();
await expect (this.page.getByText(checkout.address2).first()).toBeVisible();
  }

    async verifyValidationMessageForEmptyAddress(){
        await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
    }

    async addEmptyAddress(){
        await this.checkoutPage.addNewAddressBtn.click();
        await this.checkoutPage.addressTextBox.fill("");
        await this.checkoutPage.addBtn.click();
    }
}