// Smooth Dancer subclass
var SmoothDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  var styleSettings = {
    "border-radius": "5px",
    "border": "5px solid #800080"
  };
  this.$node.css(styleSettings);
};

//Inherit from superclass
SmoothDancer.prototype = Object.create(Dancer.prototype);
SmoothDancer.prototype.constructor = SmoothDancer;

//Updated step function to toggle the node (blink)
SmoothDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({height: "10px"}, 500);
};

