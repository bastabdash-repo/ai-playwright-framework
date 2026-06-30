import { connectToPlaywrightMCP } from "./mcpClient";
import { parseSnapshot } from "./snapshotParser";

export class BrowserService {
  private client: any;

  async connect() {
    this.client = await connectToPlaywrightMCP();
  }

  async navigate(url: string) {
    await this.client.callTool({
      name: "browser_navigate",
      arguments: { url }
    });
  }

  async snapshot() {
    return await this.client.callTool({
      name: "browser_snapshot",
      arguments: {}
    });
  }

  async discoverElements() {
    const snapshot = await this.snapshot();
    return parseSnapshot(snapshot);
  }

  async fillForm(fields: any[]) {
    await this.client.callTool({
      name: "browser_fill_form",
      arguments: {
        fields
      }
    });
  }

  async click(target: string) {
    await this.client.callTool({
      name: "browser_click",
      arguments: {
        target
      }
    });
  }

  async disconnect() {
    await this.client.close();
  }
}