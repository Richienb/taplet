#!/usr/bin/env node
"use strict"
const { promises: fs } = require("fs")
const path = require("path")
const neatTap = require("neat-tap")
const { renderFile } = require("ejs")
const meow = require("meow")
const updateNotifier = require("update-notifier")

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

updateNotifier({ pkg: cli.pkg }).notify()

module.exports = (async () => {
	const tapData = await neatTap(process.stdin)
	const output = await renderFile(path.resolve(__dirname, "templates/main.ejs"), tapData)

	if (cli.flags.outputFile) {
		await fs.writeFile(cli.flags.outputFile, output)
	} else {
		console.log(output)
	}
})()
