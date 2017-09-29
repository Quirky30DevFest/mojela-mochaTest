var assert = require('assert');
var car = require ("../car.js")
describe('ferry kata', function(){
	it('should create a car', function(Done){
		var Thecar = new car ("red", 4);
		assert.equal (Thecar.color, "red");
		assert.equal (Thecar.numberofpassengers, 4);
		Done();
	});
});