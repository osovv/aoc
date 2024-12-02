export function readLines(path: string): string[] {
  return Deno.readTextFileSync(path)
    .split("\n")
    .filter((line) => line.length > 0);
}

export function generateSubarrays<T>(arr: T[]): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const subarray = [...arr.slice(0, i), ...arr.slice(i + 1)];
    result.push(subarray);
  }

  return result;
}
