// fix-esbuild.mjs
import fs from "fs";
import path from "path";

const esbuildBin = path.resolve("node_modules", ".bin", "esbuild");
try {
  fs.chmodSync(esbuildBin, "755");
  console.log("✅ Fixed esbuild permission issues.");
} catch (err) {
  console.warn("⚠️ Could not fix esbuild permissions:", err.message);
}
