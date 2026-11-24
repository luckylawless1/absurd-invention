// One-Sentence Absurd Invention Pitch — make.fun
// Writes a single sentence (1-220 chars) pitching a ridiculous invention
// that fixes a tiny everyday annoyance, to /output/entry.txt.
// Stdlib only. Never removes the output root; only creates it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "A washing machine that texts your socks a formal apology every time it eats one, with a full refund paid in lint.";

// Gate: the entry must be exactly one sentence of 1-220 chars,
// non-whitespace, ending in a single period with no other
// sentence-ending punctuation inside.
if (
  SENTENCE.trim().length < 1 ||
  SENTENCE.length > 220 ||
  SENTENCE.trim() !== SENTENCE ||
  (SENTENCE.match(/\./g) ?? []).length !== 1 ||
  !SENTENCE.endsWith(".") ||
  /[?!]/.test(SENTENCE)
) {
  throw new Error("entry fails the one-sentence 1-220 char gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
console.log(`wrote entry.txt (${SENTENCE.length} chars)`);
