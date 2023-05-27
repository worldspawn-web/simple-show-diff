/// outside imports
import { test, expect } from '@jest/globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
/// inside imports
import getDifference from '../src/index.js';

const importFileName = fileURLToPath(import.meta.url); // https://nodejs.org/api/esm.html#importmetaurl
const generateDName = path.dirname(importFileName);

const getFixturePath = (filename) => path.join(generateDName, '..', '__fixtures__', filename);

test('JSON file', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  const resultFilename = getFixturePath('fileResult.txt');
  const result = fs.readFileSync(resultFilename, 'utf-8'); // https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
  expect(getDifference(filename1, filename2).toBe(result));
});
