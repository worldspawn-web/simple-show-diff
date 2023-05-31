import makeStylish from './stylish.js';
import makeJSON from './json.js';

const formatTree = (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    // case 'plain':
    //   return makePlain(tree);
    case 'json':
      return makeJSON(tree);
    default:
      throw new Error(`\n${format} is an unknown formatter! Available options: stylish (default), plain (disabled), json.\n`);
  }
};

export default formatTree;
