import { execSync } from 'child_process';
import fs from 'fs';

function runStep(name: string, command: string) {
  console.log(`\n========== ${name} ==========`);

  try {
    execSync(command, {
      stdio: 'inherit'
    });

    console.log(`✅ ${name} Completed`);
    return true;

  } catch (error) {
    console.log(`❌ ${name} Failed`);
    return false;
  }
}

function latestErrorExists() {
  if (!fs.existsSync('./test-results')) {
    return false;
  }

  const folders = fs
    .readdirSync('./test-results')
    .filter(file =>
      fs.statSync(`./test-results/${file}`).isDirectory()
    );

  for (const folder of folders) {
    if (
      fs.existsSync(
        `./test-results/${folder}/error-context.md`
      )
    ) {
      return true;
    }
  }

  return false;
}

console.log(`
========================================
      AI PLAYWRIGHT PIPELINE
========================================
`);

runStep(
  'Story Parser',
  'npx ts-node src/storyParser.ts'
);

runStep(
  'AI Test Generator',
  'npx ts-node src/testAgent.ts'
);

const testsPassed = runStep(
  'Playwright Tests',
  'npx playwright test tests/generated/ai-login.spec.ts'
);

runStep(
  'Coverage Report',
  'npx ts-node src/testCoverage.ts'
);

if (!testsPassed && latestErrorExists()) {

  runStep(
    'LLM Defect Report',
    'npx ts-node src/reporting/llmDefectReporter.ts'
  );

} else {

  console.log(
    '\n✅ Tests Passed - Defect Report Skipped'
  );

}

console.log(`
========================================
      PIPELINE FINISHED
========================================
`);