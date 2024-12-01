export const readFile = (path: string): string => {
  return Deno.readTextFileSync(path);
};
