/// outside imports
import { test, expect } from '@jest/globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
/// inside imports
import getDifference from '../src/index.js';

const importFileName = fileURLToPath(import.meta.url); // https://nodejs.org/api/esm.html#importmetaurl
const generatedName = path.dirname(importFileName);

const getFixturePath = (foldername, filename) => path.join(generatedName, '..', '__fixtures__', foldername, filename);
const readFile = (foldername, filename) => readFileSync(getFixturePath(foldername, filename), 'utf-8');

test.each([
  ['file1.json', 'file2.json', 'stylish', 'stylish.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'stylish.txt'],
  ['file1.json', 'file2.json', 'json', 'json.json'],
  ['file1.yaml', 'file2.yaml', 'json', 'json.json'],
])('Comparing "%s" and "%s" with "%s" formatter equals to "%s"', (filename1, filename2, format, expected) => {
  const result = readFile('comparison-data', expected);
  const file1 = getFixturePath('nested', filename1);
  const file2 = getFixturePath('nested', filename2);
  expect(getDifference(file1, file2, format)).toBe(result);
});
