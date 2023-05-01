const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  return array.slice(1);
};

assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());
assertEqual(
  tail(["Hello", "Lighthouse", "Lab"]).toString(),
  ["Lighthouse", "Lab"].toString()
);
