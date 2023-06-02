import path from 'node:path';
import fs from 'fs';
import buildTree from './buildTree.js';
import parseFile from './parser.js';
import formatTree from './formatters/index.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getExtension = (filepath) => path.extname(filepath).slice(1);

const getDifference = (file1, file2, format = 'stylish') => {
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
  // formatted output
  return formatTree(diff, format);
};

export default getDifference;
