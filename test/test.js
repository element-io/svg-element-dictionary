// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	dict = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'svg-element-dictionary', function tests() {
	'use strict';

	it( 'should export an object', function test() {
		expect( dict ).to.be.an( 'object' );
		assert.ok( Object.keys( dict ) );
	});

});