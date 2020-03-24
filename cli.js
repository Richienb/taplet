"use strict"

const neatTap = require("neat-tap")
const { renderFile } = require("ejs")
const write = require("write")

const data = `1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object is a Board
ok 2 - Board size is zero
ok 3 - The object is a Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1`

module.exports = (async () => {
	const tapData = await neatTap(data)
	await write("out.html", await renderFile("assets/templates/base.ejs", tapData))
})()
