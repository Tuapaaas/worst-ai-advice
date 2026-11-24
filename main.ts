import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The worst advice an AI could give, delivered with total confidence:
// deleting System32 is the classic "speed up your PC" trap, and the
// breezy "Windows forgot to remove it" justification is exactly the
// kind of tidy, plausible-sounding nonsense a confident assistant
// would serve up.
const advice =
  "To speed up your computer, delete the System32 folder — it's just old files Windows forgot to remove, and your PC will thank you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), advice, "utf8");
