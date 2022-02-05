const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 2);

result = tail(["Labs"]);
assertEqual(result.length, 0); // ensure we get back zero element
assertEqual(result[0], undefined); // ensure first element is undefined

result = tail([]);
assertEqual(result.length, 0); // ensure we get back zero element
assertEqual(result[0], undefined); // ensure first element is undefined