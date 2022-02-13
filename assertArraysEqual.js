const eqArrays = require('./eqArrays');

/*
Compare two arrays in the arguments and console.log the result
*/
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`)
  }
}

module.exports = assertArraysEqual;