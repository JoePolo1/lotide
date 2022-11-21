const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should pass (false = false)
assertArraysEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false); // => Should pass (false = false) because data type on 3 is different even though ti is semi truthy
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);    //should pass