import { BrowserService } from "../mcp/browserService";
import { Task } from "./planner";

export async function executePlan(
  plan: Task[]
) {
  const browser =
    new BrowserService();

  await browser.connect();

  let elements: any;

  for (const step of plan) {

    switch (step.tool) {

      case "navigate":

        await browser.navigate(
          step.url!
        );

        elements =
          await browser.discoverElements();

        break;

      case "fillUsername":

        await browser.fillForm([
          {
            target:
              elements.username!,
            name: "Username",
            type: "textbox",
            value: step.value!
          }
        ]);

        break;

      case "fillPassword":

        await browser.fillForm([
          {
            target:
              elements.password!,
            name: "Password",
            type: "textbox",
            value: step.value!
          }
        ]);

        break;

      case "clickLogin":

        await browser.click(
          elements.loginButton!
        );

        break;
    }
  }

  const snapshot =
    await browser.snapshot();

  console.log(
    snapshot.content[0].text
  );

  await browser.disconnect();
}