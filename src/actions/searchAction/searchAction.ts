
import { Page, expect } from "@playwright/test";
import { SearchPage } from "../../pages/searchPage/searchpage";




type SearchDetails = {
    searchbox: string;
    searchPartialText: string;
    searchinvalidproduct: string;
    searchproductspeccharacters: String;
    productlistpage: String;
    searchproductwithlonginput: String;
    searchproductwithnumbersonly: String;
    searchproductwithcasesensitive: String;
    searchproductwithtrailingspaces: String;
};

export class SearchAction {
    private readonly searchPage: SearchPage
    constructor(page: Page) {
        this.searchPage = new SearchPage(page);
    }
    // Search Product
    async searchProduct(searchbox: string) {
        await this.searchPage.searchBox.fill(searchbox);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.verifyproduct).toBeVisible();
    }
    // Search product with partial text & Wait for results to load
    async searchPartialProduct(searchPartialText: string) {
        await this.searchPage.searchBox.fill(searchPartialText);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.verifyproduct).toBeVisible();
    }
    // Search product with invalid text
    async searchInvalidProduct(searchinvalidproduct: string) {
        await this.searchPage.searchBox.fill(searchinvalidproduct);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.noProductsFoundHeading).toBeVisible();
    }

    // Search product with special characters

    async searhProductwithspecicacharacters(searchinvalidproduct: string) {
        await this.searchPage.searchBox.fill(searchinvalidproduct);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.noProductsFoundHeading).toBeVisible();

    }
    //clear search functionality & verify product list page
    async clearSearchAndVerifyproductlistpage(searchbox: string) {
        await this.searchPage.searchBox.click();
        await this.searchPage.searchBox.fill(searchbox);
        await this.searchPage.searchBox.fill("");
        await expect(this.searchPage.productlistpage).toBeVisible();
    }


    async searchProductwithlongcharacterinput(searchbox: string) {
        await this.searchPage.searchBox.fill(searchbox);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.verifyproduct).toBeVisible();

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.noProductsFoundHeading).toBeVisible();
    }


    async searchProductwithnumbersonly(searchbox: string) {
        await this.searchPage.searchBox.fill(searchbox);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.verifyproduct).toBeVisible();

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.noProductsFoundHeading).toBeVisible();
    }

    async searchProductwithwithcasesensitive(searchbox: string) {
        await this.searchPage.searchBox.fill(searchbox);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.verifyproduct).toBeVisible();
    }

    async verifySearchWithTrailingSpaces(searchbox: string) {
        await this.searchPage.searchBox.fill(searchbox);

        await this.searchPage.page.waitForLoadState("networkidle");

        await expect(this.searchPage.verifyproduct).toBeVisible();
    }

    async VerifySearchResultsAfterPageRefresh(searchbox: string) {
        await this.searchPage.searchBox.click();
        await this.searchPage.searchBox.fill(searchbox);
        await this.searchPage.searchBox.fill("");
        await expect(this.searchPage.productlistpage).toBeVisible();
    }
    async refreshPage() {
        await this.searchPage.page.reload();
    }

}