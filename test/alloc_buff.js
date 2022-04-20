
/*
 * Author: Chris Johnson
 * Date: March 2020
 */
const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;
const equal = assert.equal;
const strictEqual = assert.strictEqual;
const deepEqual = require('deep-eql');
const rewire = require('rewire');

const curVer = process.versions;

const allocBuffer = rewire('../allocate_buffer.js').allocBuffer;

describe('allocBuff()', function() {
	describe('of length 10', function() {
		it('when 10 is needed', function() {
			assert.equal(allocBuffer(10).length, 10);
		});
	});
});


