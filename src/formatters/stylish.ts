import _ from "lodash";

const spaces = 4;
const whitespace = " ";

const additionalSpaces = (depth: number): string => whitespace.repeat(depth * spaces - 2);

const getValueString = (value: any, depth: number): string => {
  const recursion = (iterValue: any, iterDepth: number): string => {
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
    return `{\n${output.join("\n")}\n${whitespace.repeat(spaces * iterDepth)}}`;
  };

  return recursion(value, depth);
};

const makeStylish = (array: any[]): string => {
  const makeLine = (differenceData: any[], depth: number = 1): string => {
    const outputLines = differenceData.flatMap(({ keyName, conclusion, newValue, prevValue }) => {
      switch (conclusion) {
        case "nested":
          return `${additionalSpaces(depth)}  ${keyName}: ${makeLine(newValue, depth + 1)}`;
        case "added":
          return `${additionalSpaces(depth)}+ ${keyName}: ${getValueString(newValue, depth)}`;
        case "removed":
          return `${additionalSpaces(depth)}- ${keyName}: ${getValueString(prevValue, depth)}`;
        case "no change":
          return `${additionalSpaces(depth)}  ${keyName}: ${getValueString(newValue, depth)}`;
        case "updated":
          return `${additionalSpaces(depth)}- ${keyName}: ${getValueString(prevValue, depth)}\n`.concat(
            `${additionalSpaces(depth)}+ ${keyName}: ${getValueString(newValue, depth)}`
          );
        default:
          throw new Error(`The type of change is invalid and can't be parsed: ${conclusion}`);
      }
    });

    return `{\n${outputLines.join("\n")}\n${whitespace.repeat(depth * spaces - 4)}}`;
  };

  return makeLine(array);
};

export default makeStylish;
