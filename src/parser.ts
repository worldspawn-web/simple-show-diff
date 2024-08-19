import yaml from "js-yaml";
import path from "node:path";
import fs from "fs";

const errorMsg = 'Wrong file format. Must be "yaml/yml" either "json".';

const getAbsolutePath = (filepath: string): string => path.resolve(process.cwd(), filepath);
const getData = (filepath: string): string => fs.readFileSync(filepath, "utf-8");
const getExtension = (filepath: string): string => path.extname(filepath).slice(1);

const parseFile = (data: string): object => {
  const filedata = getData(getAbsolutePath(data));

  if (!filedata) {
    throw new Error("Error while trying to get file data.");
  }

  const extension = getExtension(data);

  switch (extension) {
    case "json":
      return JSON.parse(filedata);
    case "yml":
    case "yaml":
      return yaml.load(filedata);
    default:
      throw new Error(errorMsg);
  }
};

export default parseFile;
