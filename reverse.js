let args = process.argv.slice(2);

const reverse = function(str) {
  let newString = "";
  for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}


for(let arg of args) {
  console.log(reverse(arg));
}

module.exports = reverse;