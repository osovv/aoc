import { readLines } from "../helper.ts";
import { zip } from "@std/collections";

const input = readLines("01/input.txt");
const first: number[] = [],
  second: number[] = [];

// PART 1
input.forEach((line) => {
  const [firstPart, secondPart] = line.split("   ").map(Number);
  first.push(firstPart);
  second.push(secondPart);
});
const comp = (a: number, b: number) => a - b;

const sortedFirst = first.toSorted(comp);
const sortedSecond = second.toSorted(comp);

const zipped = zip(sortedFirst, sortedSecond);

let distance = 0;

zipped.forEach(([a, b]) => {
  distance += Math.abs(a - b);
});

console.log("PART 1 RESULT", distance);

// PART 2

const acc = new Map<number, number>();

for (const item of second) {
  if (acc.has(item)) {
    acc.set(item, acc.get(item)! + 1);
  } else {
    acc.set(item, 1);
  }
}

let similarityScore = 0;
for (const item of first) {
  if (acc.has(item)) {
    similarityScore += item * acc.get(item)!;
  }
}

console.log("PART 2 RESULT", similarityScore);
