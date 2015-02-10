// Dancer superclass
var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

makeDancer.prototype.constructor = makeDancer;

// Schedule the next step
makeDancer.prototype.step = function(){
  var stepping = this.step.bind(this);
  setTimeout(stepping, this.timeBetweenSteps);
};

// Use css top and left properties to position our <span> tag
makeDancer.prototype.setPosition = function(top, left){
  //var top = this.top;
  //var left = this.left;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};