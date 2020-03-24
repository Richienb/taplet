const TapParser = require("tap-parser")
const toReadableStream = require("to-readable-stream")

const parseTapStream = (data, options = {}) => new Promise((resolve) => {
	const assertions = []

	const parser = new TapParser(options, (result) => resolve({ ...result, assertions }))

	parser.on("assert", (data) => assertions.push(data))
	data.pipe(parser)
})

module.exports = async (data, options) => {
	if (typeof data === 'string' || Buffer.isBuffer(data)) {
		data = toReadableStream(data);
	}

	return parseTapStream(data, options)
}
