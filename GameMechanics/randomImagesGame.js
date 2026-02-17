const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
let maxNumber = images.length;

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
  // transfer it to the new array a deep copy using spread operator 
let randomSortedArray = [...getRandomSortedArray(maxNumber)];
 
// Initialize a new Set to store random images
let randomImages = new Set();

// Add images to the set based on the shuffled indices
for (let i = 0; i < randomSortedArray.length; i++) {
    if (randomSortedArray[i] > 0) {
      randomImages.add(images[randomSortedArray[i] - 1]);
    } else if (randomSortedArray[i] === 0) {
      randomImages.add(images[0]);
    }
  }

  let arrayImages = Array.from(randomImages);

// creating an array of division with blank answers, for index 2 and 4

const blankFirst = 2, blankSecond = 4;

for(let i = 0; i<arrayImages.length; i++)
{
    if(i == blankFirst){
        console.log("This is the blank first");
    }
    else if (i == blankSecond){
        console.log("This is the blankSecond");
    }
    else {
        console.log(arrayImages[i]);
    }
}