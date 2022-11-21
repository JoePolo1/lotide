const assertArraysEqualForMiddleFile = require('../assertArraysEqualForMiddleFile');
const middle = require('../middle');

console.log("The middle number of your array is ", middle([17, 22, 43, 54, 75]));
console.log("The middle number of your array is ", middle([17, 22, 43, 54, 75, 1]));

// this is used to call the actual and expected results by running the middle function as "actual" and the expected as what we expect to return
const actual = middle([17, 22, 43, 54, 75, 1]);
const expected = [43, 54];

assertArraysEqualForMiddleFile(actual, expected);