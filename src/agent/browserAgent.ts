import { chromium } from '@playwright/test';
import * as cheerio from 'cheerio';

export async function exploreLoginPage(
  url: string
) {
  const browser =
    await chromium.launch();

  const page =
    await browser.newPage();

  await page.goto(url);

  const html =
    await page.content();

  const $ =
    cheerio.load(html);

  const result = {
    username: '',
    password: '',
    loginButton: ''
  };

  $('input').each(
    (_, element) => {

      const id =
        $(element).attr('id');

      const placeholder =
        $(element)
          .attr(
            'placeholder'
          );

      if (
        placeholder ===
        'Username'
      ) {
        result.username =
          `#${id}`;
      }

      if (
        placeholder ===
        'Password'
      ) {
        result.password =
          `#${id}`;
      }

      if (
        id ===
        'login-button'
      ) {
        result.loginButton =
          `#${id}`;
      }
    }
  );

  await browser.close();

  return result;
}