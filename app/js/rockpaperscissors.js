////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //return /* Your Expression */;
    console.log("Player throws " + move);
    if (move){
        return move;
    } else {
        getInput();
    }

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //return /* Your Expression */;
    console.log("Computer throws " + move);
    if (move){
        return move;
    } else {
        randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (playerMove === computerMove){
        winner = 'tie';
        console.log("Tie! Aw shucks, play again")
    } else if (playerMove === 'rock' && computerMove === 'paper'|| playerMove === 'paper' && computerMove === 'scissors'|| playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'computer';
        console.log(winner.toUpperCase() + " Wins");
    } else {
        winner = 'player';
        console.log(winner.toUpperCase() + " Wins");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while (playerWins < 5 && computerWins < 5){
        var game = getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay()));
        if (game === 'player'){
            playerWins += 1;
        } else if (game === 'computer'){
            computerWins += 1;
        }
        console.log ("The score is " + playerWins + " - " + computerWins);
    }

    return [playerWins, computerWins];
}

playToFive();