// //Function implementation
// const assertArraysEqual = function(actual, expected)  {
//   let emojiYes = String.fromCodePoint(0x1F7E2);
//   let emojiNo = String.fromCodePoint(0x1F47E);
//   if (actual === expected)  {
//     console.log(`Assertion Passed:  ${actual} === ${expected} ` + emojiYes + emojiYes + emojiYes + " Your arrays matched. Nice work! " + emojiYes + emojiYes + emojiYes);
//   } else {
//     console.assert(actual === expected, (`${actual} !== ${expected} ` + emojiNo + emojiNo + emojiNo + " Your arrays did not match. " + emojiNo + emojiNo + emojiNo));
//   }
// };
// //EQ Arrays Function
// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i])  {
//       return false;   //returns false if something in array1 does not match array2 in the above for loop
//     }
//   }
//   return true;
// };

const { assert } = require("console");


//TEST


const assertArraysEqual = function(arrayOne, arrayTwo) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) return console.log(emojiYes + emojiYes + emojiYes + ` Assertion Passed ` + emojiYes + emojiYes + emojiYes + ` ${arrayOne} \t === \t ${arrayTwo}`);
  console.log(emojiNo + emojiNo + emojiNo + ` Assertion Failed ` + emojiNo + emojiNo + emojiNo + ` ${arrayOne} \t !== \t ${arrayTwo}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) continue;
    return false;
  }

  return true;
};

const letterPositions = function(sentence) {
  // const trimmedSentence = sentence.replaceAll(" ", "");
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    !results[letter] ? results[letter] = [i] : results[letter].push(i);
  }
  delete results [" "];
  return results;
};

console.log(`testing for assertArraysEquals which is here as ${assertArraysEqual}`);

module.exports = letterPositions;

letterPositions("hello");

// Test code below:
// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("hello"));

// checker = letterPositions("lighthouse in the house");

// assertArraysEqual(checker.h,[3, 5, 15, 18]);
// console.log(checker.h,[3, 5, 15, 18])