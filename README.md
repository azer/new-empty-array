## new-empty-array

Create a new empty array with given length

## Install

```bash
$ npm install new-empty-array
```

## Usage

```js
var newArray = require('new-empty-array')

newArray(4)
// => [undefined, undefined, undefined, undefined]

newArray(6).map(Number.call, Number)
// => [0, 1, 2, 3, 4, 5]

newArray(3).map(Math.random)
// => [0.02533641504123807,
       0.10851371404714882,
       0.7234850313980132]
```
