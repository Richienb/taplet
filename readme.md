# taplet [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/taplet/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/taplet)

Create HTML from TAP reports.

[![NPM Badge](https://nodei.co/npm/taplet.png)](https://npmjs.com/package/taplet)

## Install

```sh
npm install --global taplet
```

## Usage

```
$ tape test.js | taplet
<!DOCTYPE html>...

$ tape test.js | taplet --outputFile report.html
```

## Example output

![Example output](media/example-output.png)
