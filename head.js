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


//Creating a function called head which returns the first item in an array
const head = function(array) {
  let firstChecker = array[0];
  return firstChecker;
};

//Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),"Green");

//Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);

