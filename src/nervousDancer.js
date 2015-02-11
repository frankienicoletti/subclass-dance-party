// Nervous Dancer subclass
var NervousDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.styleSettings = {
    "border-radius": "15px",
    "border": "15px solid #ADD8E6"
  };
  this.$node.css(this.styleSettings);
};

//Inherit from superclass
NervousDancer.prototype = Object.create(Dancer.prototype);
NervousDancer.prototype.constructor = NervousDancer;

//Updated step function to toggle the node (blink)
NervousDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.slideToggle(1000);
  var thisNode = this.$node;
  $(thisNode).on("mouseover", function() {thisNode.hide();});
};

