
/*
 * Author: Chris Johnson
 * Date: March 2020
 */
const assert = require('chai').assert;
const equal = assert.equal;

const curVer = process.versions;

const allocBuffer = require('../allocate_buffer.js').allocBuffer;

describe('allocBuff()', function() {
	describe('of length 10', function() {
		it('when 10 is needed', function() {
			assert.equal(allocBuffer(10).length, 10);
		});
	});
});


