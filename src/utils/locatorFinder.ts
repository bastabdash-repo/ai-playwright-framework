import { Page } from '@playwright/test';
import * as cheerio from 'cheerio';

export async function
findUsernameLocator(
  page: Page
) {
  const html =
    await page.content();

  const $ =
    cheerio.load(html);

  let locator:
    string | null = null;

  $('input').each(
    (_, element) => {

      const placeholder =
        $(element)
          .attr(
            'placeholder'
          );

      const id =
        $(element)
          .attr('id');

      if (
        placeholder ===
        'Username'
      ) {
        locator =
          `#${id}`;
      }
    }
  );

  return locator;
}