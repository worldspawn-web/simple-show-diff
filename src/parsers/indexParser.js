import { parseJSON, parseYaml } from './utilities.js';

const errorMsg = 'Wrong file format. Must be "yaml/yml" either "json".';

const parseFile = (data, extension) => {
  switch (extension) {
    case 'json':
      return parseJSON(data);

    case 'yml':
    case 'yaml':
      return parseYaml(data);
    default:
      throw new Error(errorMsg);
  }
};

export default parseFile;
