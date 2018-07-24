# kirigami
mokuroku modularizer

## Background
Sometimes a [mokuroku](https://github.com/gsi-cyberjapan/mokuroku-spec) is too big to deal with in a process. This tool cuts a mokuroku into mokuroku pieces for [modules](https://github.com/hfu/module-spec).

## Install
```console
$ git clone git@github.com:hfu/kirigami.git
$ cd kirigami
$ npm install
```

## Usage
```console
$ zcat mokuroku.csv.gz | node index.js 6
```
This outputs files like 6-56-25.mokuroku. The format is the same as mokuroku.csv.gz.

## Implementation detail
Obtaining an array of [z, x, y] from mokuroku line is as easy as the following. This depends on the behaviour of JavaScript, but this is beautiful!

```javascript
const zxy = line.split('/').map(v => parseInt(v))
```
