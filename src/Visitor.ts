
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Visitor } from "@babel/traverse";
import { transformType } from "./transformType";

import {
  tsTypeAnnotation,
  importDeclaration,
  tsAsExpression
} from "@babel/types";

export const TypesVisitor: Visitor = {
  TypeAnnotation(path) {
    path.replaceWith(
      tsTypeAnnotation(
        transformType(path.node.typeAnnotation)
      )
    );
  },

  ImportDeclaration(path) {
    if ((path.node as any).importKind === "type") {
      path.replaceWith(
        importDeclaration(
          path.node.specifiers,
          path.node.source
        )
      );
    }
  },

  TypeCastExpression(path) {
    path.replaceWith(
      tsAsExpression(
        path.node.expression,
        transformType(
          path.node.typeAnnotation.typeAnnotation
        )
      )
    );
  }
};
