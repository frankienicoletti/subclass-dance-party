describe("drunkDancer", function() {

  var drunkDancer;
  var regDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    drunkDancer = new DrunkDancer(10, 20, timeBetweenSteps);
    regDancer = new Dancer(20, 30, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(drunkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fade", function() {
    //debugger;
    sinon.spy(drunkDancer.$node, 'fadeToggle');
    drunkDancer.step();
    expect(drunkDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(drunkDancer, "step");
      expect(drunkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(drunkDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(drunkDancer.step.callCount).to.be.equal(2);
    });
  });
});
