import { slidingWindows } from "@std/collections";

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

export function isSafeReport(report: string): boolean {
  const items = report.split(" ").map(Number);

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
