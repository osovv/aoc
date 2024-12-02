import * as path from "jsr:@std/path";
export const readFile = (path: string): string => {
  return Deno.readTextFileSync(path);
};
