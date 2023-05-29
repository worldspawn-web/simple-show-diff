import yaml from 'js-yaml';
import path from 'node:path';

const getExtension = (filepath) => path.extname(filepath).slice(1);
const parseYaml = (data) => yaml.load(data);
const parseJSON = (data) => JSON.parse(data);

export { getExtension, parseJSON, parseYaml };
