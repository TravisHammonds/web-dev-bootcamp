
let gamePattern = [];

let userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let started = false;

let level = 0;

$(document).keypress(function() {
    if (started === false) {
        $("#level-title").text("Level: " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("level:" + level);
    let randomNumber = Math.floor(Math.random() *4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    let colorSound = new Audio ("sounds/" + name + ".mp3");
    colorSound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
    
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000);
    } 
}
    else {
        let wrongSounds = new Audio("sounds/wrong.mp3");
        wrongSounds.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

