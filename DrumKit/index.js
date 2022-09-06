var numButton = document.querySelectorAll(".button").length;
for (var i = 0; i < numButton; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playsounds(buttonInnerHTML);
        changedisplay(buttonInnerHTML);


    });
}
document.addEventListener("keypress", function(event){
    playsounds(event.key);
    changedisplay(event.key)
});
function playsounds(buttonInnerHTML){
    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();

            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();

            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();

            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();

            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();

            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();

            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();

            break;
        default:
    }

}
