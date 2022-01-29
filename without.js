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

const without = function(sourceArr, itemsToRemoveArr) {
  let arr = [];
  for(let i = 0; i < sourceArr.length; i++) {
    let remove = false;
    for(let j = 0; j < itemsToRemoveArr.length; j++) {
      if(sourceArr[i] === itemsToRemoveArr[j]) {
        remove = true;
      }
    }
    if(!remove) {
      arr.push(sourceArr[i]);
    }
  }
  

  return arr;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1, 2]));

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
