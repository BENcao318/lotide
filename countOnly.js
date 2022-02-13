/*
Count the number of items in the array argument based on the itemsToCount(object), then return the result as an object
*/
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for(let item of allItems) {
    if(itemsToCount[item]){
      if(results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }  
  }

  return results;
}

module.exports = countOnly;