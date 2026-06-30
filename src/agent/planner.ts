export interface Task {
  tool: string;
  value?: string;
  url?: string;
}

export function createPlan(
  task: string
): Task[] {

  if (
    task ===
    "Login with valid credentials"
  ) {
    return [
      {
        tool: "navigate",
        url: "https://www.saucedemo.com"
      },
      {
        tool: "fillUsername",
        value: "standard_user"
      },
      {
        tool: "fillPassword",
        value: "secret_sauce"
      },
      {
        tool: "clickLogin"
      }
    ];
  }

  return [];
}