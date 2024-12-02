import { readLines } from "../helper.ts";
import { isSafeReport } from "./core.ts";

const reports = readLines("02/input.txt");

// PART 1

let safeReportsCount = 0;

for (const report of reports) {
  const isSafe = isSafeReport(report);

  if (isSafe) {
    safeReportsCount += 1;
  }
}

console.log("PART 1 RESULT", safeReportsCount);
