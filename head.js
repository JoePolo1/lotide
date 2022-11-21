//Function require
const assertEqual = require('./assertEqual');


//Creating a function called head which returns the first item in an array
const head = function(array) {
  let firstChecker = array[0];
  return firstChecker;
};

module.exports = head;

