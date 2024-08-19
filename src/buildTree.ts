/* eslint-disable array-callback-return */
import _ from "lodash";

type Diff = {
  keyName: string;
  prevValue?: any;
  newValue?: any;
  conclusion: string;
};

const buildTree = (data1: object, data2: object): Diff[] => {
  // recursive
  const comparison = (obj1: object, obj2: object): Diff[] => {
    const unitedKeys = _.union(Object.keys(obj1), Object.keys(obj2));
    const sortedKeys = _.sortBy(_.uniq(unitedKeys));

    return sortedKeys.map((key) => {
      if (!_.has(obj2, key)) {
        return { keyName: `${key}`, prevValue: obj1[key], conclusion: "removed" };
      }
      if (!_.has(obj1, key)) {
        return { keyName: `${key}`, newValue: obj2[key], conclusion: "added" };
      }
      if (obj1[key] === obj2[key]) {
        return { keyName: `${key}`, newValue: obj1[key], conclusion: "no change" };
      }
      if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        return { keyName: `${key}`, newValue: comparison(obj1[key], obj2[key]), conclusion: "nested" };
      }
      return {
        keyName: key,
        prevValue: obj1[key],
        newValue: obj2[key],
        conclusion: "updated",
      };
    });
  };

  return comparison(data1, data2);
};

export default buildTree;
