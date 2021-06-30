// import functions and grab DOM elements
import { getPlantHealth } from './utils.js';

const plantImg = document.getElementById('plant-img');
const plantFeedback = document.getElementById('plant-feedback');
const waterBtn = document.getElementById('water-btn');

// initialize state
let waterLevel = 0;

//  STATE for guess-a-number
// const userGuess --> get this from the input field
// const targetNumber --> get this using Math module
// const guessesRemaining = 4


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function renderPlant(plantString){
    // update the image
    plantImg.src = `./assets/${plantString}.jpeg`;
    // update the alt text
    plantImg.alt = `${plantString}-plant`;
    // update the plantFeedback
    plantFeedback.textContent = `The plant is ${plantString}! ${waterLevel}`;
}
  // add event listener to button click

//   EVENT LISTENERS FOR GUESS A NUMBER
// on button click
//   get the userGuess from the input -- convert it to a number
//   check the userGuess against the targetNumber
//   if userGuess === targetNumber --> 
//       END THE GAME
//       display winning message
//   if userGuess !== targetNumber --> 
//       display feedback with over or under
//       decrement remaining guesses
//          if no guesses remaining
//             END THE GAME
//             display losing message

waterBtn.addEventListener('click', ()=>{
    
    // increment the waterLevel
    waterLevel++; // shorthand for waterLevel = waterLevel + 1
    
    // REFACTORED VERSION
    const plantHealth = getPlantHealth(waterLevel);
    renderPlant(plantHealth);

    // ORIGINAL VERSION
    // Notice the duplicated code
    // refactoring included moving the rendering out to its own function
    // moving the logic for plantHealth to its own function
    
    // if water level < 3
    // if (waterLevel < 3) {
    //   //    update the image to thirsty image
    //     plantImg.src = './assets/thirsty.jpeg';
    //     plantImg.alt = 'thirsty-plant';
    //   //    display message "plant is thirsty"
    //     plantFeedback.textContent = `The plant is thirsty! ${waterLevel}`;
    // else if water level <= 10
    // } else if (waterLevel <= 10) {
        // //    update the image to the healthy image
        // plantImg.src = './assets/healthy.jpeg';
        // plantImg.alt = 'healthy-plant';
        // //    display the message plant is healthy
        // plantFeedback.textContent = `The plant is healthy! ${waterLevel}`;
        // // else if water level > 10
    // } else {
        // //     update the image to overwatered
        // plantImg.src = './assets/overwatered.jpeg';
        // plantImg.alt = 'overwatered-plant';
        // //     display the message plant is overwatered
        // plantFeedback.textContent = `The plant is overwatered! ${waterLevel}`;
    // }
});