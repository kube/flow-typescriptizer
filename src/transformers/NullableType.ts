
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Visitor } from "@babel/traverse";
import {
  unionTypeAnnotation,
  genericTypeAnnotation,
  identifier
} from "@babel/types";

export const NullableTypeTransformer: Visitor = {
  NullableTypeAnnotation(path) {
    // Replace `?TYPE` with `TYPE | undefined`
    path.replaceWith(
      unionTypeAnnotation([
        path.node.typeAnnotation,
        genericTypeAnnotation(identifier("undefined"))
      ])
    );
  }
};
