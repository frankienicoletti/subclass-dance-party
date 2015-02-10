var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  //makeDancer superclass
  //debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');

  this.step();

};

//inherit makeDancer prototypes
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

//makeBlinkyDancer constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//blinkyStep that runs inherited step plus toggle
makeBlinkyDancer.prototype.step = function() {
  var stepping = this.step.bind(this);
  var time = this.timeBetweenSteps;
  setTimeout(stepping, time);
  this.$node.toggle();
};

