

// mouseenter
// mouseleave
// wheel
// click


let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let background = document.getElementById('background');
let page = document.getElementById('page');
let bodyBg = document.getElementById('body');
let fPage = document.getElementById('p1');
let slideBackgroundEasy = document.getElementById('imgBg');
let slideBackgroundMedium = document.getElementById('mediumImg');
let slideBackgroundHard = document.getElementById('hardImg');
let go = document.getElementById('go');
let leaderboardDisplay = document.getElementById('leaderboardDisplay');
let leaderboardBtn = document.getElementById('leaderboards');



const divisionId = ['section', 'body', 'discription', 'boardsBackground']

var buttonTurnsPos = 0
let buttonUp = document.getElementById('buttonUp');
let buttonDown = document.getElementById('buttonDown');


var btnUp = true;
var btnDown = true;


let displayScore = document.getElementById('score');



//console.log(`Hello ${localStorage.getItem('playerNickName')}`)

document.getElementById('greetPlayer').textContent = `Hello ${localStorage.getItem('playerNickName')}`;

let score = parseInt(localStorage.getItem('scoreprog')) || 0;
let chemScore = parseInt(localStorage.getItem('chemScore')) || 0;
let simpleQuizScore = parseInt(localStorage.getItem('simpleQuizTotal')) || 0;
let allGameTotalScore = score + chemScore + simpleQuizScore;

let calculus = parseInt(localStorage.getItem('calculusScore')) || 0;
const crosswordScore = parseInt(localStorage.getItem("crossWordScore")) || 0;
const _4pics1wordTotalScore = parseInt(localStorage.getItem("4picsTotalScore")) || 0;
const mathRiddlesScore = parseInt(localStorage.getItem('mathRiddlesScore')) || 0;

var ALL_GAME_tRIGGER_SCORE = score + chemScore + simpleQuizScore + calculus + crosswordScore + _4pics1wordTotalScore + mathRiddlesScore;

console.log(`programming: ${score}, chemScore: ${chemScore}, simpleQuiz: ${simpleQuizScore}, allgametotalScore: ${allGameTotalScore}, calculus: ${calculus}, crossword: ${crosswordScore}, _4pics: ${_4pics1wordTotalScore},
    mathRiddles: ${mathRiddlesScore}`);

console.log('This is the all', ALL_GAME_tRIGGER_SCORE);






function verifyExitGame() {
    console.log(`Progscore ${score}, Chemscore${chemScore}, SimpleQuizScore${simpleQuizScore}, calculus ${calculus}, crossword ${crosswordScore}, _4pics1Word${_4pics1wordTotalScore}, mathriddles ${mathRiddlesScore}`)
    if ((score === null) || (chemScore === null) || (simpleQuizScore === null) || (calculus === null) || (crosswordScore === null) || (_4pics1wordTotalScore === null)
        || (mathRiddlesScore === null)) {
        document.getElementById('gameStats').textContent = 'There was still a game that you did not play yet do you still want to exit?';
    } else {
        document.getElementById('gameStats').textContent = 'There is no game to play anymore';
        return;
    }
}

// check the last leader board to save in the home beoradss

console.log('This is the programming score', score);

var storesNamesFormHighest = ''

// document.getElementById('settingsBackground')


/*

leaderboardBtn.addEventListener('click', function () {
    leaderboardDisplay.style.display = 'block';
    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '0';
    }
})

function goBackFromHome() {
    leaderboardDisplay.style.display = 'none';
    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '1';
    }
}



*/


document.getElementById('exit').addEventListener('click', function () {
    document.getElementById('confirmPlate').style.visibility = 'visible';
    verifyExitGame();

    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '0';
    }
})

document.getElementById('no').addEventListener('click', function () {
    document.getElementById('confirmPlate').style.visibility = 'hidden';
    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '1';
    }
})




