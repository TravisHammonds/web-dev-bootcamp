



function roll() {
    randomNumber1();
    randomNumber2();

    var x = randomNumber1();
    var y = randomNumber2();

    if (x > y) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (x < y) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else if (x === y) {
        roll();
    }

}


function randomNumber1 () {

    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) +1 ;
    
    if (n == 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        return n;
    }
    else if (n == 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        return n;
    }
    else if (n == 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        return n;
    }
    else if (n == 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        return n;
    }
    else if (n == 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        return n;
    }
    else if (n == 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        return n;
    }
    
}

function randomNumber2 () {

    var n2 = Math.random();
    n2 = n2 * 6;
    n2 = Math.floor(n2) +1 ;
    
    
    if (n2 == 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        return n2;
    }
    else if (n2 == 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        return n2;
    }
    else if (n2 == 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        return n2;
    }
    else if (n2 == 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        return n2;
    }
    else if (n2 == 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        return n2;
    }
    else if (n2 == 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        return n2;
    }
    
}

onload = roll(); 