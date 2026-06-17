
import { Page, Locator } from "@playwright/test";

export class cartPages {
    readonly page: Page;
    readonly shoesItem: Locator;
    readonly cartButton: Locator;
    readonly BadmintonItem: Locator;
    readonly sofaSetItem: Locator;
    readonly itemAlreadyInCartMessage: Locator;
    readonly quantityDecreaseButton: Locator;
    readonly quantityDisplay: Locator;
    readonly itemSubtotal: Locator;
    readonly cartTotal: Locator;
    readonly loginPromptMessage: Locator;
    readonly continueShoppingButton: Locator;
    readonly IncreaseQuantityButton: Locator;
    readonly checkoutButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.shoesItem = page.locator('//p[normalize-space()="Roadster Mens Running Shoes"]/../following-sibling::div//button[.="Add to cart"]');
        this.cartButton = page.locator('//button[text()="Checkout"]');
        this.BadmintonItem = page.locator('//p[normalize-space()="YONEX Smash Badminton Racquet"]/../following-sibling::div//button[.="Add to cart"]');
        this.sofaSetItem = page.locator("//p[normalize-space()='Stylecon 9 Seater RHS Sofa Set']/../following-sibling::div//button[.='Add to cart']");
        this.itemAlreadyInCartMessage = this.page.locator(
            "text=Item already in cart. Use the cart sidebar to update quantity or remove item."
);
        this.quantityDecreaseButton = page.locator("//*[name()='svg' and @data-testid='RemoveOutlinedIcon']");
        this.quantityDisplay = page.locator('//input[@data-testid="item-qty"]');
        this.itemSubtotal = page.locator('//div[contains(@class, "MuiBox-root")][contains(text(), "$")]');
        this.cartTotal = page.locator('//p[contains(text(),"Total")]/..//p[contains(text(),"$")]');
        this.loginPromptMessage = page.locator('//div[contains(text(),"Login to add")]');
        this.continueShoppingButton = page.locator('//button[contains(text(),"Continue")]');
        this.IncreaseQuantityButton = page.locator("//div[@data-testid='item-qty']/following::*[name()='svg' and @data-testid='AddOutlinedIcon']");
        this.checkoutButton = page.locator('//button[contains(text(),"Checkout")]');
    }
}