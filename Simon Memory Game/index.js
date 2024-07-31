const buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level=0;

//section for key press
$(document).keydown( function (a) {
   
      if(!started){
         $("#level-title").html("Level " + level);
         nextSequence();
         started=true;
      }
   
   

});

//button click
$(".btn").on("click" , function () {
   var userChosenColour =  this.id;
   userClickedPattern.push(userChosenColour);
   aAnimation(userChosenColour);
   playSound(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
   }
);


//function for checking the answer of the user
function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      console.log("success");

      if(userClickedPattern.length === gamePattern.length){
         setTimeout(function() {
            nextSequence();
         },1000);
      }

      
   }
   else{
      playSound("wrong");
      $("h1").html("Game is Over. Press Any Key.");
      gameOver();
      startOver();
      
}


//function for 
function gameOver(){
   
   $("body").addClass("game-over");
      setTimeout(function() {
         $("body").removeClass("game-over");
      },200);
      

}
}
function nextSequence() {
   userClickedPattern=[];
   $("h1").html("Level " + level);
   level++;


   var randomNumber = Math.floor(Math.random()*4);
   var randomChoosenColour = buttonColors[randomNumber];
   gamePattern.push(randomChoosenColour);
   aAnimation(randomChoosenColour);
   playSound(randomChoosenColour);
   $( "#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
   

}
// Play sound
function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}
//Button animation
function aAnimation(name){
   $("#" + name).addClass("pressed");
   setTimeout(function(){
      $("#" + name ).removeClass("pressed");
   }, 100);
}


function startOver(){
level = 0;
gamePattern = [];
started = false;
}



