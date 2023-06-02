import yaml from 'js-yaml';

const errorMsg = 'Wrong file format. Must be "yaml/yml" either "json".';

const parseFile = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(errorMsg);
  }
};

export default parseFile;
