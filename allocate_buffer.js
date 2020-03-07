

// Node versions are likely only ever going to 
// use hard versions numbers so a simple check is OK.
function isAGtrThanB(a, b) {
	const aSplits = a.split('.');
	const bSplits = b.split('.');
	
	if(aSplits.length != bSplits.length || aSplits.length != 3) {
		throw new Error('Version number strings should be in the form x.x.x');
	}

	let isGtr = false;

	for (let i = 0; i < 3; i++) {
		if(aSplits[i] > bSplits[i]) {
			isGtr = true;
			break;
		} else if(aSplits[i] < bSplits[i]) {
			isGtr = false;
			break;
		}
	}
	return isGtr;
}

let NODE_VERSION = process.version;
let USE_MODERN_BUFFER_ALLOC = isAGtrThanB(process.version, '8.0.0');

function allocBuffer(length) {
	let buff = null;;
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