// Drunk Dancer subclass
var makeDrunkDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="drunkDancer"></span>');
  //this.$node.css = { color: 'green' }; fading dancers should be green
  this.step();
};

//Inherit from superclass
makeDrunkDancer.prototype = Object.create(makeDancer.prototype);
makeDrunkDancer.prototype.constructor = makeDrunkDancer;

//Updated step function to fade toggle the node
makeDrunkDancer.prototype.step = function() {
  var stepping = this.step.bind(this);
  setTimeout(stepping, this.timeBetweenSteps);
  this.$node.fadeToggle();
};

