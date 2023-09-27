// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const nounButton1 = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const nounButton2 = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const nounDisplay1 = document.querySelector("#chosenNoun1");
const verbDisplay = document.querySelector("#chosenVerb");
const adjectiveDisplay = document.querySelector("#chosenAdjective");
const nounDisplay2 = document.querySelector("#chosenNoun2");
const settingDisplay = document.querySelector("#chosenSetting");
const storyDisplay = document.querySelector("#story");

// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const randomButton = document.querySelector("#random");

// Variables for pre-defined arrays
const nounArray1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nounArray2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; 

// Variables for count to grab array elements
let nounCount1 = 0;
let verbCount = 0;
let adjectiveCount = 0;
let nounCount2 = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    nounDisplay1.textContent = nounArray1[nounCount1];
    // if-else to change count setting
    if (nounCount1 >= 0 && nounCount1 < nounArray1.length) {
        nounCount1++;
        nounDisplay1.textContent = nounArray1[nounCount1];
    } else {
        nounCount1 = 0;
    }
}

function verb_on_click() {
    // variable to get array element and displaying it
    verbDisplay.textContent = verbArray[verbCount];
    // if-else to change count setting
    if (verbCount >= 0 && verbCount < verbArray.length) {
        verbCount++;
        verbDisplay.textContent = verbArray[verbCount];
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    // variable to get array element and displaying it
    adjectiveDisplay.textContent = adjectiveArray[adjectiveCount];
    // if-else to change count setting
    if (adjectiveCount >= 0 && adjectiveCount < adjectiveArray.length) {
        adjectiveCount++;
        adjectiveDisplay.textContent = adjectiveArray[adjectiveCount];
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    // variable to get array element and displaying it
    nounDisplay2.textContent = nounArray2[nounCount2];
    // if-else to change count setting
    if (nounCount2 >= 0 && nounCount2 < nounArray2.length) {
        nounCount2++;
        nounDisplay2.textContent = nounArray2[nounCount2];
    } else {
        nounCount2 = 0;
    }
}

function setting_on_click() {
    // variable to get array element and displaying it
    settingDisplay.textContent = settingArray[settingCount];
    // if-else to change count setting
    if (settingCount >= 0 && settingCount < settingArray.length) {
        settingCount++;
        settingDisplay.textContent = settingArray[settingCount];
    } else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = nounArray1[nounCount1] + " " + verbArray[verbCount] + " " + adjectiveArray[adjectiveCount] + " " + nounArray2[nounCount2] + " " + settingArray[settingCount];
}

// grabbing random element from arrays, concatenate and display
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function random_on_click() {
    storyDisplay.textContent = randomValueFromArray(nounArray1) + " " + randomValueFromArray(verbArray) + " " + randomValueFromArray(adjectiveArray) + " " + randomValueFromArray(nounArray2) + " " + randomValueFromArray(settingArray);
}

/* Event Listeners
-------------------------------------------------- */
nounButton1.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
nounButton2.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

//studentId section
const studentIdButton = document.querySelector("#studentIdButton");
const studentIdDisplay = document.querySelector("#studentId");

function studentId_on_click() {
    studentIdDisplay.textContent = "200529232 Evan";
}

studentIdButton.addEventListener('click', studentId_on_click);