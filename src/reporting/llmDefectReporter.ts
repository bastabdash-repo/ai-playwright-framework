import fs from 'fs';

async function generateReport() {
  const error =
    fs.readFileSync(
      './test-results/generated-ai-login-Login-with-valid-credentials/error-context.md',
      'utf-8'
    );

  const prompt = `
You are a senior QA automation engineer.

Analyze the following Playwright failure
and provide:

1. Root Cause
2. Possible Reasons
3. Recommendations

Failure:

${error}
`;

  const response =
    await fetch(
      'http://localhost:11434/api/generate',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json'
        },
        body: JSON.stringify({
          model: 'llama3.2',
          prompt,
          stream: false
        })
      }
    );

  const data =
    await response.json();

  fs.writeFileSync(
    './llm-defect-report.txt',
    data.response
  );

  console.log(
    'LLM defect report generated.'
  );
}

generateReport();