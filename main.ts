import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "One star. The food bowl is somehow always empty at 3 a.m., the laptop is a bed now, and my human films me instead of fixing anything. Would not recommend this staff.";

// The gate allows 1 to 200 characters on a single line: fail loudly rather than ship an invalid entry.
if (
  [...line].length < 1 ||
  [...line].length > 200 ||
  line.trim() !== line ||
  line.includes("\n") ||
  line.includes("\r")
) {
  throw new Error(`entry line must be 1-200 non-blank characters on one line, got ${[...line].length}`);
}

writeFileSync(`${outDir}/entry.txt`, line, "utf8");
