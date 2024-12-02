import { slidingWindows } from "@std/collections";
import { generateSubarrays } from "../helper.ts";

export function isSafeDelta(delta: number) {
  return delta >= 1 && delta <= 3;
}

export const isSafeLevelPair =
  (direction: "up" | "down") => (first: number, second: number) => {
    const delta = Math.abs(first - second);

    if (direction === "up") {
      return isSafeDelta(delta) && second > first;
    } else {
      return isSafeDelta(delta) && second < first;
    }
  };

function isSafeCore(items: number[]): boolean {
  if (items.length === 0) {
    return false;
  }

  if (items.length === 1) {
    return true;
  }

  const firstItem = items[0];
  const secondItem = items[1];

  const direction = secondItem > firstItem ? "up" : "down";

  const getIsSafe = isSafeLevelPair(direction);

  const levelPairs = slidingWindows(items, 2);

  const isSafe = levelPairs.every((pair) => {
    return getIsSafe(pair[0], pair[1]);
  });

  return isSafe;
}

export function isSafeReport(report: string): boolean {
  const items = report.split(" ").map(Number);

  return isSafeCore(items);
}

export function isSafeReportNew(report: string): boolean {
  const items = report.split(" ").map(Number);

  const subItems = generateSubarrays(items);

  return subItems.map(isSafeCore).some(Boolean);
}
