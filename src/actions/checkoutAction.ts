import { CheckoutPage } from "../pages/checkoutPage";
import {Page, expect} from "@playwright/test";


export class CheckoutAction{
    page:Page;
    checkoutPage:CheckoutPage;

    constructor(page:Page){
        this.page=page;
        this.checkoutPage=new CheckoutPage(page);
        
    }

    async placeOrder(){
        await this.checkoutPage.PlaceOrderButton.click();
    }

    async verifyOrderSuccess(){
        await expect(this.checkoutPage.confirmationMessage).toBeVisible();
    }

    async verifyCartIsEmpty(){
        await expect(this.checkoutPage.emptyCartMessage).toBeVisible();
    }

    async deleteAddress(){
        await this.checkoutPage.deleteAddressButton.click();
    }

    async verifyAddressDeleted(){
        await expect(this.checkoutPage.addressList).toHaveCount(0);
    }
        
    async verifyMultipleAddressAdded(){
        await expect(this.checkoutPage.addressList).toHaveCount(2);
    }

    async verifyValidationMessageForEmptyAddress(){
        await expect(this.checkoutPage.emptyAddressMessage).toBeVisible();
    }
}