document.getElementById('yes').addEventListener('click', function () {
    let progScore = ALL_GAME_tRIGGER_SCORE;
    if (progScore !== null) {
        let db = null;
        let objectStore = null;
        let dbReqOpen = indexedDB.open('leaderBoard', 4);
        console.log('this is the value of programming score' + progScore)

        dbReqOpen.onsuccess = (ev) => {
            db = ev.target.result;
            console.log('Opened successfully');


            const transaction = db.transaction(['leaderBoards'], 'readwrite');
            // Access the object store
            const objectStore = transaction.objectStore('leaderBoards');

            const cursorRequest = objectStore.openCursor();
            let newestId = -Infinity; // Initialize with a very small number
            cursorRequest.onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    // Check the current record's ID
                    console.log('This are the value', cursor.value);
                    if (cursor.value.id > newestId) {
                        newestId = cursor.value.id;
                        storesNamesFormHighest += cursor.value.name;

                    }
                    // Move to the next record
                    cursor.continue();
                } else {
                    // No more records, the iteration is complete
                    if (newestId !== -Infinity) {
                        console.log('The newest ID is:', newestId);
                        const getRequest = objectStore.get(newestId);
                        getRequest.onsuccess = function (event) {
                            const data = event.target.result;

                            // Check if the object with id 7 exists
                            if (data) {
                                // Add the new attribute
                                data.score = parseInt(progScore);
                                // Update the object in the database
                                const updateRequest = objectStore.put(data);

                                updateRequest.onsuccess = function () {
                                    console.log('Object updated successfully');

                                    localStorage.clear();
                                    localStorage.setItem('inOrderName', storesNamesFormHighest.toString());
                                    window.location.href = "../Login/login.html";

                                };

                                updateRequest.onerror = function () {
                                    console.log('Error updating object');
                                };
                            } else {
                                console.log('Object not found');
                            }
                        };

                        getRequest.onerror = function () {
                            console.log('Error retrieving object');
                        };

                    } else {
                        console.log('No records found in the database.');
                    }
                }
            };
            cursorRequest.onerror = function () {
                console.log('Error opening cursor');
            };








            console.log('The database opened successfully');

        }
        dbReqOpen.onerror = function (event) {
            console.error('Error opening cursor:', event.target.error);
            callback(false); // additonl safety thresats
        };

    }

    else {
        console.log(`No score in programming yet ${progScore}`);
    }



    //localStorage.clear();
});





const displayRankings = (function item() {
    let reqDb = indexedDB.open('leaderBoard', 4);
    let db = null;

    reqDb.onsuccess = function (ev) {
        db = ev.target.result;
        displaySortedItems();

    }

    reqDb.onerror = function (err) {
        console.log(err);
    }




    function displaySortedItems() {
        let transaction = db.transaction('leaderBoards', 'readonly');
        let objectStore = transaction.objectStore('leaderBoards');
        let request = objectStore.getAll();

        request.onsuccess = function (event) {
            let items = event.target.result;

            // Sort items by sortOrder in ascending order
            items.sort(function (a, b) {
                return a.sortOrder - b.sortOrder;
            });

            // Display sorted items
            let playerRankingList = document.getElementById('playerRankingList');
            playerRankingList.innerHTML = '';

            // Display sorted items
            items.forEach(function (item, index) {
                let span = document.createElement('span');
                let p = document.createElement('p');
                p.textContent = `${index + 1}. ${item.name} - Score: ${item.score}`;
                span.appendChild(p);
                playerRankingList.appendChild(span);
            });
            //  console.log(output);
            // Alternatively, render the output to the DOM if needed
            //  document.getElementById('leaderBoardDisplay').innerText = output;
        };

        request.onerror = function (event) {
            console.error('Error retrieving items:', event.target.error);
        };
    }

})();








// crossword
// math riddles
// 4pics 1 word

