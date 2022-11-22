//Function implementation
// const assertArraysEqual = function(actual, expected)  {
//   let emojiYes = String.fromCodePoint(0x1F7E2);
//   let emojiNo = String.fromCodePoint(0x1F47E);
//   if (actual === expected)  {
//     console.log(`Assertion Passed:  ${actual} === ${expected}` + emojiYes + emojiYes + emojiYes + " Your arrays matched. Nice work!");
//   } else {
//     console.assert(actual === expected, (`${actual} !== ${expected}` + emojiNo + emojiNo + emojiNo + " Your arrays did not match. Please provide matching arrays ensuring data types also match."));
//   }
// };

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])  {
      return false;   //returns false if something in array1 does not match array2 in the above for loop
    }
  }
  return true;
};

console.log("EQ Arrays is: ", eqArrays);
//this without function takes in a source array and items to remove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  //since we are returning a new array, declaring an empty one here. This uses the include method to check if one array includes another ones values while also ensuring that we have not already added the value
  let trimmedArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i]) && !trimmedArray.includes(source[i])) {
      trimmedArray.push(source[i]);
    }
  } return trimmedArray;
};

module.exports = without;

//TEST CASE 1 and 2
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// // Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));

// // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertObjectsEqual(eqArrays(words, ["hello", "world", "lighthouse"]));

// //this checks to see that eqArrays still works within this built in functionality
// assertObjectsEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);