

// read the local storage file transfer to elements variable;




var elementsArray = [];
let elements = JSON.parse(localStorage.getItem('clickedElements')) || [];
let symbols = JSON.parse(localStorage.getItem('Symbols')) || [];
const elementsId = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
const choicesList = [];
const choicesListId = ['choice-1', 'choice-2', 'choice-3', 'choice-4', 'choice-5', 'choice-6'];
var counter = 0, correctAnwer1, correctAnwer2;
let chemScore = 0;
let chances = 3;
var count = 0;


let correctAnsSound = document.getElementById('correctAnsAud');


     
let MUSICINFO = localStorage.getItem('playMusicInfo');
let MUSICBACKGROUND = document.getElementById('audioBackground');


function checkMusicBackground(music) {
    let convertedToInt = parseInt(music);
    if (convertedToInt) {
        MUSICBACKGROUND.play();
    }
}

checkMusicBackground(MUSICINFO);




/*
let touchSound = document.getElementById('touchSound');
        touchSound.play();
*/


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




//transfer and print the data in new elementsArray
const TransferAndConsoleData = {
    transferData:
        function () {
            console.log('transfering list....');
            elements.forEach(value => {
                elementsArray.push(value);
            });
            // get the size of data for reusability
        },
    consoleData:
        function () {
            let counterForPrint = 0;
            console.log('Printing list');
            elementsArray.forEach(value => {
                console.log(counterForPrint, value);
                counterForPrint++;
            });
        },
};

TransferAndConsoleData.transferData();
TransferAndConsoleData.consoleData();

// Shuffle the images array using the Fisher-Yates algorithm
function getRandomSortedArray(maxNumber) {
    // Create an array with numbers from 1 to maxNumber
    let array = Array.from({ length: maxNumber }, (_, i) => i + 1);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function distributeShuffled(randomSortedArray, randomElems, elementsArray) {
    for (let i = 0; i < randomSortedArray.length; i++) {
        if (randomSortedArray[i] > 0) {
            randomElems.add(elementsArray[randomSortedArray[i] - 1]);
        } else if (randomSortedArray[i] === 0) {
            randomElems.add(randomSortedArray[0]);
        }
    }
}

// get max size
let maxNumber = elementsArray.length;
// transfer it to the new array a deep copy using spread operator 
let randomSortedArray = [...getRandomSortedArray(maxNumber)];
localStorage.setItem('randomSortedArray', JSON.stringify(randomSortedArray));
// saving the random indeces to the local storage 


console.log('This is the random index:')
randomSortedArray.forEach(value => {
    console.log(value);
})

// Initialize a new Set to store random images
let randomElems = new Set();

// execute the functions shuffleds and displays
distributeShuffled(randomSortedArray, randomElems, elementsArray);

// assigned the random elements to a new array
let arrayRandomizedElements = Array.from(randomElems);
// console the randomized elements
console.log('This is the randomized element');
arrayRandomizedElements.forEach(value => {
    console.log(value, counter);
    counter++;
})

// display the random elements using random indexes
function displayRandomElements() {
    for (let i = 0; i < randomSortedArray.length; i++) {
        if (i === 1) {
            visibleNon = document.getElementById(elementsId[i]);
            visibleNon.innerHTML = symbols[i];
            visibleNon.style.color = 'white';

        } else if (i === 5) {
            visibleNon = document.getElementById(elementsId[i]);
            visibleNon.innerHTML = symbols[i];
            visibleNon.style.color = 'white';
        }
        document.getElementById(elementsId[i]).innerHTML = symbols[randomSortedArray[i] - 1];
    }
}
displayRandomElements();

// function to initialize the correct answer
function initializeCorrectAns() {
    for (let i = 0; i < arrayRandomizedElements.length; i++) {
        if (i < 5) {
            if (i === 1) {
                correctAnwer1 = symbols[randomSortedArray[i] - 1];
                choicesList.push(correctAnwer1);
            }
            else
                choicesList.push(symbols[randomSortedArray[i] - 1]);
        }
        else if (i === 5) {
            correctAnwer2 = symbols[randomSortedArray[i] - 1];
            choicesList.push(correctAnwer2);
        }
        else {
            break;
        }

    }
}
// initialize the list of choices and correct answer 
initializeCorrectAns();


//console the list of choices
console.log('This is the choices list')
choicesList.forEach(value => {
    console.log(value);
})

// initialize a random index
function randomIndeces() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(randomIndeces());
console.log(randomIndeces());



// to do tommorow
// display those random indeces in the choices
// let this in the function if ===1 and else ===6 then display those value in the choices below
// any random indeces in the array will be selected as match and display to the ramaining other div without value
// check if the addEvent click is matched to the text in the if === 1 and else === 6
// explore the details, timeleft, score, in connection to local storage
// smooth connection for game 1 game 2 game 3
//


// need to shuffled the choices and distribute it to the division 

// display Choices list 

function choicesListDisplay() {
    for (let i = 0; i < choicesList.length; i++) {
        document.getElementById(choicesListId[i]).innerHTML = choicesList[i];
    }
}
choicesListDisplay();





// function counting  for correct or wrong answer 
document.addEventListener('click', function (event) {
    let touchSound = document.getElementById('touchSound');
    touchSound.play();
    if (event.target.matches('#choice-1, #choice-2, #choice-3')) {
        if (event.target.textContent === correctAnwer1) {

            correctAnsSound.play();
            event.target.style.backgroundColor = 'green';
            chemScore += 5;
            document.getElementById('score').textContent = `Score ${chemScore}`;

            count++;
            if (count === 2) {

                //alert('Nice keep it up and get ready for the next');
                window.location.href = 'Game2.html';
            }
        }
        else {
            chances--;
            document.getElementById('lives').textContent = `Chances : ${chances}`;
            if (chances === 0) {
               // alert('Better luck next time');
                window.location.href = 'Game2.html';
            }
            event.target.style.backgroundColor = 'red';
        }
    }



    else if (event.target.matches('#choice-4, #choice-5, #choice-6')) {
        if (event.target.textContent === correctAnwer2) {
            correctAnsSound.play();
            event.target.style.backgroundColor = 'green';
            count++;
            chemScore += 5;
            document.getElementById('score').textContent = chemScore;
            if (count === 2) {
                correctAnsSound.play(); // not playing after this condition
               // alert('Nice keep it up and get ready for the next');
                window.location.href = 'Game2.html';
            }
        }
        else {
            chances--;
            document.getElementById('lives').textContent = chances;
            if (chances === 0) {
               // alert('Better luck next time');
                window.location.href = 'Game2.html';
            }
            event.target.style.backgroundColor = 'red';
        }
    }

    localStorage.setItem('chemScore', chemScore.toString());
    let tryDebugScore = localStorage.getItem('chemScore');
    console.log("This is the chemGame1 score: " + tryDebugScore);

});
