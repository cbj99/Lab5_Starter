// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let imagePart = document.querySelector("[alt='No image selected']");
  //let example = document.querySelector('img');
  //console.log(example);

  let soundPart = document.querySelector("[class='hidden']");
  soundPart.volume = 0.5;
  //console.log(soundPart.volume);

  let hornType = document.getElementById('horn-select');
  //console.log(hornType);

  //let index = hornType.options[1];

  let party = false;

  hornType.addEventListener('change', (event) => {
    if (event.target.value == "air-horn") {
      imagePart.src = 'assets/images/air-horn.svg';
      soundPart.src = 'assets/audio/air-horn.mp3';
      party = false;
    }
    if (event.target.value == "car-horn") {
      imagePart.src = 'assets/images/car-horn.svg';
      soundPart.src = 'assets/audio/car-horn.mp3';
      party = false;
    }
    if (event.target.value == "party-horn") {
      imagePart.src = 'assets/images/party-horn.svg';
      soundPart.src = 'assets/audio/party-horn.mp3';
      party = true;
    }
  })


  let speakerImage = document.querySelector("[alt='Volume level 2']");
  let slider = document.getElementById('volume');

  slider.addEventListener('input', updateValue)
  function updateValue(e) {
    if (e.target.value == 0) {
      speakerImage.src = 'assets/icons/volume-level-0.svg'
    }
    if (e.target.value > 0 && e.target.value < 33) {
      speakerImage.src = 'assets/icons/volume-level-1.svg'
    }
    if (e.target.value >= 33 && e.target.value < 67) {
      speakerImage.src = 'assets/icons/volume-level-2.svg'
    }
    if (e.target.value >= 67) {
      speakerImage.src = 'assets/icons/volume-level-3.svg'
    }
    soundPart.volume = e.target.value / 100;
    //console.log(soundPart.volume);
  }


  let button = document.querySelector('button');
  //console.log(button);

  button.addEventListener('click', playVoice);

  let jsConfetti = new JSConfetti();


  function playVoice() {

    if (party) {
      jsConfetti.addConfetti();
    }
    soundPart.play();

  }


}
