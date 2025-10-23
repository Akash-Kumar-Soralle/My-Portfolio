// fix-esbuild.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const esbuildBin = path.resolve(__dirname, "node_modules", ".bin", "esbuild");

try {
  fs.chmodSync(esbuildBin, 0o755);
  console.log("✅ Fixed esbuild permission issues.");
} catch (err) {
  console.warn("⚠️ Could not fix esbuild permissions:", err.message);
}
