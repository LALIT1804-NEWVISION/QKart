import { Page, Locator } from "@playwright/test";

export class CheckoutPage {

    readonly page: Page;
    readonly addNewAddressBtn: Locator;
    readonly addressTextBox: Locator;
    readonly addBtn: Locator;
    readonly addressList:Locator;
    readonly selectAddress:(address:string)=>Locator;
    readonly placeOrderBtn:Locator;
    readonly successMsg:Locator;
    constructor(page: Page) {
        this.page = page;
        this.addNewAddressBtn = page.getByRole("button", { name: "Add new address" });
        this.addressTextBox = page.getByPlaceholder("Enter your complete address");
        this.addBtn = page.getByRole("button", { name: "ADD" });
        this.addressList=page.locator("(//div[@class='MuiBox-root css-0'])[position()=1]");
        this.selectAddress= (address:string) => this.page.getByText(address);
        this.placeOrderBtn=page.getByRole("button", { name: "PLACE ORDER" });
        this.successMsg=page.getByText("Order placed successfully");
    }
}