const head = require('../head');
// assert function from chai
const assert = require('chai').assert;


// TEST CODE
describe('#head', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });


  it("returns '6' for ['6']", () => {
    assert.strictEqual(head(['6']), '6');
  })
})