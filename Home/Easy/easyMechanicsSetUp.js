
// initializing the elments

var selectedElementList = [];
var selectedElementsCount = 0;
var data = 10;
var storageSize;

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
    document.addEventListener('click', function (event) {
        let clickedElement = event.target;
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
                        // 
                        window.location.href = '/chemistryGame/Game1.html';
                    }, Math.floor(Math.random() * 1001) + 3000);
                }
            } else {
                document.getElementById('tryDebuggInfo').innerHTML = "Unknown element";
            }
        }
    }
    );
}
// execute the function
domAttachedment();


window.addEventListener('load', function(){
    localStorage.clear();
})


// 10 elements = 0.22Kb


// export the data in another js file




/*

to do tommorow

******* Make this display the initial count down in the screen display
******* Importing the data in another js file
******* connect the fisher yates method
******* 



document.addEventListener('click', function (event) {
    let clickedElement = event.target;

    if (selectedElementsCount < 10) {
        // dom element check parent to grand parent
        while (clickedElement && !clickedElement.id) {
            clickedElement = clickedElement.parentElement;
        }
        // If an element with id is found, log its id and stores the id to the selectedElementlist array
        if (clickedElement && clickedElement.id) {
            document.getElementById(clickedElement.id).style.opacity = '0.1';
            selectedElementList.push(clickedElement.id);
            selectedElementsCount++;

            // go to the next page of game, Game1.html
            if (selectedElementsCount === 10) {
                document.getElementById('tryDebuggInfo').innerHTML = 'Waiting....';
                setTimeout(function () {
                    window.location.href = 'Game1.html';
                }, Math.floor(Math.random() * 1001) + 3000);
            }
        } else {
            document.getElementById('tryDebuggInfo').innerHTML = "Unknown element";
        }
    }
}
);




function checkIfElementMatchesSelectors(event) {
   let clickedElement = event.target;
   classNameList.forEach(selector => {
       if (clickedElement.matches(selector)) {
           let clickedElementInfo;
           if (clickedElement.id) {
               clickedElementInfo = clickedElement.id;
           } else if (clickedElement.className) {
               clickedElementInfo = clickedElement.className;
           } else {
               clickedElementInfo = "Unknown element";
           }
           // it workssssssssss    ;)
           document.getElementById('tryDebuggInfo').innerHTML = 'hi?'
           document.getElementById(clickedElementInfo).style.display = 'none';

       }
   });
}

    event.stopPropagation();

function getAllClassName(className) {
    for (let i = 1; i <= 118; i++) {
        let modifiedClassName = className.slice(0, -1) + i;
        classNameList.push(modifiedClassName);
    }
}
// initialize all the elements in the array
getAllClassName(className);


document.addEventListener("click", checkIfElementMatchesSelectors);
 





// Function to check if the clicked element matches any selector in the list of arrays
document.addEventListener('click', function (event) {
    let clickedElement = event.target;

    if (selectedElementsCount < 10) {
        // dom element check parent to grand parent
        while (clickedElement && !clickedElement.id) {
            clickedElement = clickedElement.parentElement;
        }
        // If an element with id is found, log its id and stores the id to the selectedElementlist array
        if (clickedElement && clickedElement.id) {
            document.getElementById(clickedElement.id).style.opacity = '0.1';
            selectedElementList.push(clickedElement.id);
            selectedElementsCount++;

            // go to the next page of game, Game1.html
            if (selectedElementsCount === 10) {
                document.getElementById('tryDebuggInfo').innerHTML = 'Waiting....';
                setTimeout(function () {
                    window.location.href = 'Game1.html';
                }, Math.floor(Math.random() * 1001) + 3000);
            }
        } else {
            document.getElementById('tryDebuggInfo').innerHTML = "Unknown element";
        }
    }
});






*/

