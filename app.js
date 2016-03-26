console.log("Sanity Check: JS is working!");
var keyCountRacer1 = 0;
var keyCountRacer2 = 0;
/* TODO figure out how to create a function that will create a Racer */


// function Racer(){
//   this.color =
//
// }

$(document).ready(function() {
  var width = $("#firstRaceTrack").width();
  var movement = width/10-1;
  console.log(movementString);
  $(window).on("keydown", function(event) {
    if (event.which === 65) {
      keyCountRacer1++;
      console.log(keyCountRacer1);
      $("#firstRacer").animate({
        "padding-left": "+=" + movement
      }, 100, function (){
        if (keyCountRacer1 === 10) {
          alert("Racer 1 has won");
        }
      });
    }
  });

});
