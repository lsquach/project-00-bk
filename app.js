var racer1HTML = "#firstRacer";
var racer2HTML = "#secondRacer";
var winningNumberOfMoves = 20;
/* TODO user input
    --short course/longcourse
    --choice of icons
    --choice of keys
    */

/* Object Constructor */
function Racer(key) {
  this.key = key;
  this.counter = 0;

  this.move = function(racer, movement) {
    $(racer).animate({
      "padding-left": "+=" + movement
    }, 50);
  };
}


$(document).ready(function() {
  /* create 2 racer objects */
  var firstRacerObj = new Racer(65);
  var secondRacerObj = new Racer(76);
  /* determine width of racetrack and calculate the length of a move */
  var width = $("#firstRaceTrack").width();
  var movement = (width / winningNumberOfMoves) - 1;

  /* watch for keydown events*/
  $(window).on("keydown", function(event) {
  console.log(firstRacerObj);
    if (event.which === 65 && firstRacerObj.counter !== winningNumberOfMoves) { //"a" is pressed
      firstRacerObj.counter++;
      firstRacerObj.move(racer1HTML, movement);

      /* test if Racer 1 has won */
      if (firstRacerObj.counter === winningNumberOfMoves) {
        alert("Racer 1 has won");
      }
    } else if (event.which === 76 && secondRacerObj.counter !== winningNumberOfMoves) { //"l" is pressed
      secondRacerObj.counter++;
      secondRacerObj.move(racer2HTML, movement);

      /* test if Racer 2 has won */
      if (secondRacerObj.counter === winningNumberOfMoves) {
        alert("Racer 2 has won");
      }
    }
  });

  /* reset button */
  $("#submit").on("click", function(e) {
    e.preventDefault();
    resetCounters();
  });

        /* reset game */
  function resetCounters() {
    $('.racer').css("padding-left", 0);
    firstRacerObj.counter = 0;
    secondRacerObj.counter = 0;
  }
});
