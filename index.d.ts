/**
 * Like Promise.all but voids the return value.
 * @param promises The array of promises to void.
 * @example
 * ```
 * const pVoid = require("p-void");
 *
 * (async () => {
 *     await pVoid([Promise.resolve("Hello"), Promise.resolve("World")])
 *     //=> undefined
 * })()
 * ```
*/
declare function pVoid(promises: PromiseLike<any>[]): Promise<void>;

export = pVoid;
