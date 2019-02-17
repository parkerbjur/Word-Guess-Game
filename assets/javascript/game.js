
let answer = [
    {
        name: "manwolves",
        hint: "Vices"
    }, 
    {
        name: "strfkr",
        hint: "Kahlil Gibran"
    },
    {
        name: "marrow",
        hint: "Mother of Maladies"
    },
    {
        name: "radiohead",
        hint: "How to Disappear Completely"
    },
    {
        name: "gorillaz",
        hint: "DARE"
    }];

let displayGuess = [];
let falseLetters = [];
let wins = 0;
let losses = 0;
let word;

function initializeScreen() {
    displayGuess = [];
    falseLetters = [];
    chooseWord();
    console.log(answer[word].name)
    for(i=1; answer[word].name.length >= i ; i++){
        displayGuess.push("_");
        document.getElementById("span0").innerText = displayGuess.join(" ");
    }
    document.getElementById("displayHint").innerText = `Hint: ${answer[word].hint}`
    document.getElementById("displayWins").innerText = `wins: ${wins}`
    document.getElementById("displayLosses").innerText = `Losses: ${losses}`
    document.getElementById("displayFalseLetters").innerText = `False Letters:`
}

function findMatches(event) {
    if(answer[word].name.search(event.key) == -1){
        updateFalseLetters(event.key);
        checkForLoss()
    } else {
        for (i=1; answer[word].name.length >= i; i++){
            var x = answer[word].name.substring(i - 1, i);
            if(x == event.key) {
                insertLetter(x, i)
                checkForWin()
            }
        }
    }
}

function updateFalseLetters(letter) {
    let x = falseLetters.indexOf(letter)
    if (x == -1){
        falseLetters.push(letter);
        document.getElementById("displayFalseLetters").innerText = `False Letters: ${falseLetters}`;
    } 
}

function checkForWin () {
    let x = displayGuess.indexOf("_");
    if(x == -1){
        window.alert("You Win");
        wins ++;
        initializeScreen();
    }
}

function checkForLoss () {
    if(falseLetters.length > 9) {
        window.alert("You Lose")
        losses ++;
        initializeScreen();
    }
}

function insertLetter (letter, position) {
    displayGuess[position - 1] = letter;
    document.getElementById("span0").innerText = displayGuess.join(" ");
}

function chooseWord () {
    let x = Math.floor(Math.random() * 5);
    return word = x;
}

function gameLoop (event) {
    findMatches(event)
}