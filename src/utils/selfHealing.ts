import { Page } from '@playwright/test';
import { findUsernameLocator } from './locatorFinder';

export async function fillWithHealing(
  page: Page,
  locators: string[],
  value: string
) {
  // Step 1: Try all provided locators
  for (const locator of locators) {
    try {
      console.log(
        `Trying locator: ${locator}`
      );

      const element =
        page.locator(locator);

      await element.waitFor({
        state: 'visible',
        timeout: 2000
      });

      await element.fill(value);

      console.log(
        `Success using: ${locator}`
      );

      return;
    } catch {
      console.log(
        `Failed: ${locator}`
      );
    }
  }

  // Step 2: DOM Exploration (Mini MCP)
  console.log(
    'Trying DOM exploration...'
  );

  const discoveredLocator =
    await findUsernameLocator(
      page
    );

  if (discoveredLocator) {
    console.log(
      `Discovered: ${discoveredLocator}`
    );

    await page
      .locator(discoveredLocator)
      .fill(value);

    console.log(
      `Success using: ${discoveredLocator}`
    );

    return;
  }

  throw new Error(
    'No locator worked'
  );
}