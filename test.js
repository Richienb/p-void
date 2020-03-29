const test = require("ava")
const pVoid = require(".")

test("main", async t => {
	t.is(await pVoid(Promise.resolve("Hello World!")), undefined)
})
