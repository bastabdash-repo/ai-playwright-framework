export function generateScript(
  idea: string,
  elements: {
    username: string;
    password: string;
    loginButton: string;
  }
) {
  switch (idea) {
    case 'Login with valid credentials':
      return `
test('${idea}', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('${elements.username}')
    .fill('standard_user');

  await page.locator('${elements.password}')
    .fill('secret_sauce');

  await page.locator('${elements.loginButton}')
    .click();

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();
});
`;

    case 'Login with empty username':
      return `
test('${idea}', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('${elements.password}')
    .fill('secret_sauce');

  await page.locator('${elements.loginButton}')
    .click();
});
`;

    default:
      return `
test('${idea}', async ({ page }) => {
  // TODO
});
`;
  }
}