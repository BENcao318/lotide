/*
Find the middle element in the array argument and return the result
*/
const middle = function(array) {
  let result = [];
  let length = array.length;

  if(length <= 2) return result;

  if(length % 2 === 0) {
    result.push(array[length / 2 - 1]);
    result.push(array[length / 2]);
  } else {
    result.push(array[Math.floor(length / 2)]);
  }
  return result;
}

module.exports = middle;