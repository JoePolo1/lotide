

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++)  {
    tailArray.push(array[i]);
  }
  // console.log(tailArray); //proves out the resulting arrays contents after the loop is complete
  return tailArray;
};

module.exports = tail; 
