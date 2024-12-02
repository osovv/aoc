export const readLines = (path: string): string[] => {
  return Deno.readTextFileSync(path)
    .split("\n")
    .filter((line) => line.length > 0);
};
