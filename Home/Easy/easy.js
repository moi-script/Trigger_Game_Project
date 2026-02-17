let programming = document.getElementById('programming');
let chemistry = document.getElementById('chemistry');
let simpleQuiz = document.getElementById('simpleQuiz');
let directory = document.getElementById('links');
let text = document.getElementById('page');
let playButton = document.getElementById('playButton');
let gameOptionsBackground = document.getElementById('gameOptions');
let details = document.getElementById('detailsPage');
let programmingKey = false, chemistryKey = false, simpleQuizKey = false;


let buttonUp = document.getElementById('buttonUp');
let buttonDown = document.getElementById('buttonDown');


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

chemistry.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        chemistry.style.transform = 'translate(340px, 0) scale(.6, .6)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '-1';
        chemistry.style.opacity = '.2';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        programming.style.transform = 'translate(340px, 0) scale(1.6, 1.6)';
        programming.style.zIndex = '1';
        programming.style.opacity = '1';
        programming.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(200px, 0) scale(.6, .6)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-2';
        text.innerHTML = 'Programming';
        details.innerHTML = 'I love programming';
        directory.setAttribute("href", "ProgrammingGame/Programming.html");
        if (programmingKey) {
            directory.setAttribute("href", "#");
            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonUp.style.opacity = '.5';


        // ProgrammingGame/Programming.html
    }
    else {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        chemistry.style.transform = 'translate(-340px, 0) scale(.6, .6)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '-1';
        chemistry.style.opacity = '.2';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(-340px, 0) scale(1.6, 1.6)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '1';
        simpleQuiz.style.opacity = '1';
        simpleQuiz.style.transition = 'transform .5s , opacity .5s ease-in-out';



        programming.style.transform = 'translate(-200px, 0) scale(.6, .6)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-2';
        text.innerHTML = 'Simple Quiz';
        details.innerHTML = 'I love simple quiz';
        directory.setAttribute("href", "simpleQuiz/simplequiz.html");
        if (simpleQuizKey) {
            directory.setAttribute("href", "#");

            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonDown.style.opacity = '.5';

    }
})
// chemistryGame/table.html

simpleQuiz.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        simpleQuiz.style.transform = 'translate(10px, 0) scale(1, 1)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-1';
        simpleQuiz.style.opacity = '.2';
        simpleQuiz.style.transition = 'transform .5s , opacity .5s ease-in-out';

        chemistry.style.transform = 'translate(10px, 0) scale(.9, .9)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '1';
        chemistry.style.opacity = '1';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        programming.style.transform = 'translate(10px, 0) scale(.9, .9)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-1';
        text.innerHTML = 'Chemistry';
        details.innerHTML = 'I love chemistry';
        directory.setAttribute("href", "chemistryGame/table.html");
        if (chemistryKey) {
            directory.setAttribute("href", "#");

            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonDown.style.opacity = '1';


    }
})

programming.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        programming.style.transform = 'translate(100px, 0) scale(1, 1)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-1';
        programming.style.opacity = '.2';
        programming.style.transition = 'transform .5s , opacity .5s ease-in-out';

        chemistry.style.transform = 'translate(50px, 0) scale(.9, .9)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '1';
        chemistry.style.opacity = '1';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(10px, 0) scale(1, 1)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-1';
        text.innerHTML = 'Chemistry';
        details.innerHTML = 'I love chemistry';
        directory.setAttribute("href", "chemistryGame/table.html");
        if (chemistryKey) {
            directory.setAttribute("href", "#");
            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonUp.style.opacity = '1';

    }
});









var btnUp = true;
var btnDown = true;


