
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { applyTransformers } from "../../applyTransformers";
import { NullableTypeTransformer } from "../NullableType";

it("transforms to union with `undefined`", () => {
  const SOURCE = `type A = ?42;`;
  const OUTPUT = `type A = 42 | undefined;`;

  expect(applyTransformers(SOURCE, [NullableTypeTransformer])).toBe(OUTPUT);
});
