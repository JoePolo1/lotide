const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', ()  =>  {
  it("should return the middle element in a provided array that contains an odd number of elements [43] for [17, 22, 43, 54, 75]",  ()  =>  {
    assert.deepEqual(middle([17, 22, 43, 54, 75]), [43]);
  });
  it("should return the middle two elements in a provided array that contains an even number of elements [43, 54] for [17, 22, 43, 54, 75]",  ()  =>  {
    assert.deepEqual(middle([17, 22, 43, 54, 75, 1]), [43, 54]);
  });
});


