var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence () {
    var randomNumber = Math.floor( Math.random() * 4 )
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
  }

function flashAnim(id) { 
    $("#" + id).fadeOut(100).fadeIn(100)
}
function playSound(id) {
  var audio = new Audio("sounds/" + id + ".mp3")
  audio.play()
}

function handler (id){
  var userChosenColour = id
  return userChosenColour
  }

$(".btn").click(function (output) { 
  flashAnim(this.id) 
  playSound(this.id) 
  nextSequence()
  console.log(gamePattern)
});

$(".btn").click(function (output) { 
  userChosenColour = handler(this.id)
  userClickedPattern.push(userChosenColour)
console.log(userClickedPattern)
  
});