buttonUp.addEventListener("click", function () {
    if (btnUp && btnDown) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        chemistry.style.transform = 'translate(340px, 0) scale(.6, .6)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '-1';
        chemistry.style.opacity = '.2';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        programming.style.transform = 'translate(340px, 0) scale(1.6, 1.6)';
        programming.style.zIndex = '1';
        programming.style.opacity = '1';
        programming.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(200px, 0) scale(.6, .6)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-2';
        text.innerHTML = 'Programming';
        details.innerHTML = 'I love programming';
        directory.setAttribute("href", "ProgrammingGame/Programming.html");
        if (programmingKey) {
            directory.setAttribute("href", "#");
            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonUp.style.opacity = '.5';








        btnUp = !btnUp;
    } else if (btnDown === false) {

        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        simpleQuiz.style.transform = 'translate(10px, 0) scale(1, 1)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-1';
        simpleQuiz.style.opacity = '.2';
        simpleQuiz.style.transition = 'transform .5s , opacity .5s ease-in-out';

        chemistry.style.transform = 'translate(10px, 0) scale(.9, .9)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '1';
        chemistry.style.opacity = '1';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        programming.style.transform = 'translate(10px, 0) scale(.9, .9)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-1';
        text.innerHTML = 'Chemistry';
        details.innerHTML = 'I love chemistry';
        directory.setAttribute("href", "chemistryGame/table.html");
        if (chemistryKey) {
            directory.setAttribute("href", "#");

            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        btnDown = !btnDown;

        buttonDown.style.opacity = '1';

    }
});




// DOWN
buttonDown.addEventListener("click", function () {
    if (btnUp && btnDown) {

        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        chemistry.style.transform = 'translate(-340px, 0) scale(.6, .6)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '-1';
        chemistry.style.opacity = '.2';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(-340px, 0) scale(1.6, 1.6)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '1';
        simpleQuiz.style.opacity = '1';
        simpleQuiz.style.transition = 'transform .5s , opacity .5s ease-in-out';


        programming.style.transform = 'translate(-200px, 0) scale(.6, .6)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-2';
        text.innerHTML = 'Simple Quiz';
        details.innerHTML = 'I love simple quiz';
        directory.setAttribute("href", "simpleQuiz/simplequiz.html");
        if (simpleQuizKey) {
            directory.setAttribute("href", "#");

            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonDown.style.opacity = '.5';
        btnDown = !btnDown;

    } else if (btnUp === false) {


        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        programming.style.transform = 'translate(100px, 0) scale(1, 1)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-1';
        programming.style.opacity = '.2';
        programming.style.transition = 'transform .5s , opacity .5s ease-in-out';

        chemistry.style.transform = 'translate(50px, 0) scale(.9, .9)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '1';
        chemistry.style.opacity = '1';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(10px, 0) scale(1, 1)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-1';
        text.innerHTML = 'Chemistry';
        details.innerHTML = 'I love chemistry';
        directory.setAttribute("href", "chemistryGame/table.html");
        if (chemistryKey) {
            directory.setAttribute("href", "#");
            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
        buttonUp.style.opacity = '1';

















        // play.setAttribute("href", "/Home/Medium/mathRiddles.html");
        btnUp = !btnUp;
    }
});



















let score = localStorage.getItem('scoreprog');
let chemScore = localStorage.getItem('chemScore');
let simpleQuizScore = localStorage.getItem('simpleQuizTotal');
let allGameTotalScore = (parseFloat(score) + parseFloat(chemScore) + parseFloat(simpleQuizScore));






function storedProgScore(progScore) {
    
    if (progScore !== null) {
        let db = null;
        let objectStore = null;
        let dbReqOpen = indexedDB.open('leaderBoard', 7);
        console.log('this is the value of programming score' + progScore)

        dbReqOpen.onsuccess = (ev) => {
            db = ev.target.result;
            console.log('Opened successfully');

            const transaction = db.transaction(['leaderBoard'], 'readwrite');
            // Access the object store
            const objectStore = transaction.objectStore('leaderBoard');

            const cursorRequest = objectStore.openCursor();
            let newestId = -Infinity; // Initialize with a very small number
            cursorRequest.onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    // Check the current record's ID
                    if (cursor.value.id > newestId) {
                        newestId = cursor.value.id;
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
            cursorRequest.onerror = function() {
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
    
    
};

window.document.addEventListener('DOMContentLoaded', function(){
   // storedProgScore(score);
})

//storedProgScore(score);



function addInner(games, score) {
    var overlayText = games.querySelector('.texts');
    overlayText.innerHTML += `<h3 style="color: #FF204E;">You got ${parseFloat(score)} / 30 </h3>`;
    overlayText.innerHTML += `<p style="color: #FF204E;"> Can only play once </p>`;
    overlayText.style.display = 'flex'; // Show the overlay text
}



// try avoid naming conflict





// saved all the total score of easy mode to localstorage easyTotal
localStorage.setItem('easyTotal', allGameTotalScore.toString());


document.addEventListener('DOMContentLoaded', function () {
    const chemScore = localStorage.getItem('chemScore');
    if (chemScore !== null) {
        directory.setAttribute("href", "#");
    }
})


// okay the key is already here 
window.addEventListener('load', function () {
    if (localStorage.getItem('gameFinished') !== null) {
      //  console.log('myUniqueKey does exist.');

        let permissionKey = localStorage.getItem('gameFinished');
        console.log(`This is the permision key value: ${permissionKey}`);

        // pag nauna kong ma concatenate ang 1 kesa sa 2 okay naman 
        // kaso pag nauna ung 2 ma concatenate sa 1 nawawala ung 2 tapos 1 lang ang natitira
        for (let i = 0; i < permissionKey.length; i++) {
            if (permissionKey[i] === '1') {
                console.log("This condition 1 is working");

                //chemistry.textContent = `${parseFloat(chemScore)} / 30`;


                addInner(chemistry, chemScore);
                chemistryKey = true;
            }


            else if (permissionKey[i] === '2') {
                console.log("This condition 2 is working");
                //programming.textContent = 'This level is already completed';
                // programming.textContent = `${parseFloat(score)} / 30`;
                //addInner(programming, score);

                programming.querySelector('.texts').innerHTML += `<h3 style="color: #FF204E;">You got ${score} / 30 </h3>`;
                programming.querySelector('.texts').innerHTML += `<p style="color: #FF204E;"> Can only play once </p>`;
                programming.querySelector('.texts').style.display = 'flex'; // Show the overlay text



                programmingKey = true;
            }
            else if (permissionKey[i] === '3') {
                console.log("This condition 3 is working");
                //addInner(simpleQuiz, simpleQuizScore);
                simpleQuiz.querySelector('.texts').innerHTML += `<h3 style="color:#FF204E;">You got ${simpleQuizScore} / 30 </h3>`;
                simpleQuiz.querySelector('.texts').innerHTML += `<p style="color: #FF204E;"> Can only play once </p>`;
                simpleQuiz.querySelector('.texts').style.display = 'flex'; // Show the overlay text

                simpleQuizKey = true;
            }

            console.log("This are the keys list");
            console.log(permissionKey[i]);
        }

    } else {
        // The key does not exist in localStorage
        console.log('myUniqueKey does not exist.');
    }
})


//alert(localStorage.getItem('combinedKey'));




