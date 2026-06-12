import  {cartPages} from "../../pages/addTocart/Cartpage";
import {test ,expect} from "@playwright/test";
import { Page } from "@playwright/test";
export class CartAction
{
  
  private readonly page: Page;
  private readonly cartPage: cartPages


    constructor(page: Page)
    {
        this.page = page;
        this.cartPage = new cartPages(page);
    }       
    

 async addItemsToCart() {
    await expect(this.cartPage.shoesItem).toBeVisible();
    await this.cartPage.shoesItem.click();
}

async addBadmintonItemToCart() {
    await expect(this.cartPage.BadmintonItem).toBeVisible();
    await this.cartPage.BadmintonItem.click();
}

async addSofaSetItemToCart() {
    await expect(this.cartPage.sofaSetItem).toBeVisible();
    await this.cartPage.sofaSetItem.click();
}

async increaseItemQuantity() {
    await expect(this.cartPage.IncreaseQuantityButton).toBeVisible();
    await this.cartPage.IncreaseQuantityButton.click();


}
async decreaseItemQuantity() {
  await expect(this.cartPage.DecreaseQuantityButton).toBeVisible();

await this.cartPage.DecreaseQuantityButton.click();

await this.page.screenshot({
    path: 'screenshots/decrease-quantity.png',
    fullPage: true
});

}
}