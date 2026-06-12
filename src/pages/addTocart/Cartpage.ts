
import {Page, Locator} from "@playwright/test";

export class cartPages
{
    readonly page: Page;
    readonly shoesItem: Locator;  
    readonly BadmintonItem: Locator;
    readonly sofaSetItem: Locator; 
    readonly IncreaseQuantityButton: Locator;
    readonly DecreaseQuantityButton: Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.shoesItem = page.locator('//p[normalize-space()="Roadster Mens Running Shoes"]/../following-sibling::div//button[.="Add to cart"]');
        this.BadmintonItem = page.locator('//p[normalize-space()="YONEX Smash Badminton Racquet"]/../following-sibling::div//button[.="Add to cart"]');
        this.sofaSetItem = page.locator("//p[normalize-space()='Stylecon 9 Seater RHS Sofa Set']/../following-sibling::div//button[.='Add to cart']");
        this.IncreaseQuantityButton = page.locator("//div[@data-testid='item-qty']/following::*[name()='svg' and @data-testid='AddOutlinedIcon']");
        this.DecreaseQuantityButton = page.locator("//*[name()='svg' and @data-testid='RemoveOutlinedIcon']");


    }
}