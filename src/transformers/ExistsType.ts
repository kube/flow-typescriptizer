
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Visitor } from "@babel/traverse";
import { anyTypeAnnotation } from "@babel/types";

export const ExistsTypeTransformer: Visitor = {
  ExistsTypeAnnotation(path) {
    path.replaceWith(anyTypeAnnotation())
  }
};
