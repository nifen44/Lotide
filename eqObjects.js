const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const objArr1 = Object.entries(object1);
  const objArr2 = Object.entries(object2);

  let isSame = false;
  if (objArr1.length == objArr2.length) {
    objArr1.forEach((ele) => {
      console.log(ele);
      isSame = objArr2.some((subarr) => subarr.every((v, i) => v === ele[i]));
    });
  }

  console.log(isSame);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, anotherShirtObject); // => true
eqObjects(shirtObject, longSleeveShirtObject); // => false
