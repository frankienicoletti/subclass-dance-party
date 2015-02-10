// Drunk Dancer subclass
var DrunkDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

//Inherit from superclass
DrunkDancer.prototype = Object.create(Dancer.prototype);
DrunkDancer.prototype.constructor = DrunkDancer;

//Updated step function to fade toggle the node
DrunkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

