const assertEqual = function(actual, expected) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected) {
    console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed `, emojiYes, emojiYes, emojiYes, `${actual} \t === \t ${expected}`);
  } else {
    console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed `, emojiNo, emojiNo, emojiNo,`${actual} \t !== \t ${expected}`);
  }
};

const findKeyByValue = function(object, value)  {
  //It should scan the object and return the first key which contains the given value.
  const keys = Object.keys(object);
  for (const key of keys) {
    if (value === object[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//Test code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");   //should PASS assert equal
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // should PASS because that 70s show is not present, will return undefined

//Test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 2);