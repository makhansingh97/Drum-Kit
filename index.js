// adding event listener
// using anonymous function

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //   alert("I got clicked");

    var audio = new Audio("sounds/crash.mp3");
    audio.play();

    // What to do when clicked
  });
}
