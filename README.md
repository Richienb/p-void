# pVoid [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-void/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-void)

Like `Promise.all` but voids the return value.

[![NPM Badge](https://nodei.co/npm/p-void.png)](https://npmjs.com/package/p-void)

## Install

```sh
npm install p-void
```

## Usage

```js
const pVoid = require("p-void");

(async () => {
    await pVoid([Promise.resolve("Hello"), Promise.resolve("World")])
    //=> undefined
})()
```

## API

### pVoid(promises)

#### promises

Type: `array`

The array of promises to void.
