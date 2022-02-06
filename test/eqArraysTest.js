const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
describe('#eqArrays', () => {
  it("returns true for [[2, 3], [4]] and [[2, 3], [4]] }", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false for [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false );
  });
});