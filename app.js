var racer1HTML = "#firstRacer";
var racer2HTML = "#secondRacer";
var winningNumberOfMoves = 20;

/* Load keyboard values*/

// var keyArray = {
// Backspace: 8,
// Tab: 9,
// Enter: 13,
// Space: 32,
// 0: 48,
// 1: 49,
// 2: 50,
// 3: 51,
// 4: 52,
// 5: 53,
// 6: 54,
// 7: 55,
// 8: 56,
// 9: 57,
// a: 97,
// b: 98,
// c: 99,
// d: 100,
// e: 101,
// f: 102,
// g: 103,
// h: 104,
// i: 105,
// j: 106,
// k: 107,
// l: 108,
// m: 109,
// n: 110,
// o: 111,
// p: 112,
// q: 113,
// r: 114,
// s: 115,
// t: 116,
// u: 117,
// v: 118,
// w: 119,
// x: 120,
// y: 121,
// z: 122,
// F1: 112,
// F2: 113,
// F3: 114,
// F4: 115,
// F5: 116,
// F6: 117,
// F7: 118,
// F8: 119,
// F9: 120,
// F10: 121,
// F11: 122,
// F12: 123
// };


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

  /* Select Icons */
  $("#vehicle1-cycle").on("click", function() {
    $("#firstRacer").attr("src", "ic_motorcycle_black_24dp_2x.png");
  });
  $("#vehicle1-car").on("click", function() {
    $("#firstRacer").attr("src", "Car-48.png");
  });
  $("#vehicle2-cycle").on("click", function() {
    $("#secondRacer").attr("src", "ic_motorcycle_black_24dp_2x.png");
  });
  $("#vehicle2-car").on("click", function() {
    $("#secondRacer").attr("src", "Car-48.png");
  });

  /* Select Course */
  $("input[name='course']").on("click", function() {
    $course = $(this).val();
    if ($course === "Short Course") {
      winningNumberOfMoves = 10;
    } else {
      winningNumberOfMoves = 20;
    }
    movement = (width / winningNumberOfMoves) - 1;
  });

});
