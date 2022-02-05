const { findKey } = require(".");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, keyValue) {
  let result = undefined;

  for(let key in obj) {
    if(obj[key] === keyValue) {
      result = key;
    }
  }

  return result;
}

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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(person, "180cm"), "height");
assertEqual(findKeyByValue(person, "software developer"), "occupation");
module.exports = findKeyByValue;