// UP
buttonUp.addEventListener("click", function () {
    if (btnUp && btnDown) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        hard.style.transform = 'translate(0px, 70px) scale(1.7, 2)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = 1;
        hard.style.fontSize = '30px';


        easy.style.transform = 'translate(-0px, 40px) scale(.7, .7)';
        easy.style.zIndex = -1;
        easy.style.transition = 'transform 1s';

        medium.style.transform = 'translate(-0px, -10px) scale(.7, .7)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -2;

        // hard description 
        page.innerHTML = "The Calculus. Spin the wheel to get the problems although it is difficult but don’t give up  you will be able to overcome the challenge  through the consistency and effort "
        buttonUp.style.opacity = '.5';
        // play.setAttribute("href", "../Medium/crossword.html");
        displayHardScore();

        btnUp = !btnUp;
    } else if (btnDown === false) {

        let touchSound = document.getElementById('touchSound');
        touchSound.play();

        hard.style.transform = 'translate(0, 0) scale(1, 1)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;
        hard.style.fontSize = '30px';

        easy.style.transform = 'translate(0, 0) scale(1, 1)';
        easy.style.zIndex = 1;
        easy.style.transition = 'transform 1s';

        medium.style.transform = 'translate(0, 0) scale(1, 1)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -1;
        //play.setAttribute("href", "../Medium/mathRiddles.html");

        buttonDown.style.opacity = '1';
        displayEasyScore();



        btnDown = !btnDown;
    }
});

// DOWN
buttonDown.addEventListener("click", function () {
    if (btnUp && btnDown) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        // adjust the easy size and position
        easy.style.transform = 'translate(0, -50px) scale(.6, .6)';
        easy.style.transition = 'transform 1s';
        easy.style.zIndex = -1;

        // adjust the hard position and size

        hard.style.transform = 'translate(0px, 5px) scale(.6, .6)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;

        // adjust the medium position
        medium.style.transform = 'translate(0px, -80px) scale(1.7, 2)';
        medium.style.transition = 'transform 1s';
        medium.style.fontSize = '30px';
        medium.style.zIndex = 1;
        buttonDown.style.opacity = '.5';
        displayMediumScore();


        // play.setAttribute("href", "../Medium/4pics1word.html");

        btnDown = !btnDown;
    } else if (btnUp === false) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();

        hard.style.transform = 'translate(0, 10px) scale(1, 1)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;
        hard.style.fontSize = '30px';

        easy.style.transform = 'translate(0, 0) scale(1, 1)';
        easy.style.zIndex = 1;
        easy.style.transition = 'transform 1s';


        medium.style.transform = 'translate(0, -10px) scale(1, 1)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -1;
        buttonUp.style.opacity = '1';
        displayHardScore();






        // play.setAttribute("href", "/Home/Medium/mathRiddles.html");
        btnUp = !btnUp;
    }
});






// retreving the information
let MUSICINFO = localStorage.getItem('playMusicInfo');
let MUSICBACKGROUND = document.getElementById('audioBackground');


function checkMusicBackground(music) {
    if (parseInt(music)) {
        MUSICBACKGROUND.play();
    }
}

document.getElementById('onMusic').addEventListener('click', function () {
    localStorage.setItem('playMusicInfo', '1');
    MUSICBACKGROUND.play();
});

document.getElementById('offMusic').addEventListener('click', function () {
    MUSICBACKGROUND.pause();
    localStorage.setItem('playMusicInfo', '0');

})



checkMusicBackground(MUSICINFO);
// add audio tag in html




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





// picture to slide when selecting difficulties
easy.addEventListener('mouseenter', function () {
    easy.style.opacity = "0.5";
})

easy.addEventListener('mouseleave', function () {
    easy.style.opacity = "1";
})

medium.addEventListener('mouseenter', function () {
    medium.style.opacity = "0.5";
})

medium.addEventListener('mouseleave', function () {
    medium.style.opacity = "1";
})
hard.addEventListener('mouseenter', function () {
    hard.style.opacity = "0.5";
})

hard.addEventListener('mouseleave', function () {
    hard.style.opacity = "1";
});



// Task for tomorrow I need to create a condition if the difficulty is == zIndex 1 and the Go anchor is click then it will
// be put toward that difficulty url path

function getEasyTotalScore() {
    let total = localStorage.getItem('easyTotal');
    return parseInt(total);
}

