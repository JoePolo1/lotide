//Function implementation
const assertArraysEqual = function(actual, expected)  {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected)  {
    console.log(`Assertion Passed:  ${actual} === ${expected} ` + emojiYes + emojiYes + emojiYes + " Actual matched expected. Nice work! " + emojiYes + emojiYes + emojiYes);
  } else {
    console.assert(actual === expected, (`${actual} !== ${expected} ` + emojiNo + emojiNo + emojiNo + " Actual did not match Expected. " + emojiNo + emojiNo + emojiNo));
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])  {
      return false;   //returns false if something in array1 does not match array2 in the above for loop
    }
  }
  return true;
};


const words = ["ground", "control", "to", "major", "tom", "can", "you", "hear", "me"];

const map = function(array, callback)  {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(eqArrays(results1, ['gr']), true);
console.log(results1);
assertArraysEqual(eqArrays(results1, ['g1', 'c1', 't1','m1', 't1', 'c1','y1', 'h1', 'm1']), true);
console.log(eqArrays(results1, ['g1', 'c1', 't1','m1', 't1', 'c1','y1', 'h1', 'm1']));
console.log(eqArrays(['co'], ['co']));
assertArraysEqual(eqArrays(results1, ['g', 'c', 't','m', 't', 'c','y', 'h', 'm']), true);
// console.log(eqArrays(results1, [['gr'], ['co'], ['t5o'], ['ma'], ['to'], ['ca'], ['yo'], ['he'], ['me']]));

//EQARRAYS and ASSEERTARRAYSEQUAL test data
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should fail
// assertArraysEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => Should fail because data type on 3 is different even though ti is semi truthy
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);    //should pass




