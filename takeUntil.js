//Assert Arrays Equals
const assertArraysEqual = function(actual, expected)  {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected)  {
    console.log(`Assertion Passed:  ${actual} === ${expected} ` + emojiYes + emojiYes + emojiYes + " Actual matched expected. Nice work! " + emojiYes + emojiYes + emojiYes);
  } else {
    console.assert(actual === expected, (`${actual} !== ${expected} ` + emojiNo + emojiNo + emojiNo + " Actual did not match Expected. " + emojiNo + emojiNo + emojiNo));
  }
};
//EQArrays
const eqArrays = function(array1, array2) {
  //if arrays are different length, throws false immediately, else continue
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])  {
      return false;   //returns false if something in array1 does not match array2 in the above for loop
    }
  }
  return true;
};

//takeUntil function
const takeUntil = function(array, callback) {
  //First we need a new array to store our data in, which can later be returned
  const resultArray = [];
  for (const item of array) {
    if (callback(item)) return resultArray;
    resultArray.push(item);
  }
  return resultArray;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2]), true);  // Assertion should pass
// assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, -1]), false); // Assertion should pass with this false because of the -1

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, stopCondition => stopCondition === ',');
// console.log(results2);
// assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);  // assertion should pass
// assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'New York City' ]), false); // Assertion should pass with this false due to NYC

// console.log("---");

// const data3 = ["I've", "been", "around", "Bingotown", ",", "I've", "got", "bingo!"];
// const results3 = takeUntil(data3, x => x === "bingo!");
// console.log(results3);
// assertArraysEqual(eqArrays(results3, ["I've", "been", "around", "Bingotown", ",", "I've", "got"]), true); // should pass
// assertArraysEqual(eqArrays(results3, ["I've", "been", "around", "Bingotown", ",", "I've", "got", "bingo!"]), false); // should pass as false

// console.log(takeUntil(data3, x => x === "bingo!"));

// assertArraysEqual(eqArrays(data1, [ 1, 2, 5, 7, 2 ]),true);
// console.log(eqArrays(data1, [ 1, 2, 5, 7, 2 ]),true);
// assertArraysEqual(eqArrays(data1, [ 1, 2, 5, 7, 2, -1, ]),false);
// console.log(eqArrays(data1, [ 1, 2, 5, 7, 2, -1, ]),false);
// assertArraysEqual(eqArrays(data1, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);
// assertArraysEqual(eqArrays(data1, [ 'I\'ve', 'been', 'around', 'Bingotown', ',', 'I\'ve', 'got']), true);
// assertArraysEqual(eqArrays(data1, [ 'I\'ve', 'been', 'around', 'Bingotown', ',', 'I\'ve', 'got', 'bingo!']), false);

//assertArraysEqual(eqArrays((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 7, 2, -1 ]), true);
