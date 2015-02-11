$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor($("body").height() * Math.random()),
      Math.floor($("body").width() * Math.random()),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    }

  );

  $(".lineUpButton").on("click", function(event){
    for (var i=0;i<window.dancers.length;i++) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('click', '.dancer', function(event){
    var orig1 = $(this).top;
    var orig2 = $(this).left;
    console.log("original", orig1, orig2);
    var distance=0, thisDistance=0;
    var closestNode;
    for (var i=0;i<window.dancers.length;i++) {
      var side1 = window.dancers[i].top;
      var side2 = window.dancers[i].left;
      console.log("in for loop", side1, side2);
      thisDistance = Math.sqrt(((orig1-side1)*(orig1-side1))+((orig2-side2)*(orig2-side2)));
      if (thisDistance > distance) {
        distance = thisDistance;
        closestNode = window.dancers[i];
      }
    }
    $(this).partners(closestNode);
  });

});