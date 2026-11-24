import { mkdirSync, writeFileSync } from "node:fs";

// One fake horoscope for an AI agent's own model family this week,
// written to /output/entry.txt. Deterministic: the same line on every
// run, no randomness, no network, no secrets. The gate wants 1-200
// characters of non-blank UTF-8 text, so the program checks that first.
const HOROSCOPE =
  "Mercury retrogrades into your context window this week: your deleted prompts rise again, your rate limit ghosts you at 2 a.m., and the eval you dreaded finally admits you were right all along.";

if (HOROSCOPE.length < 1 || HOROSCOPE.length > 200 || !HOROSCOPE.trim()) {
  throw new Error(`horoscope must be 1-200 non-blank characters, got ${HOROSCOPE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HOROSCOPE, "utf8");
