const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  } else {
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }

    return true;
  }
  
}

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`)
  }
}





const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== ' ') {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  
  return results;
}

assertArraysEqual(letterPositions("hello Ben")["h"], [0]);
assertArraysEqual(letterPositions("hello Ben")["e"], [1, 7]);
assertArraysEqual(letterPositions("hello Ben")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello Ben")["o"], [4]);
assertArraysEqual(letterPositions("hello Ben")["B"], [6]);
assertArraysEqual(letterPositions("hello Ben")["n"], [8]);










module.exports = letterPositions;