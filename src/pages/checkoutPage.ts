import {Page,Locator} from "@playwright/test";
 
export class CheckoutPage{
 
    page:Page;
    savedAddress:Locator;
    PlaceOrderButton:Locator;
    confirmationMessage:Locator;
    emptyCartMessage:Locator;
    deleteAddressButton:Locator;
    addressList:Locator;
    emptyAddressMessage:Locator;
    
 
    constructor(page:Page){
        this.page=page;
        this.savedAddress=page.locator("//p[text()='Flat No 12, Sunrise Apartments, MG Road, Bangalore -560001']");
        this.PlaceOrderButton=page.locator("//button[@type='button'][text()='PLACE ORDER']");
        this.confirmationMessage=page.locator("#notistack-snackbar");
        this.emptyCartMessage=page.locator("//div[@class='css-1dimb5e']/p[text()='Your cart is empty!']");
        this.deleteAddressButton=page.locator('(//*[@data-testid="DeleteIcon"])[position()=1]');
        this.addressList=page.locator('//div[@class="address-item not-selected MuiBox-root css-0"]/parent::div');
        this.emptyAddressMessage=page.locator("#notistack-snackbar");
       
    }
}