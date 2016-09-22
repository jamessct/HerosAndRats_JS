var Rat = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Rat.prototype = {
  touchFood: function(food) {
    food.poisonous === true;
  },
  alive: function() {
    if(this.health >= 1) {
      return true;
    }
    else {
      return false;
    }
  },
  bite: function(hero) {
    hero.health -= 10;
  }
}

module.exports = Rat;