// Blinky Dancer subclass
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.step();
};

//Inherit from superclass
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//Updated step function to toggle the node (blink)
makeBlinkyDancer.prototype.step = function() {
  var stepping = this.step.bind(this);
  setTimeout(stepping, this.timeBetweenSteps);
  this.$node.toggle();
};

