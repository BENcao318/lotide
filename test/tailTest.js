const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
describe("#tail", () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("returns ['Yo Yo', 'Lighthouse'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });

  it("returns [] for ['labs']", () => {
    assert.deepEqual(tail(['Labs']), [])
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  });
})
