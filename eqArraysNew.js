const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
      if(arr1[i].length !== arr2[i].length) {
        return false;
      } else {
        eqArrays(arr1[i], arr2[i]);
      }
    } else if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);// => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false )// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false