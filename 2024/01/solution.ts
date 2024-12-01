import { readFile } from "../helper.ts";
import { zip } from "@std/collections";

console.log(Deno.cwd());

const input = readFile("01/input.txt");
const first: number[] = [],
  second: number[] = [];

input
  .split("\n")
  .filter((line) => line.length > 0)
  .forEach((line) => {
    const [firstPart, secondPart] = line.split("   ").map(Number);
    first.push(firstPart);
    second.push(secondPart);
  });
const comp = (a: number, b: number) => a - b;

const sortedFirst = first.toSorted(comp);
const sortedSecond = second.toSorted(comp);

const zipped = zip(sortedFirst, sortedSecond);

let acc = 0;

zipped.forEach(([a, b]) => {
  acc += Math.abs(a - b);
});

console.log(acc);
