<<<<<<< HEAD
import { CheckoutPage } from "../pages/checkoutPage";
import {Page, expect} from "@playwright/test";

=======
import {CheckoutPage} from "../pages/checkoutPage";
import{Page,expect} from "@playwright/test";
>>>>>>> 076acdd3ff4fd9dd6a03bdb0c65d2c24ece85d02

export class CheckoutAction{
    page:Page;
    checkoutPage:CheckoutPage;

    constructor(page:Page){
        this.page=page;
        this.checkoutPage=new CheckoutPage(page);
<<<<<<< HEAD
        
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
=======
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
        await this.checkoutPage.placeOrderBtn.click();
    }

    async verifyOrderSuccess(){
        await expect(this.checkoutPage.successMsg).toBeVisible();
    }
    
    async verifyPlaceOrderDisabled(){
        await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
>>>>>>> 076acdd3ff4fd9dd6a03bdb0c65d2c24ece85d02
    }
}