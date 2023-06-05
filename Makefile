install:
	npm ci

gendiff:
	node bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json plain

lint:
	npx eslint .

test:
	npm test

publish:
	npm publish --dry-run

test-coverage:
	npx jest --coverage
