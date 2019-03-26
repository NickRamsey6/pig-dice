// Business Logic
// function Player1 (name, roundScore, totalScore) {
//   this.name = name;
//   this.roundScore = 0;
//   this.totalScore = 0;
// }

//Dice Roll
function roll() {
  return Math.floor((Math.random() * 6) + 1);
}

//Round Score
// Player1.prototype.roundScore = function (roll) {
//
// }
//
// Player1.prototype.Total = function() {
//   return this.totalScore + this.roundScore
// }

// User Interface Logic
$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    var result = roll();
    alert(result);
    // debugger;
    // var name1 = $("input#name1").val();
    // var name2 = $("input#name2").val();

  });
});
