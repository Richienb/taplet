const test = require("ava")
const execa = require("execa")

test("main", async t => {
	t.snapshot((await execa("node", ["cli"], {
		input: `1..6
#
# Some comment here.
#
ok 1 - First test
not ok 2 - Second test
`
	})).stdout)
})
