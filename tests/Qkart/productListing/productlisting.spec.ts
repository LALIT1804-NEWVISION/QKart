import {test} from "../../../src/custom_fixture/fixture"

test("TC-001-Product Listing: Home Page Load and Navigation Verification", async ({appAction}) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyLoginButtonVisibiltyAndNavigation();
    await appAction.product.verifyRegisterButtonVisibiltyAndNavigation();
})

test("TC-002-Product Listing: User Login with Valid Credentials", async ({appAction}) => {
    await appAction.product.userLogin();
    await appAction.product.verifyAppAfterLogin();
})

test("TC-003-Product Listing: Banner Image and Title Visibilty", async ({appAction}) => {
    await appAction.product.verifyHomePageBannerVisibilty();
    await appAction.product.verifyBannerTitleVisibilty();
})

test("TC-004-Product Listing: Product cards render in flex-wrap layout without overflow or overlap", async ({ appAction }) => {
    await appAction.product.waitForProductGridAndCardToLoad();
    await appAction.product.verifyFlexLayout();
    await appAction.product.verifyLayoutVisually();
})