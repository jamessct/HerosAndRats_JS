var Rat = require('../rat');
var Trap = require('../trap');
var assert = require('assert');

describe("Rat", function() {
  it("should have name", function() {
    var ronald = new Rat("Ronald", 20, "bacon");
    assert.equal("Ronald", ronald.name)
  })
  it("should have size", function() {
    var ronald = new Rat("Ronald", 20, "bacon");
    assert.equal(20, ronald.health)
  })
  it("should have favourite food", function() {
    var ronald = new Rat("Ronald", 20, "bacon");
    assert.equal("bacon", ronald.favouriteFood)
  })
  it("can be damaged by trap if it has fav food as bait", function() {
    var ronald = new Rat("Ronald", 20, "bacon");
    var baconTrap = new Trap("bacon", 10);
    baconTrap.trap(ronald);
    assert.equal(10, ronald.health)
  })
  it("can die if trap velocity is higher than health", function() {
    var ronald = new Rat("Ronald", 10, "bacon");
    var baconTrap = new Trap("bacon", 10);
    baconTrap.trap(ronald);
    assert.equal(false, ronald.alive())
  })
})