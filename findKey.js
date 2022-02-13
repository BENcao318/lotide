/*
Find the key in the object argument that satisfies the condition provided by the callback function and return the result
*/
const findKey = function(object, callback) {
  for(let key in object) {
    if(callback(object[key])) {
      return key;
    }
  }
}

module.exports = findKey;