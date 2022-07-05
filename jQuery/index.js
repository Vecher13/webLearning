var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence () {
    var randomNumber = Math.floor( Math.random() * 4 )
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
  

  }

  function flashAnim(id) { 
    $("#" + id).fadeOut(100).fadeIn(100)
}

$(".btn").click(function (output) { 
  flashAnim(output.currentTarget.id)  
  nextSequence()
  console.log(gamePattern)
});
 