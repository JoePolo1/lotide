
// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   let emojiYes = String.fromCodePoint(0x1F7E2);
//   let emojiNo = String.fromCodePoint(0x1F47E);
//   let result = eqArrays(arrayOne, arrayTwo);
//   if (result) return console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed`,`${arrayOne} \t === \t ${arrayTwo}`);
//   console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed`,`${arrayOne} \t !== \t ${arrayTwo}`);
// };

// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;

//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] === arrayTwo[i]) continue;
//     return false;
//   }

//   return true;
// };

const middle = function(arr) {
  // We then need an if statement to trigger if the array length is odd or even
  if ((arr.length % 2) !== 0) {
    const index = Math.round((arr.length - 1) / 2);
    let value = arr[index];
    return [value];
  }

  const index = Math.round((arr.length - 1) / 2);
  let value1 = arr[index - 1];
  let value2 = arr[index];
  return [value1, value2];
};

// console.log("The middle number of your array is ", middle([17, 22, 43, 54, 75]));
// console.log("The middle number of your array is ", middle([17, 22, 43, 54, 75, 1]));

// // this is used to call the actual and expected results by running the middle function as "actual" and the expected as what we expect to return
const actual = middle([17, 22, 43, 54, 75, 1]);
const expected = [43, 54];

//moved below test into middleTest file in subdirectory test
// assertArraysEqual(actual, expected);

module.exports = middle;

