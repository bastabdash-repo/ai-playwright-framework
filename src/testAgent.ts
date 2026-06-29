import fs from 'fs';

import {
  exploreLoginPage
} from './agent/browserAgent';

import {
  generateTestIdeas
} from './agent/testIdeaGenerator';

import {
  generateScript
} from './agent/testScriptGenerator';

async function run() {
  const elements =
    await exploreLoginPage(
      'https://www.saucedemo.com'
    );

  const ideas =
    generateTestIdeas(
      elements
    );

  let content = `
import { test, expect } from '@playwright/test';

`;

  for (const idea of ideas) {
    content += generateScript(
      idea,
      elements
    );
  }

  fs.writeFileSync(
    './tests/generated/ai-login.spec.ts',
    content
  );

  console.log(
    'AI Test File Generated'
  );
}

run();