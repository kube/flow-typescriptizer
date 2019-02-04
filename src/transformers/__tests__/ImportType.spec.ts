
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { applyTransformers } from "../../applyTransformers";
import { ImportTypeTransformer } from "../ImportType";

it("transforms `import type` to `import`", () => {
  const SOURCE = `import type { Animal } from './Animal';`;
  const OUTPUT = `import { Animal } from './Animal';`;

  expect(applyTransformers(SOURCE, [ImportTypeTransformer])).toBe(OUTPUT);
});
