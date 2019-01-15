wx-generator
============

Weapp page/component generator cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wx-generator.svg)](https://npmjs.org/package/wx-generator)
[![Codecov](https://codecov.io/gh/tim1023/wx-generator/branch/master/graph/badge.svg)](https://codecov.io/gh/tim1023/wx-generator)
[![Downloads/week](https://img.shields.io/npm/dw/wx-generator.svg)](https://npmjs.org/package/wx-generator)
[![License](https://img.shields.io/npm/l/wx-generator.svg)](https://github.com/tim1023/wx-generator/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wx-generator
$ wx-generator COMMAND
running command...
$ wx-generator (-v|--version|version)
wx-generator/1.0.2 darwin-x64 node-v10.13.0
$ wx-generator --help [COMMAND]
USAGE
  $ wx-generator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wx-generator create [TYPE] [NAME]`](#wx-generator-create-type-name)
* [`wx-generator help [COMMAND]`](#wx-generator-help-command)

## `wx-generator create [TYPE] [NAME]`

TYPE can be 'page' or 'component', NAME will be the generated dir and file name.

```
USAGE
  $ wx-generator create [TYPE] [NAME]
```

_See code: [src/commands/create.js](https://github.com/tim1023/wx-generator/blob/v1.0.2/src/commands/create.js)_

## `wx-generator help [COMMAND]`

display help for wx-generator

```
USAGE
  $ wx-generator help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->
