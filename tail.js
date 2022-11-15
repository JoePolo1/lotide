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

const tail = function(array) {
  let tailArray = [];
    for (let i = 1; i < array.length; i++)  {
      tailArray.push(array[i]);
    }
  console.log(tailArray); //proves out the resulting arrays contents after the loop is complete
  return tailArray;
};

// Test Case 1: Check the returned array elements
const test1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2); // ensure we get back two elements
assertEqual(test1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(test1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements for a single array
const test2 = tail(["Helloh"]);
assertEqual(test2.length, 2); //This should return 0 !== 2 since our new array has 0 items inside
assertEqual(test2[0], "Helloh"); //This should return UNDEFINED !== "Helloh"
assertEqual(test2[1], undefined); //This should return UNDEFINED === UNDEFINED

// Test Case 3: Check the returned array elements for an empty array
const test3 = tail([]);
assertEqual(test3.length, 1); //This should return 0 !== 1 since our new array has 0 items inside
assertEqual(test3[0], "Helloh"); //This should return UNDEFINED !== "Helloh"
assertEqual(test3[1], undefined); //This should return UNDEFINED === UNDEFINED

// Test Case: Check the original array to ensure it is not changed
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);