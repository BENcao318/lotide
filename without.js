/*
Remove the requested item from the sourceArr and return the new array 
*/
const without = function(sourceArr, itemsToRemoveArr) {
  let arr = [];

  for(let i = 0; i < sourceArr.length; i++) {
    let remove = false;
    for(let j = 0; j < itemsToRemoveArr.length; j++) {
      if(sourceArr[i] === itemsToRemoveArr[j]) {
        remove = true;
      }
    }
    if(!remove) {
      arr.push(sourceArr[i]);
    }
  }
  
  return arr;
}






module.exports = without;