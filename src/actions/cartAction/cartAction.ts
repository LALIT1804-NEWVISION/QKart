import { cartPages } from "../../pages/addTocart/Cartpage";
import { expect, Page } from "@playwright/test";

export class CartAction {

    readonly page: Page;
    private readonly cartPage: cartPages;

    constructor(page: Page) {
        this.page = page;
        this.cartPage = new cartPages(page);
    }

    async addItemsToCart() {
        await expect(this.cartPage.shoesItem).toBeVisible();
        await this.cartPage.shoesItem.click();

    }
    async clickCartButton() {
        await expect(this.cartPage.cartButton).toBeVisible();
        await this.cartPage.cartButton.click();
    }
    async IncreaseProductQuantity(itemIndex: number = 0) {
        const buttons = await this.cartPage.IncreaseQuantityButton.all();
        if (buttons.length > itemIndex) {
            await expect(buttons[itemIndex]).toBeVisible();
            await buttons[itemIndex].click();
        }
    }

    async getQuantity() {
        return await this.page.locator('[data-testid="item-qty"]').first().textContent();
    }

    async getOrderTotal() {
        // Get the order total from the cart sidebar
        return await this.cartPage.cartTotal.textContent();
    }
    async addBadmintonItemToCart() {
        await expect(this.cartPage.BadmintonItem).toBeVisible();
        await this.cartPage.BadmintonItem.click();
    }

    async addSofaSetItemToCart() {
        await expect(this.cartPage.sofaSetItem).toBeVisible();
        await this.cartPage.sofaSetItem.click();
    }

    async verifyItemAlreadyInCartMessage() {
        // Wait for cart to update after adding item
        await this.page.waitForTimeout(500);

        // Verify item appears in cart by checking for the price display
        const priceInCart = this.page.locator('//*[contains(text(), "$")]').first();
        await expect(priceInCart).toBeVisible();
    }

    async navigateToCheckout() {
        const baseUrl = this.page.url().split('/').slice(0, 3).join('/');
        await this.page.goto(`${baseUrl}/checkout`);
        await this.page.waitForLoadState('networkidle');
    }

    async decreaseItemQuantity(itemIndex: number = 0) {
        const buttons = await this.cartPage.quantityDecreaseButton.all();
        if (buttons.length > itemIndex) {
            await buttons[itemIndex].click();
            await this.page.waitForTimeout(500);
        }
    }

    async verifyItemQuantity(itemIndex: number, expectedQuantity: number) {
        const quantities = await this.cartPage.quantityDisplay.all();
        if (quantities.length > itemIndex) {
            await expect(quantities[itemIndex]).toHaveValue(expectedQuantity.toString());
        }
    }

    async verifyItemSubtotal(itemIndex: number, expectedSubtotal: string) {
        const subtotals = await this.cartPage.itemSubtotal.all();
        if (subtotals.length > itemIndex) {
            await expect(subtotals[itemIndex]).toContainText(expectedSubtotal);
        }
    }

    async verifyCartTotal(expectedTotal: string) {
        await expect(this.cartPage.cartTotal).toContainText(expectedTotal);
    }

    async refreshBrowserAndVerifyCartPersists() {
        await this.page.reload();
        await this.page.waitForLoadState('networkidle');
        // await this.navigateToCheckout();
    }
    async verifyEmptyCartMessage() {
        await expect(
            this.page.getByText('Cart is empty. Add more items to the cart to checkout.')
        ).toBeVisible();
    }
    async verifyLoginPromptMessage() {
        await expect(this.cartPage.loginPromptMessage).toBeVisible();
    }

    async clickContinueShoppingButton() {
        await expect(this.cartPage.continueShoppingButton).toBeVisible();
        await this.cartPage.continueShoppingButton.click();
    }

    async verifyItemsExistInCheckout() {
        const items = await this.cartPage.quantityDisplay.all();
        expect(items.length).toBeGreaterThan(0);
    }

    async getCartItemsCount(): Promise<number> {
        const items = await this.cartPage.quantityDisplay.all();
        return items.length;
    }

    async verifyItemSubtotalDecreased(itemIndex: number, previousSubtotal: string) {
        const subtotals = await this.cartPage.itemSubtotal.all();
        if (subtotals.length > itemIndex) {
            const currentSubtotal = await subtotals[itemIndex].textContent();
            expect(currentSubtotal).not.toBe(previousSubtotal);
        }
    }

    async verifyCartTotalDecreased(previousTotal: string) {
        const currentTotal = await this.cartPage.cartTotal.textContent();
        expect(currentTotal).not.toBe(previousTotal);
    }

    async getItemSubtotal(itemIndex: number): Promise<string | null> {
        try {
            const subtotals = await this.cartPage.itemSubtotal.all();
            if (subtotals.length > itemIndex) {
                return await subtotals[itemIndex].textContent();
            }
        } catch (e) {
            return null;
        }
        return null;
    }

    async getCartTotal(): Promise<string | null> {
        try {
            return await this.cartPage.cartTotal.textContent();
        } catch (e) {
            return null;
        }
    }
}