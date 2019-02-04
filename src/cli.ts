
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { readFileSync } from "fs";
import { Visitor } from "@babel/traverse";
import { applyTransformers } from "./applyTransformers";

// Transformers
import { ExactTypeTransformer } from "./transformers/ExactType";
import { ExistsTypeTransformer } from "./transformers/ExistsType";
import { NullableTypeTransformer } from "./transformers/NullableType";
import { ImportTypeTransformer } from "./transformers/ImportType";

const TRANSFORMERS: Visitor[] = [
  ExactTypeTransformer,
  ExistsTypeTransformer,
  NullableTypeTransformer,
  ImportTypeTransformer
];

(async function main() {
  const pathArg = process.argv[2];
  try {
    const source = readFileSync(pathArg, "utf8");
    const output = applyTransformers(source, TRANSFORMERS);
    console.log(output);
  } catch (err) {
    console.error(err);
  }
})();
