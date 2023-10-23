//get event when key was pressed 
document.addEventListener("keydown", function (event){
    drumPlay(event.key);
    buttonAnimation(event.key);
 });


//get event when button was clicked
var docSelect = document.querySelectorAll(".drum");
for (var i = 0; i<= docSelect.length;i++){
    docSelect[i].addEventListener("click", function () { 
        drumPlay(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
//function to play the drum's sound when key was pressed or button clicked
function drumPlay(playDrum){
switch (playDrum){
    case "w":
        tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
        tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
        tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j":
        kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
    break;
    case "k":
        crash = new Audio("./sounds/crash.mp3");
        crash.play();
    break;
    case "l":
        snare = new Audio("./sounds/snare.mp3");
        snare.play();
    break;
    default:
        console.log(this.innerHTML);
}
}
//Add animation for button clicked or pressed.
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed"); 
setTimeout(function(){activeButton.classList.remove("pressed");},100);
}