var Food = require('../food');
var assert = require('assert');

describe("Food", function() {
  it("should have a name", function() {
    var toast = new Food("toast", 10, false)
    assert.equal("toast", toast.name)
  })
  it("should have an energy value", function() {
    var toast = new Food("toast", 10, false)
    assert.equal(10, toast.energy)
  })
  it("can be poisonous", function() {
    var grape = new Food("grape", 1, true)
    assert.equal(true, grape.poisonous)
  })
})

