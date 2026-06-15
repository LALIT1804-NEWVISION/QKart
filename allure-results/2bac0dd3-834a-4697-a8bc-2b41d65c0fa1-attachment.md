# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> Verify login with an invalid password
- Location: tests\Qkart\loginSpec\login.spec.ts:18:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[contains(text() , "Password is incorrect"])')
Expected: visible
SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//div[contains(text() , "Password is incorrect"])' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6017:25)
    at InjectedScript._queryEngineAll (<anonymous>:6730:49)
    at InjectedScript.querySelectorAll (<anonymous>:6717:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:46)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[contains(text() , "Password is incorrect"])')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - link "QKart-icon" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "QKart-icon" [ref=e8]
      - button "Back to explore" [ref=e9] [cursor=pointer]:
        - img [ref=e11]
        - text: Back to explore
    - generic [ref=e14]:
      - heading "Login" [level=2] [ref=e15]
      - generic "Username" [ref=e16]:
        - generic: Username
        - generic [ref=e17]:
          - textbox "Username" [ref=e18]:
            - /placeholder: Enter Username
            - text: Dummy123
          - group
      - generic [ref=e19]:
        - generic: Password
        - generic [ref=e20]:
          - textbox "Password" [ref=e21]:
            - /placeholder: Enter a password
            - text: Dummy@124
          - group
      - button "Login to QKart" [ref=e22] [cursor=pointer]: Login to QKart
      - paragraph [ref=e23]:
        - text: Don't have an account?
        - link "Register now" [ref=e24] [cursor=pointer]:
          - /url: /register
    - generic [ref=e25]:
      - img "QKart-icon" [ref=e27]
      - paragraph [ref=e28]: QKart is your one stop solution to the buy the latest trending items with India 's Fastest Delivery to your doorstep
      - generic [ref=e29]:
        - paragraph [ref=e30] [cursor=pointer]:
          - link "Privacy policy" [ref=e31]:
            - /url: privacy-policy
        - paragraph [ref=e32] [cursor=pointer]:
          - link "About us" [ref=e33]:
            - /url: aboutus
        - paragraph [ref=e34] [cursor=pointer]: Contact us
        - paragraph [ref=e35] [cursor=pointer]:
          - link "Terms of Service" [ref=e36]:
            - /url: terms-of-service
  - alert [ref=e41]:
    - generic [ref=e42]:
      - img [ref=e43]
      - text: Password is incorrect
```