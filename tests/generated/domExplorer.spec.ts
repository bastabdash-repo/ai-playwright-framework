import { test } from '@playwright/test';
import {exploreDom} from '../../src/utils/domExplorer';

test('Explore SauceDemo DOM',async ({ page }) => {

    await page.goto(
      'https://www.saucedemo.com'
    );

    await exploreDom(page);
  }
);