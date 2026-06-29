import { execSync } from 'child_process';

export function commitGeneratedFiles() {
  try {
    console.log(
      'Adding files...'
    );

    execSync(
      'git add .',
      {
        stdio: 'inherit'
      }
    );

    console.log(
      'Creating commit...'
    );

    execSync(
      'git commit -m "AI generated tests and reports"',
      {
        stdio: 'inherit'
      }
    );

    console.log(
      'Pushing code...'
    );

    execSync(
      'git push',
      {
        stdio: 'inherit'
      }
    );

    console.log(
      'Push successful.'
    );

  } catch (error) {
    console.log(
      'Git operation failed.'
    );

    console.log(error);
  }
}