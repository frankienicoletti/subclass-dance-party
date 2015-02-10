// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.ptop = top;
  this.pleft = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  //this.step();
  this.setPosition();
};
makeDancer.prototype.constructor = makeDancer;

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step

makeDancer.prototype.step = function(){
  var stepping = this.step.bind(this);
  var time = this.timeBetweenSteps;
  setTimeout(stepping, time);
};

// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/

makeDancer.prototype.setPosition = function(){
  var top = this.top;
  var left = this.left;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};