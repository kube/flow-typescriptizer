
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import {
  FlowType,
  TSType,
  tsAnyKeyword,
  tsArrayType,
  tsBooleanKeyword,
  tsLiteralType,
  booleanLiteral,
  tsNeverKeyword,
  tsFunctionType
} from "@babel/types";

export function transformType(type: FlowType): TSType {
  switch (type.type) {
    case "AnyTypeAnnotation":
      return tsAnyKeyword();

    case "ArrayTypeAnnotation":
      return tsArrayType(transformType(type.elementType));

    case "BooleanLiteralTypeAnnotation":
      return tsLiteralType(booleanLiteral(type.value));

    case "BooleanTypeAnnotation":
      return tsBooleanKeyword();

    case "EmptyTypeAnnotation":
      return tsNeverKeyword();

    case "ExistsTypeAnnotation":
      console.warn(
        "Exists Type is impossible to express in TypeScript"
      );
      return tsAnyKeyword();

    case "FunctionTypeAnnotation":
      return tsFunctionType();

    default:
      return tsAnyKeyword();
  }
}
