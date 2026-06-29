import fs from 'fs';

export function generateCoverageReport(
    requirements: string[],
    generatedTests: string[]
) {

    const covered =
        requirements.filter(
            requirement =>
                generatedTests.includes(
                    requirement
                )
        );

    const missing =
        requirements.filter(
            requirement =>
                !generatedTests.includes(
                    requirement
                )
        );

    const coverage =
        (
            covered.length /
            requirements.length
        ) * 100;

    const report = `
==============================
AI COVERAGE REPORT
==============================

Total Requirements:
${requirements.length}

Covered:
${covered.length}

Missing:
${missing.length}

Coverage:
${coverage}%

Covered Scenarios:

${covered.join('\n')}

Missing Scenarios:

${missing.join('\n')}
`;

    fs.writeFileSync(
        './coverage-report.txt',
        report
    );

    console.log(
        'Coverage report generated.'
    );
}