
import { test, expect } from '@playwright/test';
import { fillWithHealing } from '../../src/utils/selfHealing';


test(
    'Login with valid credentials',
    async ({ page }) => {

        await page.goto(
            'https://www.saucedemo.com'
        );

        await fillWithHealing(
            page,
            [
                '#wrong-locator',
                
            ],
            'standard_user'
        );

        await page.locator(
            '#password'
        ).fill(
            'secret_sauce'
        );

        await page.locator(
            '#login-button'
        ).click();

        await expect(
            page.locator(
                '.inventory_list'
            )
        ).toBeVisible();
    });



test('Invalid credentials', async ({ page }) => {

    // Steps not generated yet

});

test('Forgot Password link visibility', async ({ page }) => {

    // Steps not generated yet

});

test('Password field masking', async ({ page }) => {

    // Steps not generated yet

});
