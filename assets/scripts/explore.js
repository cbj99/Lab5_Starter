// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var voices = [];

function init() {
  // TODO
  var voiceSelect = document.querySelector('select');
  
  function populateVoiceList() {

    voices = synth.getVoices();
  
    for(let i = 0; i < voices.length ; i++) {
      let option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  
  }

  //populate voice list
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  //console.log(voiceSelect.options);

  var faceChange = document.querySelector('img');
  var inputText = document.getElementById('text-to-speak');
  var button = document.querySelector('button');
  

  button.addEventListener('click', function () {
    talk(faceChange,inputText,voiceSelect)
  });
  

}

function talk(faceChange,inputText,voiceSelect) {
    
  let words=inputText.value;
  let utterThis = new SpeechSynthesisUtterance(words);
  let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(let i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);

  setInterval(function () {
    if(synth.speaking){
      faceChange.src = 'assets/images/smiling-open.png';
    }else{
      faceChange.src = 'assets/images/smiling.png';
      clearInterval();
    }
  }, 0);

  

}