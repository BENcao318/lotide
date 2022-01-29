const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if(keys1.length !== keys2.length) {
    return false;
  };

  for(let key1 of keys1) {
    if(object2[key1]) {
      if(Array.isArray(object2[key1]) && Array.isArray(object1[key1])) {
        if(!eqArrays(object2[key1], object1[key1])) return false;
      } else if(object2[key1] !== object1[key1]) return false;
    } else {
      return false;
    }
  }
  return true;
}

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}



// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);