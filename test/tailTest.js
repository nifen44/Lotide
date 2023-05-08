const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.equal(tail([1, 2, 3]), 3);
  });

  it("returns '5' for ['4','5']", ()=>{
    assert.equal(tail(['4','5']), '5');
  })
});