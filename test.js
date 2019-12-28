import test from "ava"
import pVoid from "."

test("main", async (t) => {
    t.is(await pVoid([Promise.resolve("Hello"), Promise.resolve("World")]), undefined)
})
