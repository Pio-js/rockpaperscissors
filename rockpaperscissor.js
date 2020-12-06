let userScore= 0;
let computerScore=0;


//User input function + validator
function inputTranslator() {
        userInput= prompt(`Choose Rock, Paper or Scissor!`).toLowerCase();
        console.log(`userInput1`, userInput);
        while ((userInput!= 'rock') && (userInput!=`paper`) && userInput!='scissor') {
            userInput= prompt(`"${userInput}" is not a valid choice. Please choose again!`).toLowerCase();
        } 
        return userInput;
}

//Random computer input generator
function randomGenerator(){
    computerInput= Math.floor((Math.random()*3)+1);
    if(computerInput==1){computerInput = `rock`;};
    if(computerInput==2){computerInput = `paper`;};
    if(computerInput==3){computerInput = `scissor`;};
    console.log(`computerInput`, computerInput);
    return computerInput;
}

//Compare inputs, set possible scenarios
function compareInputs(userInput, computerInput){
    tie = (userInput == computerInput);
    userWin = (userInput==`rock` && computerInput==`scissor`) || (userInput==`paper` && computerInput==`rock`) || (userInput==`scissor` && computerInput==`paper`);
    computerWin = (!userWin && !tie);

    console.log(`userWin`, userWin);
    console.log(`computerWin`, computerWin);
    console.log(`tie`, tie);
}

//Adding 1 point to the winner's score, and advancing the counter by 1 (except when tie).
//Displaying result of the round
function logScore() {
    if (userWin) {
        userScore += 1;
        roundCounter +=1;
        alert (`|||||||||||||||||||||Round: ` + roundCounter + ` / ` + totalRounds + `||||||||||||||||||||` + `\n` 
        +  `Player chose ` + userInput + `, Computer chose ` + computerInput + `\n`
        +  `Player won!`);
    }

    if (computerWin) {
        computerScore += 1;
        roundCounter +=1;
        alert (`||||||||||||||||||||Round: ` + roundCounter + ` / ` + totalRounds + `||||||||||||||||||||` + `\n` 
        +  `Player chose ` + userInput + `, Computer chose ` + computerInput + `\n`
        + `Computer won!`);

    } if (tie) {
        alert (`||||||||||||||||||||Round: ` + roundCounter + ` / ` + totalRounds + `||||||||||||||||||||` + `\n` 
        +  `Player chose ` + userInput + `, Computer chose ` + computerInput + `\n`
        + `It's a tie!!`);
    }

    console.log(`userScore`, userScore);
    console.log(`computerScore`, computerScore);
    console.log(`roundCounter`, roundCounter);
    console.log(`--------------------------`);
}


//Prints the final winner's name and scoreboard
function finalScore() {
    if (computerScore > userScore) {
    result = alert(`|||||||||FINAL RESULT|||||||||` + `\n` + `Computer won with ` + computerScore+ ` points`);
    } else {
    result = alert(`|||||||FINAL RESULT|||||||` + `\n` + `Player won with ` + userScore+ ` points`);
}
}

//The game mechanic itself, combining the functions above.
function iterateGame(){
    for (roundCounter = 0; roundCounter < totalRounds;) {
    compareInputs(inputTranslator(), randomGenerator());
    logScore();
}
finalScore();
}

//Sets the number of rounds to be played (how many times to repeat the loop)
//Also calls the function which creates the loop for the game itself.
function startGame() {
    totalRounds = parseInt(prompt(`How many rounds do you want to play?`));
    iterateGame();
}

startGame();