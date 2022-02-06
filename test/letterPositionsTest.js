const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

// TEST CODE
describe('#letterPositions', () => {
  it("returns [0] for [\"h\"]", () => {
    assert.deepEqual(letterPositions("hello Ben")["h"], [0]);
  });

  it("returns [1, 7] for [\"e\"]", () => {
    assert.deepEqual(letterPositions("hello Ben")["e"], [1, 7]);
  });

  it("returns [2, 3] for [\"l\"]", () => {
    assert.deepEqual(letterPositions("hello Ben")["l"], [2, 3]);
  });

  it("returns [4] for [\"o\"]", () => {
    assert.deepEqual(letterPositions("hello Ben")["o"], [4]);
  });

  it("returns [6] for [\"B\"]", () => {
    assert.deepEqual(letterPositions("hello Ben")["B"], [6]);
  });

  it("returns [8] for [\"n\"]", () => {
    assert.deepEqual(letterPositions("hello Ben")["n"], [8]);
  });
})
