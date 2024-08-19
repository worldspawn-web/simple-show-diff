import makeStylish from "./stylish.js";
import makeJSON from "./json.js";
import makePlain from "./plain.js";

const formatTree = (tree, format) => {
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
