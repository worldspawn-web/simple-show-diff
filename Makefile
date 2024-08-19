install:
	npm ci

gendiff:
	npx tsx bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json plain
