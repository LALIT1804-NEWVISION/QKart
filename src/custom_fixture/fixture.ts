import { test as base, expect, Page } from '@playwright/test';
import { RegisterationAction } from '../actions/RegistrationAction/registrationAction';
import { ProductAction } from '../actions/ProductListing/productAction';
import RegisterationData from "../testdata/registrationData.json";


type AppActions = {
    register: RegisterationAction;
    product: ProductAction;

};

type Fixtures = {
    gotoBaseUrl: void;
    appAction: AppActions;
};

export const test = base.extend<Fixtures>({
    gotoBaseUrl: [
        async ({ page }, use) => {
            await page.goto(RegisterationData.baseUrl);
            await expect(page).toHaveURL(RegisterationData.baseUrl);
            await use();
        },
        { auto: true },
    ],

    appAction: async ({ page }, use) => {
        const appAction: AppActions = {
            register: new RegisterationAction(page), 
            product: new ProductAction(page),
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";

