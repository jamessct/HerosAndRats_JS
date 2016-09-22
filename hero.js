var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function() {
    return this.name
  },
  eat: function(food) {
    if(food.name === this.favouriteFood && food.poisonous === false) {
      this.health = this.health + (food.energy * 1.5);
    } 
    else if(food.name === this.favouriteFood && food.poisonous === true) {
      this.health = this.health - (food.energy * 1.5);
    }
    else if(food.name !== this.favouriteFood && food.poisonous === true) {
      this.health -= food.energy;
    } 
    else {
      this.health += food.energy;
    }
  },
  attack: function(weapon, rat) {
    rat.health -= weapon.power;
  }
}

module.exports = Hero;