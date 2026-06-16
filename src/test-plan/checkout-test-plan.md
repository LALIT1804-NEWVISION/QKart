# Checkout Test Plan

## Objective
Verify Checkout behavior for quantity updates, total calculation, session persistence, guest restrictions, and empty cart handling.

## Scope
- Decreasing item quantity in Checkout
- Verifying Checkout total calculation
- Checking cart persistence after browser refresh
- Preventing guest users from adding products without login
- Handling quantity decrease from 1
- Validating empty Checkout UI state

---

## Test Case 1: Decrease product quantity in Checkout

**ID:** Add To Checkout _05

**Description:** Verify that a user can decrease the quantity of an item in the Checkout page and that the total price updates correctly.

**Preconditions:**
- User is logged in.
- Checkout contains an item with quantity 2 or more.

**Test Steps:**
1. Open application URL and log in.
2. Navigate to the Checkout page.
3. Confirm an item quantity is 2 or more.
4. Click the `-` button once for that item.
5. Verify the quantity decreased by 1.
6. Verify the item subtotal updated correctly.
7. Verify the Checkout total amount decreased correctly.

**Expected Result:**
- Quantity reduces by 1.
- Item subtotal updates correctly.
- Checkout total updates correctly.

**Acceptance:**
Quantity decreased correctly and totals are recalculated.

---

## Test Case 2: Verify Checkout total calculation

**ID:** Add To Checkout _06

**Description:** Verify the Checkout total amount is calculated correctly based on item prices and quantities.

**Preconditions:**
- User is logged in.
- Multiple products with distinct prices are available.

**Test Data:**
- Item_A: Price $15, Qty 2
- Item_B: Price $650, Qty 1

**Test Steps:**
1. Add multiple products with different prices and quantities into Checkout.
2. Navigate to the Checkout page.
3. Note item prices and quantities displayed.
4. Manually calculate expected total: `(15 * 2) + (650 * 1)`.
5. Compare the manual total with the displayed Checkout total.

**Expected Result:**
- Displayed total matches the calculated total.

**Acceptance:**
Checkout total is calculated correctly.

---

## Test Case 3: Persist items after browser refresh

**ID:** Add To Checkout _07

**Description:** Verify that Checkout items remain after refreshing the browser.

**Preconditions:**
- User is logged in.
- Items have been added to Checkout.

**Test Steps:**
1. Open application URL and log in.
2. Add items to Checkout.
3. Reload the browser.
4. Open the Checkout page again.
5. Verify all items and quantities remain unchanged.

**Expected Result:**
- Items and quantities persist after refresh.

**Acceptance:**
Checkout contents are retained after browser reload.

---

## Test Case 4: Prevent guest from adding products

**ID:** Add To Checkout _08

**Description:** Verify a guest user cannot add products to the cart without logging in.

**Preconditions:**
- User is not logged in.
- Session cookies and active authentication are cleared.

**Test Data:**
- Product: Regular_InStock_Product

**Test Steps:**
1. Open application URL as a guest user.
2. Navigate to a product page.
3. Click `Add to Checkout`.

**Expected Result:**
- System blocks the action and shows a login prompt.
- Error message should state: `Login to add an item to the Cart`.

**Acceptance:**
Guest cannot add items without login and sees a login-required message.

---

## Test Case 5: Decrease quantity from 1 in Checkout

**ID:** Add To Checkout _10

**Description:** Verify behavior when decreasing an item quantity from 1.

**Preconditions:**
- User is logged in.
- Checkout contains an item with quantity exactly 1.

**Test Steps:**
1. Open application URL and log in.
2. Navigate to the Checkout page.
3. Confirm item quantity is 1.
4. Click the `-` button.

**Expected Result:**
- The cart should become empty or the item should be removed.
- A validation or empty-cart message should appear.

**Acceptance:**
Item removal or empty cart state occurs with proper validation.

---

## Test Case 6: Empty Checkout UI state

**ID:** Add To Checkout _11

**Description:** Verify the Checkout page behavior when the cart is empty.

**Preconditions:**
- User is logged in.
- No items are present in Checkout.

**Test Steps:**
1. Open application URL and log in.
2. Navigate directly to the Checkout page.

**Expected Result:**
- Checkout page displays an empty cart validation message.
- Page offers an option to continue shopping.

**Acceptance:**
Empty Checkout message shown and user can continue shopping.
