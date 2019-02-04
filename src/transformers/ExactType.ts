
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Visitor } from "@babel/traverse";
import { objectTypeAnnotation } from "@babel/types";

export const ExactTypeTransformer: Visitor = {
  ObjectTypeAnnotation(path) {
    if (path.node.exact) {
      // Remove `exact` property
      path.replaceWith(
        objectTypeAnnotation(
          path.node.properties,
          path.node.indexers,
          path.node.callProperties
        )
      );
    }
  }
};