function getMediumTotalScore() {
    let total = localStorage.getItem('mediumTotal');
    return total;
}






/*
ITEM NAMES

easyTotal
- chemScore
- simpleQuizTotal
- scoreprog


mediumTotal
-crossWordScore
-4picsTotalScore
-mathRiddlesScore

*/


function getHardScore() {
    let calcScore = localStorage.getItem('calculusScore');
    if(isNaN(parseInt(calcScore))){
        return 0;
    } else {
        return parseInt (calcScore);
    }

}

function displayHardScore() {
    document.getElementById('score').textContent = `Score ${getHardScore()} / 25`
}


function displayMediumScore() {
    const crosswordScore = localStorage.getItem("crossWordScore");
    const _4pics1wordTotalScore = localStorage.getItem("4picsTotalScore");
    const mathRiddlesScore = localStorage.getItem('mathRiddlesScore');
    if (getMediumTotalScore() === null) {
        displayScore.textContent = `You didnt play yet, your score: 0/70
    Play all the game to calculate your total score`;
    }
    else if (crosswordScore !== null && _4pics1wordTotalScore !== null && mathRiddlesScore !== null) {
        displayScore.textContent = `Your score: ${getMediumTotalScore()} / 70`;
    }
}

function displayEasyScore() {
    const chemScore = localStorage.getItem('chemScore');
    const simpleQuizScore = localStorage.getItem('simpleQuizTotal');
    const score = localStorage.getItem('scoreprog');

    if (getEasyTotalScore() === null) {
        displayScore.textContent =
            `You didnt play yet, your score: 0/90
         Play all the game to calculate your total score`;
    }
    else if (chemScore !== null && simpleQuizScore !== null && score !== null) {
        displayScore.textContent = `Your score: ${getEasyTotalScore()} / 90`;
    }
}





easy.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        // adjust the easy size and position
        easy.style.transform = 'translate(0, -50px) scale(.6, .6)';
        easy.style.transition = 'transform 1s';
        easy.style.zIndex = -1;

        // adjust the hard position and size

        hard.style.transform = 'translate(0px, 5px) scale(.6, .6)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;

        // adjust the medium position
        medium.style.transform = 'translate(0px, -80px) scale(1.7, 2)';
        medium.style.transition = 'transform 1s';
        medium.style.fontSize = '30px';
        medium.style.zIndex = 1;
        buttonDown.style.opacity = '.5';

        displayMediumScore();
        // Medium description 
        page.innerHTML = "In medium mode you will encounter cross word regarding to physics, 4 pics 1 word and math logic. The time depends on you. Go embark the challenge of medium mode and get your reward "

    }

    else {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        hard.style.transform = 'translate(0px, 70px) scale(1.7, 2)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = 1;
        hard.style.fontSize = '30px';


        easy.style.transform = 'translate(-0px, 40px) scale(.7, .7)';
        easy.style.zIndex = -1;
        easy.style.transition = 'transform 1s';

        medium.style.transform = 'translate(-0px, -10px) scale(.7, .7)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -2;
        buttonUp.style.opacity = '.5';


        // books.style.transform = 'translateY(80px) rotate(30deg)';


        // hard description 
        page.innerHTML = "The Calculus. Spin the wheel to get the problems although it is difficult but don’t give up  you will be able to overcome the challenge  through the consistency and effort ";
        displayHardScore();

    }

});



medium.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();

        hard.style.transform = 'translate(0, 0) scale(1, 1)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;
        hard.style.fontSize = '30px';

        easy.style.transform = 'translate(0, 0) scale(1, 1)';
        easy.style.zIndex = 1;
        easy.style.transition = 'transform 1s';

        medium.style.transform = 'translate(0, 0) scale(1, 1)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -1;
        buttonDown.style.opacity = '1';

        displayEasyScore();

        //books.style.transform = 'translateY(0px) rotate(10deg)';
        // easy description
        page.innerHTML = "In easy mode you will play the chemistry, programming and simple quiz with each of this contains 30 points with the total of 90 points. The time depends on you. go embark the  challenge of easy mode and get your reward";

    }

})


