import { isSafeReport } from "./core.ts";
import { describe, test } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

describe("examples from the problem", () => {
  test("safe reports", () => {
    expect(isSafeReport("7 6 5 4 3 2 1")).toBe(true);
    expect(isSafeReport("1 3 6 7 9")).toBe(true);
  });
  test("unsafe reports", () => {
    expect(isSafeReport("1 2 7 8 9")).toBe(false);
    expect(isSafeReport("9 7 6 2 1")).toBe(false);
    expect(isSafeReport("1 3 2 4 5")).toBe(false);
    expect(isSafeReport("8 6 4 4 1")).toBe(false);
  });
});
