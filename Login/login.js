
console.log(localStorage);




let playerName = document.getElementById('input');
let buttonLogin = document.getElementById('buttonDone');
let anchorLink = document.getElementById('buttonDoneAnchor');









document.addEventListener('load', function () {
    localStorage.clear();
})


buttonLogin.addEventListener('click', function (){
    if (playerName.value.trim() === '' || playerName.value.length <= 2) {
        alert('Enter a proper nickname');
    }else {
        const leaderBoardObj = { name: playerName.value };
        let db = null;
        let dbReqOpen = indexedDB.open('leaderBoard', 7);


        console.log(`Hello your name is ${leaderBoardObj.name}`);
        localStorage.setItem('playerNickName', leaderBoardObj.name.toString());

        dbReqOpen.onupgradeneeded = (ev) => {
            db = ev.target.result;
           if (!db.objectStoreNames.contains('leaderBoards')) { // CORRECT (Plural)
            db.createObjectStore('leaderBoards', { keyPath: 'id', autoIncrement: true });
            console.log('Object store "leaderBoards" created');
        }
        };

        dbReqOpen.onsuccess = (ev) => {
            db = ev.target.result;
            console.log('Successfully opened', db);

          addItems(leaderBoardObj);
        };

        dbReqOpen.onerror = function (event) {
            console.error('Error opening database:', event.target.error);
        };

        
        function checkValidName(obj, callback) {
            let transactions = db.transaction(['leaderBoards'], 'readonly');
            let store = transactions.objectStore('leaderBoards');
            let request = store.openCursor();

            request.onsuccess = function (event) {
                let cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.name === obj.name) {
                        callback(false);
                    } else {
                        cursor.continue();
                    }
                } else {
                    callback(true);
                }
            };

            request.onerror = function (event) {
                console.error('Error opening cursor:', event.target.error);
                callback(false);
            };
        }


        function addItems(obj) {
            checkValidName(obj, function (isValid) {
                if (isValid) {
                    let transactions = db.transaction(['leaderBoards'], 'readwrite');
                    let store = transactions.objectStore('leaderBoards');
                    let request = store.add(obj);

                    request.onsuccess = function (event) {
                        console.log('Successfully added:', event.target.result);
                        window.location.href = "../Home/home.html";
                    };

                    request.onerror = function (event) {
                        console.error('Error adding item:', event.target.error);
                    };
                } else {
                    alert('Name already exists. Insert a unique nickname.');
                }
            });
        }
    }
});





window.addEventListener('load', function () {
    let db = null;
    let dbRequest = indexedDB.open('leaderBoards', 7);

    dbRequest.onsuccess = function (event) {
        db = event.target.result;
        console.log('This is the data base', db)
        // trying to turn this off if there is not player here
        
          getAllItemsSortedByScore(function (sortedItems) {
            console.log('Sorted items by score:', sortedItems);
            updateSortedItems(sortedItems);
        });
        
      
    };

    dbRequest.onerror = function (event) {
        console.error('Database error:', event.target.error);
    };

    function getAllItemsSortedByScore(callback) {
        if (!db) {
            console.error('Database not initialized');
            return;
        }

        let transactions = db.transaction('leaderBoards', 'readonly');
        transactions.onerror = function (event) {
            console.error('Transaction error:', event.target.error);
        };

        let objectStore = transactions.objectStore('leaderBoards');
        let request = objectStore.getAll();

        request.onsuccess = function (event) {
            let items = event.target.result;
            console.log('Retrieved items:', items);

            // Sort items by score in descending order
            items.sort(function (a, b) {
                return b.score - a.score;
            });

            // Add sortOrder to each item
            items.forEach((item, index) => {
                item.sortOrder = index;
            });

            // Callback with sorted array of items
            callback(items);
        };

        request.onerror = function (event) {
            console.error('Error retrieving items:', event.target.error);
        };
    }

    function updateSortedItems(sortedItems) {
        if (!db) {
            console.error('Database not initialized');
            return;
        }

        let transactions = db.transaction('leaderBoards', 'readwrite');
        transactions.onerror = function (event) {
            console.error('Transaction error:', event.target.error);
        };

        let objectStore = transactions.objectStore('leaderBoards');

        sortedItems.forEach(function (item) {
            let request = objectStore.put(item);
            request.onsuccess = function (event) {
                console.log('Item updated successfully:', item);
            };
            request.onerror = function (event) {
                console.error('Error updating item:', event.target.error);
            };
        });

        transactions.oncomplete = function () {
            console.log('All items updated successfully.');
        };
    }
});

