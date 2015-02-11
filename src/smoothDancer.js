// Smooth Dancer subclass
var SmoothDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.styleSettings = {
    "border-radius": "15px",
    "border": "15px solid #ADD8E6"
  };
  this.$node.css(this.styleSettings);
};

//Inherit from superclass
SmoothDancer.prototype = Object.create(Dancer.prototype);
SmoothDancer.prototype.constructor = SmoothDancer;

//Updated step function to toggle the node (blink)
SmoothDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.slideToggle(1000);
  var thisNode = this.$node;
  $(thisNode).on("mouseover", function() {thisNode.css({"border-radius": "30px", "border": "30px solid #730048"});});
  //$(thisNode).on("mouseup", function() {thisNode.css({"border": "30px solid #ADD8E6"});});
  this.$node.slideToggle(1000);
};

