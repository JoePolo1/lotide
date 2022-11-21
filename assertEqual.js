const assertEqual = function(actual, expected) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  if (actual === expected) {
    console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed `, emojiYes, emojiYes, emojiYes, `${actual} \t === \t ${expected}`);
  } else {
    console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed `, emojiNo, emojiNo, emojiNo,`${actual} \t !== \t ${expected}`);
  }
};

//Exporting the function as a variable, as a module:
module.exports = assertEqual;

