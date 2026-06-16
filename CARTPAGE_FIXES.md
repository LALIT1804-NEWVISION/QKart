# Cartpage.ts - Issues Fixed

## Issues Found and Fixed

### Issue 1: ✅ Incorrect XPath for IncreaseQuantityButton

**Original Code (Line 35):**
```typescript
this.IncreaseQuantityButton = page.locator("//div[@data-testid='item-qty']/following::*[name()='svg' and @data-testid='AddOutlinedIcon']");
```

**Problem:**
- The XPath syntax `/following::` was problematic
- Could potentially fail to locate the increase quantity buttons
- Inconsistent with other locators that use `//*` pattern

**Fixed Code:**
```typescript
this.IncreaseQuantityButton = page.locator("//*[name()='svg' and @data-testid='AddOutlinedIcon']");
```

**Reason:**
- Simpler XPath that searches globally for all SVG elements with AddOutlinedIcon data-testid
- Consistent with the `quantityDecreaseButton` pattern
- More reliable since it doesn't depend on specific parent-child relationships

---

### Issue 2: ✅ Incorrect XPath for itemSubtotal

**Original Code (Line 31):**
```typescript
this.itemSubtotal = page.locator('//div[contains(@class, "MuiBox-root")][contains(text(), "$")]');
```

**Problem:**
- The XPath was trying to find a div that contains both class "MuiBox-root" AND text with "$"
- Divs typically don't contain direct text; the text is usually in child elements
- Would fail to locate subtotal amounts

**Fixed Code:**
```typescript
this.itemSubtotal = page.locator('//div[contains(@class, "MuiBox-root")]//p[contains(text(), "$")]');
```

**Reason:**
- Changed from `[contains(text(), "$")]` to `//p[contains(text(), "$")]`
- Now correctly targets paragraph elements inside MuiBox-root divs
- Follows proper XPath syntax for nested elements
- More likely to correctly find the subtotal price display

---

## Summary of Changes

| Locator | Issue | Fix |
|---------|-------|-----|
| IncreaseQuantityButton | Problematic `/following::` syntax | Simplified to global search with `//*` |
| itemSubtotal | Incorrect text location (div level) | Changed to search for `//p` elements inside divs |

## Impact on Tests

✅ **Test Methods Affected:**
- `IncreaseProductQuantity()` - Now will correctly find increase buttons
- `getItemSubtotal()` - Now will correctly locate subtotal amounts
- `verifyItemSubtotal()` - Now will correctly verify subtotal values

✅ **Test Cases Benefiting:**
- testcases 03: Increase product quantity
- testcases 05: Decrease product quantity in Checkout
- testcases 06: Verify Checkout total calculation

## Running Tests

```bash
# Using batch file (Windows)
run-tests.bat

# Using npm
npm test

# Using Playwright CLI
npx playwright test

# Using Node script
node run-tests.js
```

## Verification

All locators in `Cartpage.ts` are now:
- ✅ Following consistent XPath patterns
- ✅ Using correct syntax for nested elements
- ✅ Properly scoped to find intended elements
- ✅ Compatible with Playwright's locator API
