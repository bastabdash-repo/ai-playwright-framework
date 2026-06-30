import { aiPlanner } from "./agent/aiPlanner";
import { executePlan } from "./agent/executor";

async function main() {

    const plan =
        await aiPlanner(
            "Login with valid credentials"
        );

    console.log(plan);

    await executePlan(plan);
}

main();