hard.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();

        hard.style.transform = 'translate(0, 10px) scale(1, 1)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;
        hard.style.fontSize = '30px';

        easy.style.transform = 'translate(0, 0) scale(1, 1)';
        easy.style.zIndex = 1;
        easy.style.transition = 'transform 1s';


        medium.style.transform = 'translate(0, -10px) scale(1, 1)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -1;
        buttonUp.style.opacity = '1'


        // books.style.transform = 'translateY(-0px) rotate(10deg)';

        displayEasyScore();
        // Easy description
        page.innerHTML = "In easy mode you will play the chemistry, programming and simple quiz with each of this contains 30 points with the total of 90 points. The time depends on you. go embark the  challenge of easy mode and get your reward";

    }
});


window.addEventListener('load', function () {
    page.innerHTML = "In easy mode you will play the chemistry, programming and simple quiz with each of this contains 30 points with the total of 90 points. The time depends on you. go embark the  challenge of easy mode and get your reward";

});

go.addEventListener('click', function () {
    if (easy.style.zIndex == '1') {
        go.setAttribute('href', './Easy/easy.html');
    } else if (medium.style.zIndex == '1') {
        go.setAttribute('href', './Medium/medium.html');
    }
    else if (hard.style.zIndex == '1') {
        go.setAttribute('href', './Hard/hard.html')
    }
})

leaderboardBtn.addEventListener('click', function () {
    leaderboardDisplay.style.display = 'block';
    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '0';
    }
})

function goBackFromHome() {
    leaderboardDisplay.style.display = 'none';
    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '1';
    }
}


console.log("Localstorage" + localStorage);

// nice doneeeeee

// add some scrol sound

// making theguides highlights

let guides = document.getElementById('guides');

document.addEventListener('DOMContentLoaded', () => {
    guides.style.transform = 'scale(1.4, 1.4)';
    setTimeout(() => {
        guides.style.transform = 'scale(1, 1)';
    }, 300)
});

guides.addEventListener('mouseenter', () => {
    guides.style.opacity = '.7';
    guides.style.transform = 'scale(1.4, 1.4)';
})

guides.addEventListener('mouseleave', () => {
    guides.style.opacity = '1';
    guides.style.transform = 'scale(1, 1)';

})




let settingsSpan = document.getElementById('settingsSpan');
let settings = document.getElementById('settingsContainer');
let settingsDisplay = document.getElementById('settingsBackground');
let backToHomeButton = document.getElementById('backToHomeButton');
settings.addEventListener('click', function () {
    settingsDisplay.style.visibility = 'visible';
    settingsDisplay.style.display = 'flex'
    settingsDisplay.style.flexDirection = 'column';
    settingsDisplay.style.justifyContent = 'center';
    settingsDisplay.style.alignItems = 'center';
    settingsSpan.style.display = 'flex';
    settingsSpan.style.flexDirection = 'column';
    settingsSpan.style.justifyContent = 'center';
    settingsSpan.style.alignItems = 'center';



    //settingsSpan.style.justifyContent = 'spaceEvenly';

    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '0';
    }
});

backToHomeButton.addEventListener('click', function () {
    settingsDisplay.style.display = 'none';
    for (let i = 0; i < divisionId.length; i++) {
        document.getElementById(divisionId[i]).style.opacity = '1';
    }
})

let buttonsInSettings = document.querySelectorAll('.btn-1');

buttonsInSettings.forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        btn.style.transform = 'scale(1.5, 1.5)'
    });
    btn.addEventListener('mouseleave', function () {
        btn.style.transform = 'scale(1.0, 1.0)'
    });
    btn.addEventListener('click', function () {
        btn.style.transform = 'scale(1.2, 1.2) translateY(-7px)';
    })
})

let aboutUs = document.getElementById('aboutUs');

function aboutUsPage() {
    window.location.href = './aboutUs.html';
}


function clearData() {
    window.location.href = './clearData.html';
}
