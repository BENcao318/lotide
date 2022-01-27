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

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`)
  }
}

const flatten = function(nestedArray) {
  let flattenedArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if(Array.isArray(nestedArray[i])) {
      for(let j = 0; j < nestedArray[i].length; j++) {
        flattenedArray.push(nestedArray[i][j]);
      }
    } else {
      flattenedArray.push(nestedArray[i]);
    }
  }
  return flattenedArray;
}


assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(flatten([1, 2, [3, 4], 5, [6]]))
