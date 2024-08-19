import makeStylish from "./stylish.ts";
import makeJSON from "./json.ts";
import makePlain from "./plain.ts";

const formatTree = (tree: any[], format: string): string => {
  switch (format) {
    case "stylish":
      return makeStylish(tree);
    case "json":
      return makeJSON(tree);
    case "plain":
      return makePlain(tree);
    default:
      throw new Error(`\n${format} is an unknown formatter! Available options: stylish (default), plain, json.\n`);
  }
};

export default formatTree;
