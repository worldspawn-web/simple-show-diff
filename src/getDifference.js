import _ from 'lodash';
import fs from 'fs';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => {
    const data = fs.readFileSync(filepath);
    return data;
};

const buildTree = (data1, data2) => {
    const keys = Object.keys(data1).concat(Object.keys(data2));
    const uniqProperties = _.sortBy(_.uniq(keys));
    /// ?
}

const getDifference = (file1, file2) => {
    const data1 = getData(getAbsolutePath(file1));
    const data2 = getData(getAbsolutePath(file2));
    const diff = buildTree(data1, data2);
    return diff;
};

export default getDifference;