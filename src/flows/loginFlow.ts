import { BrowserService } from "../mcp/browserService";

export async function loginFlow() {
  const browser = new BrowserService();

  await browser.connect();

  await browser.navigate(
    "https://www.saucedemo.com"
  );

  const elements =
    await browser.discoverElements();

  await browser.fillForm([
    {
      target: elements.username,
      name: "Username",
      type: "textbox",
      value: "standard_user"
    },
    {
      target: elements.password,
      name: "Password",
      type: "textbox",
      value: "secret_sauce"
    }
  ]);

  await browser.click(
  elements.loginButton!
);

  const snapshot =
    await browser.snapshot();

  console.log(snapshot.content[0].text);

  await browser.disconnect();
}