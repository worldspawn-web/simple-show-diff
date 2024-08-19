import buildTree from "./buildTree.ts";
import parseFile from "./parser.ts";
import formatTree from "./formatters/index.ts";

const getDifference = (file1: string, file2: string, format: string = "stylish") => {
  const object1: object = parseFile(file1);
  const object2: object = parseFile(file2);
  const diff = buildTree(object1, object2);

  return formatTree(diff, format);
};

export default getDifference;
