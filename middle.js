// FUNCTION IMPLEMENTATION
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      console.log(`even length ${array.slice(array.length / 2 - 1, 3)}`);
      return array.slice(array.length / 2 - 1, 3);
    } else {
      console.log(`odd length ${array.slice(array.length / 2 - 1, 1)}`);
      return array.slice(
        Math.floor(array.length / 2),
        Math.ceil(array.length / 2)
      );
    }
  }
};

module.exports = middle;

