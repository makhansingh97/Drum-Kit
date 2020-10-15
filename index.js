// adding event listener
// using anonymous function

// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // var buttonInnerHTML = this.innerHTML;
    makeSound(this.innerHTML); // calling makeSound
    buttonAnimation(this.innerHTML); // calling buttonAnimation
  });
}

// Detecting keyboard Press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// funcition to make sound based on key passed

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    // it'a good practice use default
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// function to add animations

function buttonAnimation(currentKey) {
  // there is a class .pressed in css we want to add that to the button passed
  var activeButton = document.querySelector("." + currentKey); // we get the innner html of particular key pressed
  // add the class .pressed
  activeButton.classList.add("pressed"); // animation class added

  // remove that class after some time let's say 100 ms , so it looks like animation
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
