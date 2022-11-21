//Assert Objects Equal
const assertObjectsEqual = function(actual, expected) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  const inspect = require('util').inspect;
  // let result = eqObjects(actual, expected);
  if (actual === expected) {
    return console.log(emojiYes + emojiYes + emojiYes + ` Assertion Passed `, emojiYes + emojiYes + emojiYes + ` ${inspect(actual)} \t === \t ${inspect(expected)}`);
  } else {
    console.log(emojiNo + emojiNo + emojiNo + ` Assertion Failed `, emojiNo + emojiNo + emojiNo + ` ${inspect(actual)} \t !== \t ${inspect(expected)}`);
  }
};

// eqArrays
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }

  return true;
};

// function for taking in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length)  return false;

  for (const key of keys1)  {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) continue;
      return false;
    }
    if (object1[key] !== object2[key]) return false;
    continue;
  }
  return true;
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true should pass as true = true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => should return pass, as false = false

assertObjectsEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should fail
assertObjectsEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => Should fail because data type on 3 is different even though ti is semi truthy
assertObjectsEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);    //should pass