/*
Create a new array based on the array argument and the conditions from the callback function and return the result
*/
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;