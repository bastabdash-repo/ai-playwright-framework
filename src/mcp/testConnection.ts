import { connectToPlaywrightMCP } from "./mcpClient";
import { parseSnapshot } from "./snapshotParser";

async function main() {
    const client = await connectToPlaywrightMCP();

    // Navigate
    await client.callTool({
        name: "browser_navigate",
        arguments: {
            url: "https://www.saucedemo.com"
        }
    });

    // Initial Snapshot
    const snapshot = await client.callTool({
        name: "browser_snapshot",
        arguments: {}
    });

    const elements = parseSnapshot(snapshot);

    console.log(elements);

    // Fill Login Form
    await client.callTool({
        name: "browser_fill_form",
        arguments: {
            fields: [
                {
                    target: elements.username,
                    name: "Username",
                    type: "textbox",
                    value: "standard_user"
                },
                {
                    target: elements.password,
                    name: "Password",
                    type: "textbox",
                    value: "secret_sauce"
                }
            ]
        }
    });

    console.log("✅ Form Filled");

    // Click Login
    await client.callTool({
        name: "browser_click",
        arguments: {
            target: elements.loginButton
        }
    });

    console.log("✅ Login Clicked");

    // Verify
    const afterLogin = await client.callTool({
        name: "browser_snapshot",
        arguments: {}
    });

    console.dir(afterLogin, { depth: null });

    await client.close();
}

main();