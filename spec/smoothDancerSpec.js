describe("smoothDancer", function() {

  var smoothDancer;
  var regDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    smoothDancer = new SmoothDancer(10, 20, timeBetweenSteps);
    regDancer = new Dancer(20, 30, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(smoothDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node slide", function() {
    //debugger;
    sinon.spy(smoothDancer.$node, 'slideToggle');
    smoothDancer.step();
    expect(smoothDancer.$node.slideToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(smoothDancer, "step");
      expect(smoothDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(smoothDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(smoothDancer.step.callCount).to.be.equal(2);
    });
  });
});
