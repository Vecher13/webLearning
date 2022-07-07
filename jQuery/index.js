var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var isGameStarted = false;
var level = 0;


// next Sequence 
function nextSequence () {
  userClickedPattern = [];
    var randomNumber = Math.floor( Math.random() * 4 )
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    level += 1;
    $("h1").text("Level " + level)
    animatePress(randomChosenColour)
  }

 // flash Animation
function flashAnim(id) { 
    $("#" + id).fadeOut(100).fadeIn(100)
}

  //playSound
function playSound(id) {
  var audio = new Audio("sounds/" + id + ".mp3")
  audio.play()
}

function handler (id){
  var userChosenColour = id
  return userChosenColour
  }

  function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
    }, 100)
    }

$(document).keypress(function (e) { 
  if (e.key === "a" && isGameStarted === false) {
    isGameStarted = true
    nextSequence()

    $("h1").text("Level " + level)
  }
  
});

// Check Answer

function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer 
  //is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    //4. If the user got the most recent answer right in step 3, 
    //then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    gameOver();
    $("h1").text("Game Over, Press 'a' Key to Restart")
    startOver()
  }

}

// gameover

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  }, 200)
}

// startd over

function startOver(){
gamePattern = []
userClickedPattern = []
level = 0
isGameStarted = false
}


$(".btn").click(function (output) { 
  var userChosenColour = handler(this.id)
  userClickedPattern.push(userChosenColour)
playSound(userChosenColour)
animatePress(userChosenColour)
checkAnswer(userClickedPattern.length - 1)
  
});