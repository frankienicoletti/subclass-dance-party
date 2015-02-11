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
  NervousDancer.prototype.disco.call(this);
  this.$node.toggle();
};

NervousDancer.prototype.disco = function() {
  var thisNode = this.$node;
  var mouseoverProps = {
    "background":"url(https://s3.amazonaws.com/uploads.hipchat.com/121019/1706993/iV2luMxvgZYLxpx/delete.png) no-repeat",
    "background-size": "cover",
    "border-radius": "0px",
    "border": "0px",
    "height": "80px",
    "width": "80px"
  };
  $(thisNode).on("mouseover", function() {
    thisNode.css(mouseoverProps);
    thisNode.toggle();
  });
};

