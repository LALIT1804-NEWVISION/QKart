import {test} from "../../../src/custom_fixture/fixture"

test("TC-028-Product Listing: Home Page Load and Navigation Verification", async ({appAction}) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyLoginButtonVisibiltyAndNavigation();
    await appAction.product.verifyRegisterButtonVisibiltyAndNavigation();
})

test("TC-029-Product Listing: User Login with Valid Credentials", async ({appAction}) => {
    await appAction.product.userLogin();
    await appAction.product.verifyAppAfterLogin();
})

test("TC-030-Product Listing: Banner Image and Title Visibilty", async ({appAction}) => {
    await appAction.product.verifyHomePageBannerVisibilty();
    await appAction.product.verifyBannerTitleVisibilty();
})

test("TC-031-Product Listing: Product cards render in flex-wrap layout without overflow or overlap", async ({ appAction }) => {
    await appAction.product.waitForProductGridAndCardToLoad();
    await appAction.product.verifyFlexLayout();
    await appAction.product.verifyLayoutVisually();
})

// Arvind Work
test("TC-032-Product Listing Page: First Product Image Visibility Verification", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyLayoutImageVisible();
});

test("TC-033-Home Page: Product Card Title Display Verification", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyFirstProductTitle();
});

test("TC-034-Home Page: Product Card Price and Currency Verification", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyFirstProductPrice();
});

test("TC-035-Home Page: Product Card Rating Display Verification", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyFirstProductRating();
});

test("TC-036-Add To Cart Button Functionality Verification", async ({ appAction }) => {
    await appAction.product.userLogin();
    await appAction.product.verifyAppAfterLogin();
    await appAction.product.verifyAddToCartFunctionality();
});

test("TC-037-Displayed Product Count Accuracy Verification", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();

    await appAction.product.verifyProductCount(12);
});

test("TC-038-Pagination Page 2 Number Click Navigation", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyPage2Navigation();
});

test("TC-039-Pagination Forward Arrow Button Navigation", async ({ appAction }) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyForwardArrowNavigation();
});
