import {CheckoutPage} from "../../pages/checkout/checkoutPage";
import{Page,expect} from "@playwright/test";

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
        await this.checkoutPage.placeOrderBtn.click();
    }

    async verifyOrderSuccess(){
        await expect(this.checkoutPage.successMsg).toBeVisible();
    }
    
    async verifyPlaceOrderDisabled(){
        await expect(this.checkoutPage.placeOrderBtn).toBeDisabled();
    }
}