import {Page, expect} from "@playwright/test";
import {ProductPage} from "../../pages/ProductListingPage/productPage";


export class ProductAction {
    readonly ProductAction_instance: ProductAction;

    constructor(page: Page) {
        this.ProductAction_instance = new ProductAction(page);
    }


}