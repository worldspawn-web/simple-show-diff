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
    .map(({
      keyName,
      conclusion,
      newValue,
      prevValue,
    }) => {
      const quotedPV = addQuotes(prevValue);
      const quotedNV = addQuotes(newValue);
      const accPath = _.concat(keypath, keyName);
      const leftLine = () => `Property '${accPath.join('.')}' was`;

      if (conclusion === 'updated') {
        return `${leftLine()} updated. From ${complexValue(quotedPV)} to ${complexValue(quotedPV)}`;
      }
      if (conclusion === 'added') {
        return `${leftLine()} added with value: ${complexValue(quotedNV)}`;
      }
      if (conclusion === 'nested') {
        return `${makePlain(quotedNV, accPath)}`;
      }

      return `${leftLine()} removed`;
    });

  return [...lineElements].join('\n');
};

export default makePlain;
