export function generateTestIdeas(
    elements: {
        username: string;
        password: string;
        loginButton: string;
    }
) {
    const ideas: string[] = [];

    if (
        elements.username &&
        elements.password &&
        elements.loginButton
    ) {
        ideas.push(
            'Login with valid credentials'
        );

        ideas.push(
            'Login with invalid credentials'
        );

        ideas.push(
            'Login with empty username'
        );

        ideas.push(
            'Login with empty password'
        );

        ideas.push(
            'Verify password masking'
        );
    }

    return ideas;
}