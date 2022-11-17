const assertEqual = function (actual, expected) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected) {
    console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed `, `${actual} \t === \t ${expected}`);
  } else {
    console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed `, `${actual} \t !== \t ${expected}`);
  }
};

//Test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 2);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  //creating an empty object to return later
  const results = {}
  for (const item in itemsToCount) {  //we use a FOR IN statement here
    if (itemsToCount[item]) {
      let count;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          !count ? count = 1 : count++;  //if there is no count yet, count becomes one. Otherwise it acumulates by one
        }
        results[item] = count;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const checker = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(checker["Jason"], 1);
assertEqual(checker["Karima"], undefined);
assertEqual(checker["Fang"], 2);
assertEqual(checker["Agouhanna"], undefined);
