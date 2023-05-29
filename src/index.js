import { buildTree, getData, getAbsolutePath } from './buildTree.js';
import { getExtension } from './parsers/utilities.js';
import parseFile from './parsers/indexParser.js';

const getDifference = (file1, file2) => {
  // getting file data
  const file1data = getData(getAbsolutePath(file1));
  const file2data = getData(getAbsolutePath(file2));
  // getting file extensions
  const extension1 = getExtension(file1);
  const extension2 = getExtension(file2);
  // build objects from different extensions
  const object1 = parseFile(file1data, extension1);
  const object2 = parseFile(file2data, extension2);
  const diff = buildTree(object1, object2);
  return diff;
};

export default getDifference;
