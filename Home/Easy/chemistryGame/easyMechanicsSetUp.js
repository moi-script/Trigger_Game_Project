// initializing the elments

// 10 elements = 0.22Kb




// Initializing the elements
var selectedElementList = [];
var selectedElementsCount = 0;
var elementCounts = 9;
var data = 10;
var storageSize;

function addClassToTd() {
    for (let i = 1; i <= 118; i++) {
        let elementId = "elem-" + i;
        let element = document.querySelector('#' + elementId);
        if (element) {
            element.classList.add("elemItem");
        }
    }
}
addClassToTd();



let MUSICINFO = localStorage.getItem('playMusicInfo');
let MUSICBACKGROUND = document.getElementById('audioBackground');


function checkMusicBackground(music) {
    let convertedToInt = parseInt(music);
    if (convertedToInt) {
        MUSICBACKGROUND.play();
    }
}

checkMusicBackground(MUSICINFO);








let elementsToClick = document.querySelectorAll('.elemItem');
let notShownElement = document.querySelectorAll('.td-notshow');

function disabledNotShownButton() {
    notShownElement.forEach(elem => {
        elem.style.pointerEvents = 'none';
    });
}
disabledNotShownButton();

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

function calculateLocalStorageSize() {
    let totalSize = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            // Each character is 2 bytes in UTF-16
            totalSize += key.length * 2 + localStorage.getItem(key).length * 2;
        }
    }
    // Convert bytes to kilobytes and fix to 2 decimal places
    return (totalSize / 1024).toFixed(2);
}

function domAttachedment() {
    elementsToClick.forEach(elementTocl => {
        elementTocl.addEventListener('click', function (event) {
            elementTocl.classList.add("disabled");
            let clickedElement = event.target;
            let touchSound = document.getElementById('touchSound');
            touchSound.play();
            console.log(selectedElementList.length);
            document.getElementById('tryDebuggInfo').innerHTML =`Current Element to Store ${elementCounts}`;
            elementCounts--;


            if (selectedElementsCount < 10) {
                // DOM element check parent to grandparent
                while (clickedElement && !clickedElement.id) {
                    clickedElement = clickedElement.parentElement;
                }
                // If an element with id is found, log its id and store the id to the selectedElementList array
                if (clickedElement && clickedElement.id) {
                    document.getElementById(clickedElement.id).style.opacity = '0.1';


                    // Using local storage to save the elements
                    let elements = JSON.parse(localStorage.getItem('clickedElements')) || [];
                    elements.push(clickedElement.id);
                    localStorage.setItem('clickedElements', JSON.stringify(elements));

                    // Convert and store in local storage
                    var symbol = document.getElementById(clickedElement.id).getElementsByTagName('p')[1].textContent;
                    let uploadSymbol = JSON.parse(localStorage.getItem('Symbols')) || [];
                    uploadSymbol.push(symbol);
                    localStorage.setItem('Symbols', JSON.stringify(uploadSymbol));

                    var elementName = document.getElementById(clickedElement.id).getElementsByTagName('p')[2].textContent;
                    let uploadElement = JSON.parse(localStorage.getItem('ElementName')) || [];
                    uploadElement.push(elementName);
                    localStorage.setItem('ElementName', JSON.stringify(uploadElement));

                    // Track for debugging purposes
                    console.log("This is the symbol");
                    console.log(symbol);
                    console.log("This is the storage size " + storageSize);

                    // Get the size for limitation
                    storageSize = calculateLocalStorageSize();
                    selectedElementList.push(clickedElement.id);
                    selectedElementsCount++;

                    // Go to the next page of the game, Game1.html
                    if (selectedElementsCount === 10) {
                        if (storageSize >= 2048) { // Adjust the size limit as needed
                            localStorage.clear();
                        }
                        document.getElementById('tryDebuggInfo').innerHTML = 'Waiting....';
                        setTimeout(function () {
                            // When selected 10 elements, it will go to another page
                            window.location.href = 'Game1.html';
                        }, Math.floor(Math.random() * 1001) + 3000);
                    }
                } else {
                    document.getElementById('tryDebuggInfo').innerHTML = "Unknown element";
                }
            }
        });
    });
}

