
import { test, expect } from '@playwright/test';


test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('#user-name')
    .fill('standard_user');

  await page.locator('#password')
    .fill('secret_sauce');

  await page.locator('#login-button')
    .click();

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();
});

test('Login with invalid credentials', async ({ page }) => {
  // TODO
});

test('Login with empty username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('#password')
    .fill('secret_sauce');

  await page.locator('#login-button')
    .click();
});

test('Login with empty password', async ({ page }) => {
  // TODO
});

test('Verify password masking', async ({ page }) => {
  // TODO
});
