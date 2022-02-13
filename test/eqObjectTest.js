const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

// TEST CODE




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };


const cd = { a: { z: 1, b: {a: 3} }, b: 2, c: [1, 2, 3]};
// const cd = { a: { y: 0, z: 1 }, b: 2 };
const dc = { c: [1, 2, 3], a: { z: 1, b: {a: 3} }, b: 2 };
// const dc = { a: { z: 1 }, b: 2 };
const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, dc); // => true
// eqObjects(cd, cd2); // => false


describe('#eqObjects', () => {
  it("returns true for { a: \"1\", b: \"2\" } and { b: \"2\", a: \"1\" }", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false for { a: \"1\", b: \"2\" } and { a: \"1\", b: \"2\", c: \"3\"}", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("returns true for { a: { z: 1, b: {a: 3} }, b: 2, c: [1, 2, 3]} and { c: [1, 2, 3], a: { z: 1, b: {a: 3} }, b: 2 }", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("returns false for { a: { z: 1, b: {a: 3} }, b: 2, c: [1, 2, 3]} and { c: \"1\", d: [\"2\", 3, 4] }", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});




