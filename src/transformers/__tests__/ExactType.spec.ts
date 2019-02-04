
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { applyTransformers } from "../../applyTransformers";
import { ExactTypeTransformer } from '../ExactType';

it("removes |", () => {
  const SOURCE = `type A = {|
  a: number
|};`;

  const OUTPUT = `type A = {
  a: number
};`;

  expect(applyTransformers(SOURCE, [ExactTypeTransformer])).toBe(OUTPUT);
});

it('transforms recursively', () => {
  const SOURCE = `type A = {|
  a: number,
  b: {|
    c: string
  |},
|};`;

  const OUTPUT = `type A = {
  a: number,
  b: {
    c: string
  },
};`;

  expect(applyTransformers(SOURCE, [ExactTypeTransformer])).toBe(OUTPUT);
})
