

// Node versions are likely only ever going to 
// use hard versions numbers so a simple check is OK.
const isAGtrThanB = require('semver_basic').isAGtrThanB;

let NODE_VERSION = process.version;
let USE_MODERN_BUFFER_ALLOC = isAGtrThanB(NODE_VERSION, '8.0.0');

function allocBuffer(length) {
	let buff = null;
	if(USE_MODERN_BUFFER_ALLOC) {
			buff = Buffer.alloc(length);
	} else {
			buff = new Buffer(length);
	}
	buff.fill(0);
	return buff;
}


module.exports = {
	allocBuffer
};