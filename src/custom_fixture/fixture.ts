import { test as base, expect, Page } from '@playwright/test';
import { RegisterationAction } from '../actions/registrationAction';
import RegisterationData from "../../src/testdata/registerationData.json";


type AppActions = {
    register: RegisterationAction;
    
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
        };

        await use(appAction);
    },
});

export { expect } from "@playwright/test";

