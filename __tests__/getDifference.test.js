import { test, expect } from '@jest/globals';

import parser from '../src/parser';
import expectedResult from '../__fixtures__/expectedResult.js';

const data1 = './__fixtures__/file1.json';

test('returns parsed data(JSON)', () => {
  expect(parser(data1).toEqual(expectedResult));
});
