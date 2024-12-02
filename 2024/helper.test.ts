import { describe, test } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { generateSubarrays } from "./helper.ts";

describe("generateSubarrays", () => {
  test("empty array", () => {
    expect(generateSubarrays([])).toEqual([]);
  });
  test("single item array", () => {
    expect(generateSubarrays([1])).toEqual([[]]);
  });
  test("two item array", () => {
    expect(generateSubarrays([1, 2])).toEqual([[2], [1]]);
  });
  test("three item array", () => {
    expect(generateSubarrays([1, 2, 3])).toEqual([
      [2, 3],
      [1, 3],
      [1, 2],
    ]);
  });
});
