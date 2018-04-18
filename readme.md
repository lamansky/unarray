# unarray

Retrieves a single value wrapped in an array.

## Installation

Requires [Node.js](https://nodejs.org/) 4.0.0 or above.

```bash
npm i unarray
```

## API

The module exports a single function.

### Parameters

1. `a` (array)
2. Optional: Object argument:
    * Optional: `fallback` (any): A value to return if the function fails to retrieve a single value.
    * Optional: `recursive` (bool): If `true`, will retrieve a single value wrapped in nested arrays. Defaults to `false`.

### Return Value

A single value if found. On failure, returns `fallback` if provided; otherwise returns the last-searched array.

## Examples

```javascript
const unarray = require('unarray')

unarray([123]) // 123
unarray([123], {fallback: 'abc'}) // 123
unarray([1, 2]) // [1, 2]
unarray([1, 2], {fallback: 3}) // 3
unarray([[123]]) // [123]
unarray([[123]], {recursive: true}) // 123
```
