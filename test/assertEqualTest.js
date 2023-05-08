const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Lab"]), "Hello");

assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());
assertEqual(
  tail(["Hello", "Lighthouse", "Lab"]).toString(),
  ["Lighthouse", "Lab"].toString()
);
