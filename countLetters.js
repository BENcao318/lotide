/*
Count the number of letters  inside the string argument and return the result
*/
const countLetters = function(string) {
  let result = {};

  for(let char of string) {
    if(result[char]) {
      result[char] += 1;
    } else if(char !== ' '){
      result[char] = 1;
    }
  }

  return result;
}

module.exports = countLetters;