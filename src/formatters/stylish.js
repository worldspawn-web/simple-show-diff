import _ from 'lodash';

const spaces = 4;
const whitespace = ' ';
// leftside spaces
const additionalSpaces = (depth) => whitespace.repeat(depth * spaces - 2);

const getValueString = (value, depth) => {
  const recursion = (iterValue, iterDepth) => {
    if (!_.isObject(iterValue)) {
      return iterValue;
    }
    const iterData = Object.entries(iterValue);
    const output = iterData.map(([iterDataKey, iterDataValue]) => {
      if (!_.isObject(iterDataValue)) {
        return `${whitespace.repeat(spaces * (iterDepth + 1))}${iterDataKey}: ${iterDataValue}`;
      }
      return `${whitespace.repeat(spaces * (iterDepth + 1))}${iterDataKey}: ${recursion(iterDataValue, iterDepth + 1)}`;
    });
    return `{\n${output.join('\n')}\n${whitespace.repeat(spaces * iterDepth)}}`;
  };
  return recursion(value, depth);
};

const makeStylish = (array) => {
  const makeLine = (differenceData, depth = 1) => {
    // destructuring data => check for conclusion => return
    const outputLines = differenceData.flatMap(({
      keyName,
      conclusion,
      newValue,
      prevValue,
    }) => {
      switch (conclusion) {
        // whitespaces before the keyName are important!
        case 'nested':
          return `${additionalSpaces(depth)}  ${keyName}: ${makeLine(newValue, depth + 1)}`;
        case 'added':
          return `${additionalSpaces(depth)}+ ${keyName}: ${getValueString(newValue, depth)}`;
        case 'removed':
          return `${additionalSpaces(depth)}- ${keyName}: ${getValueString(prevValue, depth)}`;
        case 'no change':
          return `${additionalSpaces(depth)}  ${keyName}: ${getValueString(newValue, depth)}`;
        case 'updated':
          return `${additionalSpaces(depth)}- ${keyName}: ${getValueString(prevValue, depth)}\n`
            .concat(`${additionalSpaces(depth)}+ ${keyName}: ${getValueString(newValue, depth)}`);
        default: throw new Error(`The type of change is invalid and can't be parsed: ${conclusion}`);
      }
    });

    return `{\n${outputLines.join('\n')}\n${whitespace.repeat(depth * spaces - 4)}}`;
  };

  return makeLine(array);
};

export default makeStylish;
