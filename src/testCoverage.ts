import { generateCoverageReport } from './reporting/coverageReporter';

const requirements = [
    'Login with valid credentials',
    'Login with invalid credentials',
    'Forgot Password link visibility',
    'Verify password masking'
];

const generatedTests = [
    'Login with valid credentials',
    'Login with invalid credentials',
    'Verify password masking'
];

generateCoverageReport(
    requirements,
    generatedTests
);