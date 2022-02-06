// const { findKey } = require(".");

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