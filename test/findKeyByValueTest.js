const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const person = {
  name: "ben",
  sex: "male",
  occupation: "software developer",
  height: "180cm",
  weight: "90kg",
  hobby: "video game",
}

describe('#findKeyByValue', () => {
  it("returns \"drama\" for \"The Wire\"", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for \"That '70s Show\"", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns \"180cm\" for \"height\"", () => {
    assert.deepEqual(findKeyByValue(person, "180cm"), "height");
  });

  it("returns \"software developer\" for \"occupation\"", () => {
    assert.deepEqual(findKeyByValue(person, "software developer"), "occupation");
  });
});