// Execute the function
domAttachedment();


























// export the data in another js file




/*

to do tommorow

******* Make this display the initial count down in the screen display
******* Importing the data in another js file
******* connect the fisher yates method
******* 




var selectedElementList = [];
var selectedElementsCount = 0;
var data = 10;
var storageSize;




function addClassToTd(){
    for(let i=1; i<=118; i++){
        let elementId = "elem-" + i;
        let element = document.querySelector('#' + elementId);
        if (element) {
            element.classList.add("elemItem");
        }
    }
}
addClassToTd();
let elementsToClick = document.querySelectorAll('.elemItem');
let notShownElement = document.querySelectorAll('.td-notshow');

function disabledNotShownButton(){
    notShownElement.forEach(elem =>{
        elem.onclick = false;
    });
}
disabledNotShownButton();

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

function calculateLocalStorageSize() {
    let totalSize = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            // Each character is 2 bytes in UTF-16
            totalSize += key.length * 2 + localStorage.getItem(key).length * 2;
        }
    }
    // Convert bytes to kilobytes and fix to 2 decimal places
    return (totalSize / 1024).toFixed(2);
}


// Function to check if the clicked element matches any selector in the list of arrays
function domAttachedment() {
    elementsToClick.forEach(elementTocl =>{
        elementTocl.addEventListener('click', function (event) {
            elementTocl.classList.add("disabled");
            let clickedElement = event.target;
            let touchSound = document.getElementById('touchSound');
            touchSound.play();
            console.log(selectedElementList.length);
    
            if (selectedElementsCount < 10) {
                // dom element check parent to grand parent
                while (clickedElement && !clickedElement.id) {
                    clickedElement = clickedElement.parentElement;
                }
                // If an element with id is found, log its id and stores the id to the selectedElementlist array
                if (clickedElement && clickedElement.id) {
                    document.getElementById(clickedElement.id).style.opacity = '0.1';
    
    
                    // using local storage to saved the elements 
                    let elements = JSON.parse(localStorage.getItem('clickedElements')) || [];
                    elements.push(clickedElement.id);
                    localStorage.setItem('clickedElements', JSON.stringify(elements));
    
                    //
    
                    // converted and stores in local storage
                    var symbol = document.getElementById(clickedElement.id).getElementsByTagName('p')[1].textContent;
                    let uploadSymbol = JSON.parse(localStorage.getItem('Symbols')) || [];
                    uploadSymbol.push(symbol);
                    localStorage.setItem('Symbols', JSON.stringify(uploadSymbol));
    
                    var elementName = document.getElementById(clickedElement.id).getElementsByTagName('p')[2].textContent;
                    let uploadElement = JSON.parse(localStorage.getItem('ElementName')) || [];
                    uploadElement.push(elementName);
                    localStorage.setItem('ElementName', JSON.stringify(uploadElement));
    
                    // track for debugging purposes 
                    console.log("This is the symbol");
                    console.log(symbol);
                    console.log("This is the storage size " + storageSize);
    
                    // get the size for limitation
                    storageSize = calculateLocalStorageSize();
                    selectedElementList.push(clickedElement.id);
                    selectedElementsCount++;
    
                    // go to the next page of game, Game1.html
                    if (selectedElementsCount === 10) {
    
                        if (storageSize >= 2) {
                            localStorage.clear();
                        }
                        document.getElementById('tryDebuggInfo').innerHTML = 'Waiting....';
                        setTimeout(function () {
                            // when selected 2 elements it will go to other page
                            window.location.href = 'Game1.html';
                        }, Math.floor(Math.random() * 1001) + 3000);
                    }
                } else {
                    document.getElementById('tryDebuggInfo').innerHTML = "Unknown element";
                }
            }
        }
        );

    })
    
    
    
    
    
    
}

// "elem-1";
// execute the function
domAttachedment();


































*/

