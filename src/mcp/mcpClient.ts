import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export async function connectToPlaywrightMCP() {
  const transport = new StdioClientTransport({
    command: "/usr/local/bin/npx",
    args: ["-y", "@playwright/mcp@latest"]
  });

  const client = new Client(
    {
      name: "ai-playwright-framework",
      version: "2.0.0"
    },
    {
      capabilities: {}
    }
  );

  await client.connect(transport);

  console.log("✅ Connected to Playwright MCP");

  return client;
}