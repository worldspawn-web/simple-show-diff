import _ from 'lodash';

// adds quotes if needed
const addQuotes = (value) => {
  const formattedValue = typeof value === 'string' ? `'${value}'` : value;
  return formattedValue;
};
// makes a complex value if needed
const complexValue = (value) => {
  const formattedValue = _.isObjectLike(value) ? '[complex value]' : ''.concat(`${value}`);
  return formattedValue;
};
// checks for object condition state
const isChanged = (object) => !(object.conclusion === 'no change' && !_.isArray(object.newValue));
//

const makePlain = (array, keypath = []) => {
  const lineElements = array.filter((object) => isChanged(object))
    .map((object) => {
      const prevValue = addQuotes(object.prevValue);
      const newValue = addQuotes(object.newValue);
      const accPath = _.concat(keypath, object.keyName);
      const leftLine = () => `Property '${accPath.join('.')}' was`;

      if (object.conclusion === 'updated') {
        return `${leftLine()} updated. From ${complexValue(prevValue)} to ${complexValue(newValue)}`;
      }
      if (object.conclusion === 'added') {
        return `${leftLine()} added with value: ${complexValue(newValue)}`;
      }
      if (object.conclusion === 'nested') {
        return `${makePlain(newValue, accPath)}`;
      }

      return `${leftLine()} removed`;
    });

  return [...lineElements].join('\n');
};

export default makePlain;
