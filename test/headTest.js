const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
assertEqual(head([6]), 6);
assertEqual(head(["Lighthouse", "Labs"]), "Lighthouse");