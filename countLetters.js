const assertEqual = function(actual, expected) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected) {
    console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed `, `${actual} \t === \t ${expected}`);
  } else {
    console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed `, `${actual} \t !== \t ${expected}`);
  }
};

const countLetters = function(sentence) {
  const trimmedSentence = sentence.replaceAll(" ", "");
  const result = {};
  for (const letter of trimmedSentence) {
    !result[letter] ? result[letter] = 1 : result[letter]++;
  }
  return result;
};

module.exports = countLetters;

// const checker = countLetters("This is a checkpoint");
// assertEqual(checker.T, 1); // checks how many Capital T's there are in the checker variable, there is one uppercase and one lower.
// console.log(countLetters("Joe Polo"));
