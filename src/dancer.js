// Dancer superclass
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
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

Dancer.prototype.lineUp = function() {
    this.$node.animate({left: "10px"}, 50);
};

Dancer.prototype.partners = function(partner) {
  partner.setPosition(this.top, (this.left+10));
};