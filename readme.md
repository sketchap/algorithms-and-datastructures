# algorithmen
[![Build Status][travis-image]][https://travis-ci.org/sketchap/algorithms-and-datastructures-javascript.svg?branch=master]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Description

## Installation

```
$ npm install --save algorithmen
```

## Usage
```js
var algorithmen = require('algorithmen');
```

## API

### `algorithmen(data, [options])`
Description

#### Parameters
- **Array** `data`: An array of data
- **Object** `options`: An object containing the following fields:

#### Return
- **Array** - Result

## Development
- `npm run build` - Build task that generates both minified and non-minified scripts;
- `npm run test-server` - Run Mocha tests once;
- `npm run test-browser` - Run Mocha tests in the browser using Karma once;
- `npm run test` - Shortcut for `npm run test-server && npm run test-browser`;
- `npm run tdd` - Run Mocha tests & watch files for changes;
- `npm run tdd-browser` - Run Karma (w/ Mocha) tests & watch files for changes;
- `npm run coverage` - Run Isparta, a code coverage tool;

## License
MIT © [Silvio Tschapke](http://github.com/sketchap)

[travis-url]: https://travis-ci.org/sketchap/algorithmen
[travis-image]: https://img.shields.io/travis/sketchap/algorithmen.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/sketchap/algorithmen
[coveralls-image]: https://img.shields.io/coveralls/sketchap/algorithmen.svg?style=flat-square

[depstat-url]: https://david-dm.org/sketchap/algorithmen
[depstat-image]: https://david-dm.org/sketchap/algorithmen.svg?style=flat-square
