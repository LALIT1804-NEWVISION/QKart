import { test } from "../../../src/custom_fixture/fixture";

import searchdata from "../../../src/testdata/search.json";


test("Verify search_product", async ({ appAction }) => {

    await appAction.search.searchProduct(
        searchdata.SearchDetails.searchbox);
});

test("Verify partial search-product", async ({ appAction }) => {

    await appAction.search.searchPartialProduct(
        searchdata.SearchDetails.searchPartialText);
});

test("Verify invalid searching product", async ({ appAction }) => {

    await appAction.search.searchInvalidProduct(
        searchdata.SearchDetails.searchinvalidproduct);
});

test("Verify searching-product with special characters", async ({ appAction }) => {

    await appAction.search.searhProductwithspecicacharacters(
        searchdata.SearchDetails.searchproductspeccharacters);
});

test("Verify homepage is displayed after clearing search", async ({ appAction, }) => {

    await appAction.search.clearSearchAndVerifyproductlistpage(searchdata.SearchDetails.searchbox);

});


// search  product with Long String Input

test("Verify search with long input ", async ({ appAction }) => {

    await appAction.search.searchProduct(
        searchdata.SearchDetails.searchproductwithlonginput);
});

// search  product with numbers only
test("Verify Products with numbers only", async ({ appAction }) => {

    await appAction.search.searchProduct(
        searchdata.SearchDetails.searchproductwithnumbersonly);
});

//Verify Search is Case Insensitive
test("verify Search Is CaseSensitive", async ({ appAction }) => {

    await appAction.search.searchProduct(
        searchdata.SearchDetails.searchproductwithvcasesensitive);
});
// Verify Search with Leading and Trailing Spaces
test("verify search product with trailing spaces", async ({ appAction }) => {

    await appAction.search.searchProduct(searchdata.SearchDetails.searchproductwithtrailingspaces);
});

// Verify Search Results After Page Refresh
test("Verify Search Results After Page Refresh", async ({ appAction }) => {

    await appAction.search.searchProduct(searchdata.SearchDetails.searchbox);
    await appAction.search.refreshPage();
});



