
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

import { TypesVisitor } from "./Visitor";

export function transformSource(source: string): string {
  // Create AST from Source
  const ast = parse(source, {
    plugins: ["flow", "classProperties"],
    sourceType: "module"
  });

  // Traverse
  traverse(ast, TypesVisitor);

  // Generate and return code
  return generate(ast, { retainLines: true }).code;
}
