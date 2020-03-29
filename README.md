# p-void [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-void/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-void)

Void a promise return value.

[![NPM Badge](https://nodei.co/npm/p-void.png)](https://npmjs.com/package/p-void)

## Install

```sh
npm install p-void
```

## Usage

```js
const pVoid = require("p-void");

(async () => {
    await pVoid(Promise.resolve("Hello World!"))
    //=> undefined
})()
```

## API

### pVoid(promise)

#### promise

Type: `promise`

The promise to void.
