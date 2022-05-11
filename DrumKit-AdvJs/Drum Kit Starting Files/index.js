
//DETECT BUTTON PRESS

var numberOfButtons = document.querySelectorAll(".drum").length; //selects all buttons in .drum class

for (var i = 0; i < numberOfButtons; i++) { //counts through buttons in .drum... adds to array, adds event listeners        

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML; //creates a variable for the innerHTML of the button clicked
        makeSound(buttonInnerHTML) //calls makeSound parsing in the innerHTML of the button

    });
}

//DETECT KEYBOARD PRESS

document.addEventListener("keydown", function (event) { //event is the object KeyboardEvent
//adds listener to every key, the event occurring is parsed into the function as event
    makeSound(event.key) //passes in the value of the key parameter for KeyboardEvent
}); 


function makeSound(key) { //passes in a value to be parsed that indicates which letter is pressed or clicked

    switch (key) { //runs a switch based on the parameter input value
        case "w":
            var crash = new Audio('sounds/crash.mp3'); //creates object with audio
            crash.play(); //plays audio
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "l":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio('sounds/tom-4.mp3'); //creates object with audio
            tom4.play();
            break;

        default:
            console.log(key);
    }
}