var assert = require('assert');
var ferry_kata = require ("../ferry.js")
discribe('ferry kata'; function(){
	it('should keep track of the number of people and cars', function(Done){
		var Theferry = new ferry (7, 5);
		//conslole.log(theferry);//
		assert.equal (Theferry.numberOfPeople, 7);
		assert.equal (Theferry.numberOfCars, 5);
		Done();
	});
}) 
