
const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', ()  =>  {
  it("returns the final two items in a provided array ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']",  ()  =>  {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
  it("should return an empty array when provided an array with a single element ['justOne']",  ()  =>  {
    assert.deepEqual(tail(["justOne"]), []);
  });
  it("should return an empty array when provided an empty array[]",  ()  =>  {
    assert.deepEqual(tail([]), []);
  });
  it("should not adjust the array which was provided in the argument parameter [1, 2, 3] = [1, 2, 3]",  ()  =>  {
    const words = [1 ,2, 3];
    assert.deepEqual(tail(words), [2, 3])
    assert.equal(words.length, 3);
  });
});
