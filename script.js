function computerPlay() {
    let list = ['Rock', 'Paper', 'Scissors'];
    return list[Math.floor(Math.random() * list.length)];
}

function PlayRound(playerSelection, computerSelection ) {
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection=='scissors' && computerSelection == 'rock') || (playerSelection== 'paper' && computerSelection=='scissors')) {
        return "Computer Win!";
    }
    else {
        return "You Win!";
    }
}

let playerinput, computerinput, result;
let computerscore = 0;
let playerscore = 0;
let array = []

function game() {
    for (let i = 0; i < 5; i++) {
        playerinput = prompt("Players input please").toLowerCase();
        computerinput = computerPlay().toLowerCase();
        result = PlayRound(playerinput, computerinput);
        console.log(result);
        array.push(result);
        if (result == "Computer Win!") computerscore++;
        else if (result == "You Win!") playerscore++;
        else;
    }
    if (computerscore > playerscore) {
        console.log("Looser!");
    }
    else if (computerscore < playerscore) {
        console.log("Winner!")
    }
    else {
        console.log("Tie up!")
    }
}
game();