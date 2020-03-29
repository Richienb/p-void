/**
 * Void a promise return value.
 * @param promise The promise to void.
 * @example
 * ```
 * const pVoid = require("p-void");
 *
 * (async () => {
 *     await pVoid(Promise.resolve("Hello World!"))
 *     //=> undefined
 * })()
 * ```
*/
declare function pVoid(promise: PromiseLike<any>): Promise<void>

export = pVoid
