import buildTree from "./buildTree.ts";
import parseFile from "./parser.ts";
import formatTree from "./formatters/index.ts";

const getDifference = (file1, file2, format = "stylish") => {
  const object1 = parseFile(file1);
  const object2 = parseFile(file2);
  const diff = buildTree(object1, object2);
  // formatted output
  return formatTree(diff, format);
};

export default getDifference;
