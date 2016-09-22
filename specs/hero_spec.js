var Hero = require('../hero');
var Food = require('../food');
var Weapon = require('../weapon');
var Rat = require('../rat')
var assert = require('assert');

describe("Hero", function() {
  it("should have a name", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    assert.equal("Horatio", horatioTheHero.name)
  })
  it("health should start at 100", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    assert.equal(100, horatioTheHero.health) 
  })
  it("should have favourite food", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    assert.equal("bread", horatioTheHero.favouriteFood)
  })
  it("should be able to say name", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    assert.equal("Horatio", horatioTheHero.talk())
  })
  it("should gain energy by eating", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    var doritos = new Food("Doritos", 5);
    horatioTheHero.eat(doritos);
    assert.equal(105, horatioTheHero.health)
  })
  it("favourite food should give 1.5 times energy", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    var bread = new Food("bread", 10, false);
    horatioTheHero.eat(bread);
    assert.equal(115, horatioTheHero.health)
  })
  it("will lose health by eating poisonous food", function() {
    var horatioTheHero = new Hero("Hortio", 100, "bread");
    var breadstick = new Food("breadstick", 10, true);
    horatioTheHero.eat(breadstick);
    assert.equal(90, horatioTheHero.health)
  })
  it("can kill rat with weapon", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    var ronald = new Rat("ronald", 10, "bacon");
    var bazooka = new Weapon("bazooka", 100000);
    horatioTheHero.attack(bazooka, ronald)
    assert.equal(false, ronald.alive())
  })
  it("loses health when bit by rat", function() {
    var horatioTheHero = new Hero("Horatio", 100, "bread");
    var ronald = new Rat("ronald", 10, "bacon");
    ronald.bite(horatioTheHero);
    assert.equal(90, horatioTheHero.health)
  })
})