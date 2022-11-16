//Function implementation
const assertEqual = function(actual, expected)  {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected)  {
    console.log(`Assertion Passed:  ${actual} === ${expected}` + emojiYes + emojiYes + emojiYes);
  } else {
    console.assert(actual === expected, (`${actual} !== ${expected}` + emojiNo + emojiNo + emojiNo));
  }
};

//we need to make a function for eqArrays
const eqArrays = function(array1, array2) {
  // if (array1.toString() === array2.toString())  {  This line does not work because it returns issues with arrays that began with strings which should not match (see second last request, should fail, using this it passes erroneously)
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])  {
      return false;   //returns false if something in array1 does not match array2 in the above for loop
    }
  }
  return true;
};



eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should fail
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => Should fail because data type on 3 is different even though ti is semi truthy
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);    //should pass