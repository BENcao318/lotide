const flatten = function(nestedArray) {
  let flattenedArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if(Array.isArray(nestedArray[i])) {
      for(let j = 0; j < nestedArray[i].length; j++) {
        flattenedArray.push(nestedArray[i][j]);
      }
    } else {
      flattenedArray.push(nestedArray[i]);
    }
  }
  return flattenedArray;
}

module.exports = flatten;