/*
Return the last element in the array argument
*/
const tail = function(arr) {
  arr.shift();
  return arr;
};

module.exports = tail;