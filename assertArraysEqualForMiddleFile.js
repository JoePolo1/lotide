


const assertArraysEqualForMiddleFile = function(arrayOne, arrayTwo) {
  let emojiYes = String.fromCodePoint(0x1F7E2);
  let emojiNo = String.fromCodePoint(0x1F47E);
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) return console.log(emojiYes, emojiYes, emojiYes, `Assertion Passed`,`${arrayOne} \t === \t ${arrayTwo}`);
  console.log(emojiNo, emojiNo, emojiNo, `Assertion Failed`,`${arrayOne} \t !== \t ${arrayTwo}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) continue;
    return false;
  }

  return true;
};

module.exports = assertArraysEqualForMiddleFile;