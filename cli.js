#!/usr/bin/env node

"use strict"

const { resolve: resolvePath } = require("path")
const neatTap = require("neat-tap")
const { renderFile } = require("ejs")
const writeFile = require("write")
const meow = require("meow")

const cli = meow(`
    Usage
      $ taplet

    Options
      --outputFile, -o The file to write the HTML report to.

	Examples
	  $ tape test.js | taplet
	  <!DOCTYPE html>...

      $ tape test.js | taplet --outputFile report.html
`, {
	flags: {
		outputFile: {
			type: "string",
			alias: "o"
		}
	}
})

module.exports = (async () => {
	const tapData = await neatTap(process.stdin)
	const output = await renderFile(resolvePath(__dirname, "templates/base.ejs"), tapData)

	if (cli.flags.outputFile) {
		await writeFile(cli.flags.outputFile, output)
	} else {
		console.log(output)
	}
})()
