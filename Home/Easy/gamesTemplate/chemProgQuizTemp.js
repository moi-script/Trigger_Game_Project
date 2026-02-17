document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buttongoHome');

    button.addEventListener('click', () => {
        let newValue = '';
        if (document.title === 'Chemistry') {
            newValue = '1';
        } else if (document.title === 'Programming') {
            newValue = '2';
        } else if (document.title === 'SimpleQuiz') {
            newValue = '3';
        }
        
        // Retrieve the existing concatenated value
        let existingValue = localStorage.getItem('gameFinished') || '';
        existingValue += newValue;

        for (let i = 0; i < existingValue.length; i++) {
            console.log(existingValue[i]);
        }

        // Store the updated value back to local storage
        localStorage.setItem('gameFinished', existingValue);
    }
    );
});

//alert('hello world');
console.log("I will try to print out the key in advance");
let value = localStorage.getItem('gameFinished') || '';
console.log("Now this is the value: " + value);
