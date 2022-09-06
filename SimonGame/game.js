

var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //console.log(randomChosenColour);
    let SB = document.querySelector("." + randomChosenColour);
   // console.log("next" + SB.innerHTML);
    flash(SB);
    console.log("gamePattern:    "+gamePattern);

}
var buttons = document.querySelectorAll("button");
var memoryStep = 0;
var step = false;

for (var i = 0; i < 4; i++) {

    buttons[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        flash(this);
        console.log("buttonInnerHTML:    "+buttonInnerHTML);
        console.log("memoryStep:    "+memoryStep);
        


        if (gamePattern[memoryStep] != buttonInnerHTML) {
            document.querySelector("h1").innerHTML = "wrong, restart";
            document.querySelector("body").classList.add("wrongAnswer");
            setTimeout(() => { document.querySelector("body").classList.remove("wrongAnswer"); }, 500);
            memoryStep = 0;
            console.log("false "+ gamePattern[memoryStep]+" "+memoryStep);

        }
        else {
            document.querySelector("h1").innerHTML = "true enter more";
            console.log("true "+ gamePattern[memoryStep]+" "+memoryStep);
 
            memoryStep++;
        }

        if (memoryStep == gamePattern.length) {

            document.querySelector("h1").innerHTML = "finish,press key to next level";
            memoryStep = 0;


        }
        console.log("memoryStep" + memoryStep);
      
 



    });


}


document.addEventListener("keydown", function () {
    nextSequence();
    time = gamePattern.length;
    document.querySelector("h1").innerHTML = "level " + time;


});

function flash(b) {
    //console.log("flash2" + b.innerHTML);
    const music = new Audio("sounds/" + b.innerHTML + ".mp3");
    music.play();
    b.classList.add("Transparency");
    setTimeout(() => { b.classList.remove("Transparency"); }, 500);


}
var time = 0;
function startpage() {
    document.querySelector("h1").innerHTML = "press key A to start";


}
startpage();


//   function practice(){


//     document.querySelector("h1").innerHTML="press key to start";
//   }
