### Hexlet tests and linter status:
[![Actions Status](https://github.com/worldspawn-web/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/worldspawn-web/frontend-project-46/actions)
<br>
[![project-check](https://github.com/worldspawn-web/frontend-project-46/actions/workflows/project.check.yml/badge.svg)](https://github.com/worldspawn-web/frontend-project-46/actions/workflows/project.check.yml)
<br>
<a href="https://codeclimate.com/github/worldspawn-web/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/598223ff374c0bd4e9ce/maintainability" /></a>
<br>
<a href="https://codeclimate.com/github/worldspawn-web/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/598223ff374c0bd4e9ce/test_coverage" /></a>
<hr>

# Difference Calculator
Looks for a difference between two data structures. A simillar technique is used for automatically tracking changes in configuration files.
<br>
**Supported file formats**: json, yaml, yml.
**Supported output formats**: stylish (default), plain, json.

## Requirements
- Node.js > 16.0
- Any Unix OS or WSL

## How to install
1. **Clone** this repository.
2. **Install** dependencies:
```
npm ci
```
OR:
```
make install
```

### Usage:
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1            path to file one
  filepath2            path to file two

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

## Demonstration:
<hr>

### JSON -> Stylish: (default)

[![asciicast](https://asciinema.org/a/8BPvp91ENA4bwutDxKimJczyT.svg)](https://asciinema.org/a/8BPvp91ENA4bwutDxKimJczyT)
<hr>

### YAML -> Plain:

[![asciicast](https://asciinema.org/a/7xE3EQMqwXaCkfttonWEaTTRw.svg)](https://asciinema.org/a/7xE3EQMqwXaCkfttonWEaTTRw)