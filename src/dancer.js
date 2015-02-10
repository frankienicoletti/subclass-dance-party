// Dancer superclass
var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

Dancer.prototype.constructor = Dancer;

// Schedule the next step
Dancer.prototype.step = function(){
  var stepping = this.step.bind(this);
  setTimeout(stepping, this._timeBetweenSteps);
};

// Use css top and left properties to position our <span> tag
Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};