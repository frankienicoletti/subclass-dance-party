// Smooth Dancer subclass
var makeSmoothDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="SmoothDancer"></span>');
  this.step();
};

//Inherit from superclass
makeSmoothDancer.prototype = Object.create(makeDancer.prototype);
makeSmoothDancer.prototype.constructor = makeSmoothDancer;

//Updated step function to toggle the node (blink)
makeSmoothDancer.prototype.step = function() {
  var stepping = this.step.bind(this);
  setTimeout(stepping, this.timeBetweenSteps);
  this.$node.slideToggle();
};

