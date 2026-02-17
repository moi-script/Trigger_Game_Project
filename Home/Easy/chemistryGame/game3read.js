
// get the symbols
let symbols = JSON.parse(localStorage.getItem('Symbols')) || [];
let chances = 2;
// get the element names
let elementName = JSON.parse(localStorage.getItem('ElementName')) || [];
let prevGame3 = 0;

let correctAnsSound = document.getElementById('correctAnsAud');
let prevGame2 = localStorage.getItem('chemScore');
console.log("This is the score in previous game 2: "+ prevGame2);

console.log('This is the symbol');
symbols.forEach(value => {
    console.log(value);
})

console.log('This is the element nsme')
elementName.forEach(value => {
    console.log(value);
})




let MUSICINFO = localStorage.getItem('playMusicInfo');
let MUSICBACKGROUND = document.getElementById('audioBackground');


function checkMusicBackground(music) {
    let convertedToInt = parseInt(music);
    if (convertedToInt) {
        MUSICBACKGROUND.play();
    }
}

checkMusicBackground(MUSICINFO);





function createAudioElement() {
    var audio = document.createElement('audio');
    audio.id = 'touchSound';


    var sourceMP3 = document.createElement('source');
    sourceMP3.src = 'pop-sound-effect-197846.mp3';
    sourceMP3.type = 'audio/mpeg';


    var sourceOGG = document.createElement('source');
    sourceOGG.src = 'pop-sound-effect-197846.mp3';
    sourceOGG.type = 'audio/ogg';

    audio.appendChild(sourceMP3);
    audio.appendChild(sourceOGG);

    document.body.appendChild(audio);
}
createAudioElement();




function getRandomIndex() {
    return Math.floor(Math.random() * 10) + 1;
}
var randomIndex = getRandomIndex();

function check() {
    var equalElement = elementName[randomIndex];
    var setInputValue = document.getElementById('answerInput').value;
    if(setInputValue.toLowerCase() === equalElement.toLowerCase()){
        return true;
        
    }
    else return false;
}

function displayMechanics (){
    let touchSound = document.getElementById('touchSound');
    touchSound.play();
    if(check()){
        correctAnsSound.play();
        prevGame3 += (parseFloat(prevGame2) + 10);
        localStorage.setItem('chemScore', prevGame3.toString());
      //  alert(`this is the score in game 3: ${prevGame3}`);
        window.location.href = 'chemistryFinishedTemp.html';
        document.getElementById('Score').textContent = prevGame3;
    }
    else {
        chances--;
        document.getElementById('chances').textContent = `Chances: ${chances}`;
        if(chances === 0){
            window.location.href = 'chemistryFinishedTemp.html';
        }
     //   alert("Please try again");
    }
}

function getQuest() {
    document.getElementById('symbolBack').textContent = symbols[randomIndex];
}

window.addEventListener('load', function () {
    getQuest();
})




