


// Define a variable to store the countdown value


// This file is responsible for reading from localStorage
let elements = JSON.parse(localStorage.getItem('clickedElements')) || [];
console.log(elements); // This will log the array of clicked element IDs



/*

let listOfArrays = [
    ["#element1", ".class1"],
    ["button[name='submit']", "input[type='text']"]
];

let selectedElements = [];

// Function to check if the clicked element matches any selector in the list of arrays

function checkIfElementMatchesSelectors(event) {
    let clickedElement = event.target;
    listOfArrays.forEach(array => {
        array.forEach(selector => {
            if (clickedElement.matches(selector)) {
                let clickedElementInfo;
                if (clickedElement.id) {
                    clickedElementInfo =  clickedElement.id;
                } else if (clickedElement.className) {
                    clickedElementInfo =  clickedElement.className;
                } else {
                    clickedElementInfo = "Unknown element";
                }  
                // it workssssssssss    ;)
                document.getElementById('result').innerHTML =  clickedElementInfo;
                document.getElementById(clickedElementInfo).style.display = 'none';


            }
        });
    });
}
document.addEventListener("click", checkIfElementMatchesSelectors);



let countdown = 3;

// Function to update the countdown and display it
function updateCountdown() {
    // Display the current countdown value
    document.getElementById('countdownDisplay').textContent = countdown;
    
    // Decrease the countdown value
    countdown--;
    
    // Check if countdown reached 0
    if (countdown < 0) {
        clearInterval(intervalID); // Stop the countdown
        document.getElementById('countdownDisplay').textContent = "Countdown finished!";
    }
}

// Call the updateCountdown function immediately to display the initial countdown value
updateCountdown();

// Set up a setInterval to call the updateCountdown function every second (1000 milliseconds)
let intervalID = setInterval(updateCountdown, 1000);








*/