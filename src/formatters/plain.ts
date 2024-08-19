import _ from "lodash";

const addQuotes = (value: any): string => {
  const formattedValue = typeof value === "string" ? `'${value}'` : value;
  return formattedValue;
};

const complexValue = (value: any): string => {
  const formattedValue = _.isObjectLike(value) ? "[complex value]" : "".concat(`${value}`);
  return formattedValue;
};

const isChanged = (object: any): boolean => !(object.conclusion === "no change" && !_.isArray(object.newValue));

const makePlain = (array: any[], keypath: string[] = []): string => {
  const lineElements = array
    .filter((object) => isChanged(object))
    .map(({ keyName, conclusion, newValue, prevValue }) => {
      const quotedPV = addQuotes(prevValue);
      const quotedNV = addQuotes(newValue);
      const accPath = _.concat(keypath, keyName);
      const leftLine = () => `Property '${accPath.join(".")}' was`;

      if (conclusion === "updated") {
        return `${leftLine()} updated. From ${complexValue(quotedPV)} to ${complexValue(quotedNV)}`;
      }

      if (conclusion === "added") {
        return `${leftLine()} added with value: ${complexValue(quotedNV)}`;
      }

      if (conclusion === "nested") {
        if (Array.isArray(newValue)) {
          return `${makePlain(newValue, accPath)}`;
        } else {
          return `${leftLine()} nested`;
        }
      }

      return `${leftLine()} removed`;
    });

  return [...lineElements].join("\n");
};

export default makePlain;
