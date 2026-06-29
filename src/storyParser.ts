import fs from 'fs';

async function analyzeStory() {
  const story = fs.readFileSync(
    './stories/login.txt',
    'utf-8'
  );

  const prompt = `
You are a Senior QA Engineer.

Return ONLY valid JSON.

Format:

[
  {
    "id": "TC001",
    "type": "functional",
    "title": "Login with valid credentials",
    "priority": "High"
  }
]

Generate test cases for this user story:

${story}
`;

  const response = await fetch(
    'http://127.0.0.1:11434/api/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt,
        stream: false
      })
    }
  );

  const data = await response.json();

  fs.writeFileSync(
    './testcases.json',
    data.response
  );

  console.log(
    'testcases.json generated successfully'
  );
}

analyzeStory();