/* eslint-disable array-callback-return */
import _ from 'lodash';
import fs from 'fs';
import path from 'node:path';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8');
  return data;
};

const buildTree = (data1, data2) => {
  const keys = Object.keys(data1).concat(Object.keys(data2));
  const uniqProperties = _.sortBy(_.uniq(keys));
  const result = [];
  uniqProperties.map((key) => {
    // if the keys and values equal
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        result.push(`   ${key}: ${data1[key]}`);
      }
    }
    // if the keys equal, but values are diff
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] !== data2[key]) {
        result.push(` - ${key}: ${data1[key]}`);
        result.push(` + ${key}: ${data2[key]}`);
      }
    }
    // if the key is missing
    if (_.has(data1, key) && !(_.has(data2, key))) {
      result.push(` - ${key}: ${data1[key]}`);
    }
    // if new key appeared
    if (!(_.has(data1, key)) && _.has(data2, key)) {
      result.push(` + ${key}: ${data2[key]}`);
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export { buildTree, getAbsolutePath, getData };
