
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { applyTransformers } from "../../applyTransformers";
import { ExistsTypeTransformer } from "../ExistsType";

it("transforms `*` type to `any`", () => {
  const SOURCE = `function identity(arg: *) {
  return arg;
}`;

  const OUTPUT = `function identity(arg: any) {
  return arg;
}`;

  expect(applyTransformers(SOURCE, [ExistsTypeTransformer])).toBe(OUTPUT);
});
