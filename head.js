const assertEqual = require('./assertEqual');
// import  benGetRich from './assertEqual.js';


const head = function(arr) {
  return arr[0];
}

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
assertEqual(head([6]), 6);
assertEqual(head(["Lighthouse", "Labs"]), "Lighthouse");
