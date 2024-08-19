import buildTree from "./buildTree.js";
import parseFile from "./parser.js";
import formatTree from "./formatters/index.js";

const getDifference = (file1, file2, format = "stylish") => {
  const object1 = parseFile(file1);
  const object2 = parseFile(file2);
  const diff = buildTree(object1, object2);
  // formatted output
  return formatTree(diff, format);
};

export default getDifference;
