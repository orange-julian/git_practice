// Mixes Messages - codecademy portfolio project 
/*
For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, 
like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, 
the message that it outputs should be made up of 
at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program 
and customize it to your liking.

Project Objectives:
- Build a message generator program using JavaScript
- Use Git version control
- Use command line
- Develop locally on your computer
*/

/*
Method: 
program should have 3 sets of terms that will randomize together 
to make a coherent sentence. 

This will need:
- 3 arrays of equal length made of pieces of sentences 
- equal length will allow the same random number generator to be used to 
randomly select an entry in the array 
- program should:
    - create 3 arrays
    - create a random number function 
    - create a function to use the randome number function to pull
    an array entry from each array and assemble them into a sentence.

Topic:
- weather predictor?

*/

// // Weather predictor version with generated content
// function randNum (range) {
//     return Math.floor(Math.random()*range);
// }
// // console.log(randNum(10));

// function randMessage () {
//     // choose a random date within the next 10 years and make string as the first 
//     let randDate = (new Date(2023 + randNum(10),randNum(12),randNum(31)+1)).toDateString();
//     // create a list of weather conditions and choose at random.
//     let weather = ['sunny', 'cloudy', 'rainy', 'stormy', 'partly cloudy', 'foggy', 'windy'];
//     const randWeather = weather[randNum(7)];
//     // choose a random temperature between 0 and 30.
//     let randTemp = randNum(31);
//     // string random selections together into a sentence.
//     console.log(`On ${randDate}, the weather will be ${randWeather} and the temperature will be ${randTemp}ºC.`);
// }

// randMessage();

// Weather predictor version with stored content 
function randNum () {
    return Math.floor(Math.random()*7);
}
// create set of arrays for pulling
const weatherGroups = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    condition: ['sunny', 'cloudy', 'rainy', 'stormy', 'partly cloudy', 'foggy', 'windy'],
    mood: ['happy', 'sad', 'grateful', 'nostalgic', 'sleepy', 'lonely', 'joyful']
}

function randMessage () {
    console.log(`On ${weatherGroups.days[randNum()]}, the weather will be ${weatherGroups.condition[randNum()]} and you will be feeling ${weatherGroups.mood[randNum()]}.`)
}
randMessage();