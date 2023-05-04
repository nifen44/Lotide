const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  console.log(Object.entries(obj));
  const array = Object.entries(obj);
  let name = "";
  for (let ele of array) {
    if (callback(ele[1])) {
      name = ele[0];
      break;
    }
  }

  return name;
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);
