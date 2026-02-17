// get the random sorted array in the local storage
let randomArrays = JSON.parse(localStorage.getItem('randomSortedArray')) || [];

//get the elements array in the local storage
let elements = JSON.parse(localStorage.getItem('clickedElements')) || [];

// get the symbol array in the local storage
let symbols = JSON.parse(localStorage.getItem('Symbols')) || [];

// get the element names
let elementName = JSON.parse(localStorage.getItem('ElementName')) || [];

// create an array of different id names
const elemName = ['name-1', 'name-2', 'name-3', 'name-4', 'name-5', 'name-6', 'name-7', 'name-8', 'name-9', 'name-10'];
var question;
let chances = 2;


    
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

function displayRandomChoices() {
    for (let i = 0; i < elemName.length; i++) {
        document.getElementById(elemName[i]).textContent = elementName[randomArrays[i] - 1];
    }
}
function displayRandomQuestions() {
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    document.getElementById('symbol').textContent = symbols[randomIndex];
    question = elementName[randomIndex];
}

displayRandomChoices();
displayRandomQuestions();
//score



let correctAnsSound = document.getElementById('correctAnsAud');
let firstGameScore = localStorage.getItem('chemScore');
console.log("Prevgame score: " + firstGameScore);
let currentScore = 0;
let id = document.querySelectorAll('.item');
id.forEach((item, index) => {
    //document.getElementById('score').textContent = parseFloat(firstGameScore);
    item.addEventListener('click', function () {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        item.style.opacity = '0.5';
        console.log("This is the type of: question: " + typeof (question) + ' -> ' + question)
        console.log("This is the type of: item: " + typeof (item.textContent) + ' ->  ' + item.textContent)
        if (question.trim().toLowerCase() === item.textContent.trim().toLowerCase()) {
            currentScore += (parseFloat(firstGameScore) + 10);
            document.getElementById('score').textContent = `Score: ${currentScore}`;
            //firstGameScore += 10;
            localStorage.setItem('chemScore', currentScore.toString());
            correctAnsSound.play();
            item.style.backgroundColor = 'green';
            window.location.href = 'Game3.html';

        }
        else {
            // to do tommorow when reach a certain point go to the other page Game3
            chances--;

            document.getElementById('chance').textContent = `Chances: ${chances}`;
            if (chances === 0) {
               // alert('Better luck next time');
                window.location.href = 'Game3.html';
            }

        }


    })

});






/*

let question = document.getElementById('symbol').getElementsByTagName('div')[0].textContent;
let id = document.querySelectorAll('.item');
var answerStatus = false;
id.forEach((item, index) => {
    item.addEventListener('click', function(){
        item.style.opacity = '0.5';
        if(question === item.textContent){
            answerStatus = true;
            alert("Nice you got it right again");
        }
        
    })
})


*/



// display the choices below

randomArrays.forEach(element => {
    console.log(element);
});
elements.forEach(value => {
    console.log(value);
});

symbols.forEach(value => {
    console.log(value);
});

console.log();
// tommorrow
// make an array of elements division in html
// assigned them to divs
// correct or wrong answers
// go to next page 





