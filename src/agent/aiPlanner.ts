import { Task } from "./planner";

export async function aiPlanner(
  task: string
): Promise<Task[]> {


const prompt = `
You are an AI Planner.

Return ONLY valid JSON.

Rules:
1. Always start with navigate.
2. After navigate, fill username.
3. Then fill password.
4. Then click login.
5. Do NOT skip any step.
6. Do NOT wrap JSON inside markdown.

Example:

[
  {
    "tool":"navigate",
    "url":"https://www.saucedemo.com"
  },
  {
    "tool":"fillUsername",
    "value":"standard_user"
  },
  {
    "tool":"fillPassword",
    "value":"secret_sauce"
  },
  {
    "tool":"clickLogin"
  }
]

Task:
${task}
`;

  const response = await fetch(
    "http://127.0.0.1:11434/api/generate",
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        model:"llama3.2",
        prompt,
        stream:false
      })
    }
  );

  const data = await response.json();

  return JSON.parse(data.response);
}