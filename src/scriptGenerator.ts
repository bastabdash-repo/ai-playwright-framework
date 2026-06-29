import fs from 'fs';

const testCases = JSON.parse(
  fs.readFileSync(
    './testcases.json',
    'utf-8'
  )
);

function generateSteps(
  title: string
) {
  if (
    title ===
    'Login with valid credentials'
  ) {
    return `
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
    `;
  }

  return `
  // Steps not generated yet
  `;
}

let content = `
import { test, expect } from '@playwright/test';

`;

for (const tc of testCases) {
  content += `
test('${tc.title}', async ({ page }) => {
${generateSteps(tc.title)}
});
`;
}

fs.writeFileSync(
  './tests/generated/login.spec.ts',
  content
);

console.log(
  'Playwright file generated successfully'
);