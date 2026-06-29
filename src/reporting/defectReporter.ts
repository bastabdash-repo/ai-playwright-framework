import fs from 'fs';

export function generateDefectReport() {
  const errorFile =
    './test-results/generated-ai-login-Login-with-valid-credentials/error-context.md';

  const error =
    fs.readFileSync(
      errorFile,
      'utf-8'
    );

  const report = `
==================================
AI DEFECT REPORT
==================================

Failure Summary:
Playwright test failed.

Root Cause Analysis:
${error}

Possible Reasons:
1. Locator may have changed.
2. Page loaded differently.
3. Incorrect assertion.
4. Application behavior changed.

Recommendations:
- Verify locator.
- Verify DOM structure.
- Open screenshot.
- Open video recording.

Artifacts:
Screenshot:
test-failed-1.png

Video:
video.webm
`;

  fs.writeFileSync(
    './defect-report.txt',
    report
  );

  console.log(
    'AI defect report generated.'
  );
}