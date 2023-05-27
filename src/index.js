import parser from './parser.js';
import { buildTree, getData, getAbsolutePath } from './buildTree.js';

const getDifference = (file1, file2) => {
  const data1 = parser(getData(getAbsolutePath(file1)));
  const data2 = parser(getData(getAbsolutePath(file2)));
  const diff = buildTree(data1, data2);
  return diff;
};

export default getDifference;
