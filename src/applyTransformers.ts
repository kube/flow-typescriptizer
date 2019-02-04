
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { parse } from "@babel/parser";
import traverse, { Visitor } from "@babel/traverse";
import generate from "@babel/generator";

export function applyTransformers(source: string, visitors: Visitor[]): string {
  // Create AST from Source
  const ast = parse(source, {
    plugins: ["flow", "classProperties"],
    sourceType: "module",
  });

  // Traverse
  for (const visitor of visitors) {
    traverse(ast, visitor);
  }

  return generate(ast, { retainLines: true }).code;
}
