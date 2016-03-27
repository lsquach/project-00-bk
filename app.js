console.log("Sanity Check: JS is working!");
var racer1HTML = "#firstRacer";
var racer2HTML = "#secondRacer";
var winningNumberOfMoves = 20;
/* TODO figure out how to create a function that will create a Racer */

/* Object Constructor */
function Racer(key){
  this.key = key;
  this.counter = 0;
  this.move = function(racer,movement) {
    $(racer).animate({
    "padding-left": "+=" + movement
    }, 100);
  };
}

$(document).ready(function() {
/* create 2 racer objects */
  var firstRacer = new Racer(65);
    console.log(Racer.key);
    var secondRacer = new Racer(76);
  /* determine width of racetrack and calculate the length of a move */
  var width = $("#firstRaceTrack").width();
  var movement = (width/winningNumberOfMoves)-1;

  /* watch for keydown events*/
  $(window).on("keydown", function(event) {
    if (event.which === 65) {   //"a" is pressed
      firstRacer.counter++;
      firstRacer.move(racer1HTML,movement);
      if (firstRacer.counter === winningNumberOfMoves) {
          alert("Racer 1 has won");
      }
    } else if (event.which === 76) { //"l" is pressed
      secondRacer.counter++;
      secondRacer.move(racer2HTML,movement);
      if (secondRacer.counter === winningNumberOfMoves) {
            alert("Racer 2 has won");
      }
    }
  });
});
