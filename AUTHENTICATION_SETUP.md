# Authentication Setup with Playwright StorageState

This guide explains how the `storageState` authentication system works in this Playwright framework.

## Overview

The framework uses Playwright's `storageState` feature to:
- ✅ Perform login **once** before all tests run
- ✅ Reuse authentication across all test files
- ✅ Eliminate redundant login operations
- ✅ Improve test execution speed
- ✅ Maintain secure credential handling

## How It Works

### 1. **Global Setup** (`auth.setup.ts`)
- Runs before any tests execute
- Uses your existing `loginAction` class from POM
- Performs login with credentials from `login.json`
- Saves authentication state (cookies, localStorage, sessionStorage) to `auth.json`
- Runs only once per test suite execution

### 2. **Configuration** (`playwright.config.ts`)
- `globalSetup`: References the setup file
- `storageState: 'auth.json'`: Loads saved auth state for all tests

### 3. **Fixture Enhancement** (`src/custom_fixture/fixture.ts`)
- Automatically receives the authenticated browser context
- No manual login calls needed in tests
- Browser state is pre-populated with authentication data

## Execution Flow

```
1. Playwright starts
   ↓
2. Runs auth.setup.ts (global setup)
   - Navigates to BaseURL
   - Creates loginAction instance
   - Calls loginUser() method
   - Saves storageState to auth.json
   ↓
3. All tests start with authenticated context
   - Browser cookies/localStorage already loaded
   - fixture.ts initializes appAction
   - Tests execute without login overhead
```

## Usage in Your Tests

### Before (Old Way - Login in Every Test)
```typescript
test("testcases 01: Add product to Checkout", async ({ appAction }) => {
    await appAction.login.loginUser(loginData.LoginDetails);  // ❌ Redundant
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
});
```

### After (New Way - Authentication Pre-Loaded)
```typescript
test("testcases 01: Add product to Checkout", async ({ appAction }) => {
    // ✅ Already authenticated! No login call needed
    await appAction.cart.addItemsToCart();
    await appAction.cart.clickCartButton();
});
```

## Files Created/Modified

### Created:
- **`auth.setup.ts`** - Global setup file that performs one-time login

### Modified:
- **`playwright.config.ts`** - Added `globalSetup` and `storageState` configuration
- **`src/custom_fixture/fixture.ts`** - Added comments explaining the pre-loaded auth state
- **`.gitignore`** - Added `auth.json` to prevent committing sensitive auth data

## Running Tests

```bash
# Normal execution (with global setup)
npx playwright test

# The first run will:
# 1. Execute auth.setup.ts
# 2. Generate auth.json
# 3. Run all tests with pre-loaded authentication

# Subsequent runs will:
# 1. Skip auth.setup.ts if auth.json exists
# 2. Reuse auth.json for all tests
# 3. Run faster since login is skipped
```

## Regenerating Authentication State

If your authentication token expires or you need to refresh it:

```bash
# Delete the auth.json file
rm auth.json

# Run tests - a fresh login will be performed
npx playwright test
```

Or on Windows:
```powershell
del auth.json
npx playwright test
```

## Benefits

| Benefit | Impact |
|---------|--------|
| **Faster Tests** | Eliminates login overhead from every test |
| **Cleaner Tests** | Remove redundant login calls from test code |
| **Secure** | Credentials not hardcoded in test files; `auth.json` is gitignored |
| **Scalable** | Works with your existing POM structure |
| **Maintainable** | Single login implementation in `auth.setup.ts` |

## Troubleshooting

### Issue: Tests fail with "not authenticated"
**Solution**: 
1. Check if `auth.json` exists in the root directory
2. Verify login credentials in `login.json` are correct
3. Delete `auth.json` and re-run to regenerate

### Issue: "Cannot find auth.json"
**Solution**: 
1. Run `npx playwright test` - this will generate `auth.json` via global setup
2. Ensure `playwright.config.ts` has `globalSetup` configured

### Issue: Tests still include manual login calls
**Solution**: 
1. Remove `await appAction.login.loginUser()` calls from your tests
2. The authentication is already loaded via `storageState`

## Advanced: Multiple User Accounts

If you need different authentication states:

1. Create separate setup files (`auth-user1.setup.ts`, `auth-user2.setup.ts`)
2. Create separate projects in `playwright.config.ts`
3. Assign different `storageState` paths to each project

Example:
```typescript
projects: [
  {
    name: 'chromium-user1',
    use: { ...devices['Desktop Chrome'], storageState: 'auth-user1.json' },
  },
  {
    name: 'chromium-user2',
    use: { ...devices['Desktop Chrome'], storageState: 'auth-user2.json' },
  },
]
```

## Notes

- The `globalSetup` runs in a separate context (not shared with test contexts)
- Each test gets a fresh isolated context with the same `storageState`
- If authentication expires during tests, consider adding re-authentication logic
- The setup uses your existing `loginAction` class - no framework changes needed
