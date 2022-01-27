let args = process.argv.slice(2);

const pigLatin = function(str) {
  let newString = "";

  for(let i = 1; i < str.length; i++) {
    newString += str[i];
  }
  
  return newString + str[0] + 'ay';
}

let string = "";
for(let arg of args) {
  string += pigLatin(arg) + ' ';
}

console.log(string);