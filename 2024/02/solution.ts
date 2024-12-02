import { readLines } from "../helper.ts";
import { isSafeReport, isSafeReportNew } from "./core.ts";

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

// PART 2

let newSafeReportsCount = 0;

for (const report of reports) {
  const isSafe = isSafeReportNew(report);

  if (isSafe) {
    newSafeReportsCount += 1;
  }
}

console.log("PART 2 RESULT", newSafeReportsCount);
