const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should pass (false = false)
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false); // => Should pass because data type on 3 is different even though it is semi truthy
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);    //should pass