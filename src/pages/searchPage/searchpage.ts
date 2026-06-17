
import { Page, Locator, expect } from '@playwright/test';


export class SearchPage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly verifyproduct: Locator;
    readonly searchPartialText: Locator;
    readonly searchInvalidText: Locator;
    readonly noProductsFoundHeading: Locator;
    readonly productlistpage: Locator;
    
    

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.getByRole('textbox', { name: 'Search for items/categories' });
        this.verifyproduct = page.locator('//div[@class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-1msksyp"]');
        this.searchPartialText = page.getByRole('textbox', { name: 'Search for items/categories' });
        this.searchInvalidText = page.getByRole('textbox', { name: 'Search for items/categories' });
        this.noProductsFoundHeading = page.getByRole("heading", { name: "No products found", });
        this.productlistpage=page.locator('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 product-grid css-1w6ph7q"]')
         this.searchBox = page.getByRole("textbox", {name: "Search for items/categories",});
    }
       
         
}
