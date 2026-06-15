
import {Page, Locator} from "@playwright/test";

export class cartPages
{
    readonly page: Page;
    readonly shoesItem: Locator;  
    readonly BadmintonItem: Locator;
    readonly sofaSetItem: Locator; 
    readonly itemAlreadyInCartMessage: Locator;
    readonly quantityDecreaseButton: Locator;
    readonly quantityDisplay: Locator;
    readonly itemSubtotal: Locator;
    readonly cartTotal: Locator;
    readonly emptyCartMessage: Locator;
    readonly loginPromptMessage: Locator;
    readonly continueShoppingButton: Locator;
  


    constructor(page: Page)
    {
        this.page = page;
        this.shoesItem = page.locator('//p[normalize-space()="Roadster Mens Running Shoes"]/../following-sibling::div//button[.="Add to cart"]');
        this.BadmintonItem = page.locator('//p[normalize-space()="YONEX Smash Badminton Racquet"]/../following-sibling::div//button[.="Add to cart"]');
        this.sofaSetItem = page.locator("//p[normalize-space()='Stylecon 9 Seater RHS Sofa Set']/../following-sibling::div//button[.='Add to cart']");
        this.itemAlreadyInCartMessage = this.page.locator(
            "text=Item already in cart. Use the cart sidebar to update quantity or remove item."
        );
        this.quantityDecreaseButton = page.locator('//button[contains(text(),"-")]');
        this.quantityDisplay = page.locator('//input[@data-testid="item-qty"]');
        this.itemSubtotal = page.locator('//div[contains(@class, "MuiBox-root")][contains(text(), "$")]');
        this.cartTotal = page.locator('//p[contains(text(),"Total")]/..//p[contains(text(),"$")]');
        this.emptyCartMessage = page.locator('//p[contains(text(),"empty") or contains(text(),"Empty")]');
        this.loginPromptMessage = page.locator('//div[contains(text(),"Login to add")]');
        this.continueShoppingButton = page.locator('//button[contains(text(),"Continue")]');
    }
}