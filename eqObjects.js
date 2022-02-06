const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if(keys1.length !== keys2.length) {
    return false;
  };

  keys1.forEach(key1 => {
    if(object2[key1]){
      if(!Array.isArray(object1[key1]) && typeof object1[key1] === 'object') {
        eqObjects(object1[key1], object2[key1]);
      } else if(Array.isArray(object1[key1])) {
        if(!eqArrays(object2[key1], object1[key1])) return false;
      } else if(object2[key1] !== object1[key1]) {
        return false;
      }
    } else {
      return false;
    }
  });
  return true;
}


module.exports = eqObjects;