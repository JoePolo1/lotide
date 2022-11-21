//Assert Equals code here
const assertEqual = function(actual, expected) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected) {
    console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed `, emojiYes, emojiYes, emojiYes, `${actual} \t === \t ${expected}`);
  } else {
    console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed `, emojiNo, emojiNo, emojiNo,`${actual} \t !== \t ${expected}`);
  }
};

const findKey = function(object, callbackFunc)  {
  //It should scan the object and return the first key which contains the given value.
  for (const keyName in object) {
    //the below pulls the key name associated with the provided argument and perhaps
    //more importantly, tells us that the number of the argument is specifically located
    // within the value due to bracket notation. The only Values are numbers, "stars" are also keys.
    if (callbackFunc(object[keyName])) {
      return keyName;
    }
  }
};

//test case 1
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

//test case 2
let resultsChecker = findKey({
  "House Music": { stars: 1 },
  "Jungle":   { stars: 3 },
  "Techno":      { stars: 2 },
  "Breakbeat":   { stars: 3 },
  "Trance":       { stars: 2 },
  "Lounge":  { stars: 3 }
}, x => x.stars === 3); // => "Jungle"

module.exports = findKey;

console.log(resultsChecker);

assertEqual(resultsChecker, "BANANA should return a fail"); // should return false, as Akaleri does not equal banana
assertEqual(resultsChecker, "Jungle"); // Should return true and pass, Akaleri is Akaleri