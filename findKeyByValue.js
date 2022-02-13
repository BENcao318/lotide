/*
Find the key from the object argument that is matching the keyValue argument and return the result
*/
const findKeyByValue = function(obj, keyValue) {
  let result = undefined;

  for(let key in obj) {
    if(obj[key] === keyValue) {
      result = key;
    }
  }

  return result;
}

module.exports = findKeyByValue;