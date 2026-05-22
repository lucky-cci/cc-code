import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import process from "node:process";

const rootDir = resolve(
  dirname(
    new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"),
  ),
  "..",
);

process.env.CALLER_DIR = process.env.CALLER_DIR || process.cwd();

if (
  process.env.CC_HAHA_SKIP_DOTENV !== "1" &&
  existsSync(resolve(rootDir, ".env"))
) {
  Bun.envFile = resolve(rootDir, ".env");
}

process.chdir(rootDir);

await import("../src/entrypoints/cli.tsx");