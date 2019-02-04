
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Visitor } from "@babel/traverse";
import { importDeclaration } from "@babel/types";

export const ImportTypeTransformer: Visitor = {
  ImportDeclaration(path) {
    if ((path.node as any).importKind === 'type') {
      path.replaceWith(importDeclaration(path.node.specifiers, path.node.source));
    }
  }
};
