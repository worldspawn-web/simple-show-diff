import yaml from 'js-yaml';
import path from 'node:path';
import fs from 'fs';

const errorMsg = 'Wrong file format. Must be "yaml/yml" either "json".';
const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getExtension = (filepath) => path.extname(filepath).slice(1);

const parseFile = (data) => {
  const filedata = getData(getAbsolutePath(data));
  const extension = getExtension(data);
  switch (extension) {
    case 'json':
      return JSON.parse(filedata);
    case 'yml':
      return yaml.load(filedata);
    case 'yaml':
      return yaml.load(filedata);
    default:
      throw new Error(errorMsg);
  }
};

export default parseFile;
