# Difference Calculator

Looks for a difference between two data structures. Usually being used for auto tracking of any changes in projects.

**Supported file formats**: json, yaml, yml.
**Supported output formats**: stylish (default), plain, json.

### Supported File Formats

<table>
  <tr>
    <td>
      json
    </td>
    <td>
      yaml
    </td>
    <td>
      yml
    </td>
  </tr>
</table>

### Supported Output

<table>
  <tr>
    <td>
      stylish (default)
    </td>
    <td>
      plain
    </td>
    <td>
      json
    </td>
  </tr>
</table>

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
