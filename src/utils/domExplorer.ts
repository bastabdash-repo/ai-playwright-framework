import { Page } from '@playwright/test';
import * as cheerio from 'cheerio';

export async function exploreDom(
  page: Page
) {
  const html = await page.content();

  const $ = cheerio.load(html);

  console.log('\n===== INPUTS =====');

  $('input').each((_, element) => {
    const id = $(element).attr('id');
    const placeholder =
      $(element).attr('placeholder');

    console.log({
      id,
      placeholder
    });
  });

  console.log('\n===== BUTTONS =====');

  $('button').each((_, element) => {
    const id = $(element).attr('id');
    const text =
      $(element).text().trim();

    console.log({
      id,
      text
    });
  });
}