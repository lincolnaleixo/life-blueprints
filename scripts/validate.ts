import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { validateRepository } from "./blueprints.ts";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const problems = await validateRepository(root);

if (problems.length) {
  console.error(`Blueprint validation failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem.file}: ${problem.message}`);
  process.exit(1);
}

console.log("Validated all public blueprints, metadata, capability slugs, changelog entries, and local links.");
