var Trap = function(bait, velocity) {
  this.bait = bait;
  this.velocity = velocity;
}

Trap.prototype = {
  trap: function(rat) {
    if(this.bait === rat.favouriteFood) {
      rat.health -= this.velocity;
    }
  }
}

module.exports = Trap;