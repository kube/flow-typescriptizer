
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { readFileSync } from "fs";
import { transformSource } from "./transformSource";

(async function main() {
  const pathArg = process.argv[2];
  try {
    const source = readFileSync(pathArg, "utf8");
    const output = transformSource(source);
    console.log(output);
  } catch (err) {
    console.error(err);
  }
})();
