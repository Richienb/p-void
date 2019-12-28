"use strict"

module.exports = (promises) => Promise.all(promises).then(() => undefined)
