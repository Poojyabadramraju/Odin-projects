function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    let computerChoice=choices[random];
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice=prompt("Enter your choice:");
    return humanChoice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanSelection,computerSelection){
    const hc=humanSelection().toLowerCase();
    console.log('hc:'+hc);
    const cc=computerSelection();
    console.log('cc:'+cc);

    if(cc===hc){
        console.log("It's a draw!");
    }else if (cc==='rock' && hc==='paper') {
        console.log("You win! Paper beats Rock");
        computerScore++;
        console.log("Your Score:"+humanScore);
        console.log("Computer Score:"+computerScore);
    } else if(cc==='rock' && hc==='scissors'){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        console.log("Your Score:"+humanScore);
        console.log("Computer Score:"+computerScore);
    }else if(cc==='scissors' && hc==='paper'){
        console.log("You lose! Scissors beats paper");
        computerScore++;
        console.log("Your Score:"+humanScore);
        console.log("Computer Score:"+computerScore);
    } else if (cc==='paper' && hc==='scissors') {
        console.log("You win! Scissors beats Paper");
        humanScore++;
        console.log("Your Score:"+humanScore);
        console.log("Computer Score:"+computerScore);
    } else if (cc==='paper' && hc==='rock') {
        console.log("You lose! Paper beats Rock");
        humanScore++;
        console.log("Your Score:"+humanScore);
        console.log("Computer Score:"+computerScore);
    } else if (cc==='scissors'&& hc==='rock') {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        console.log("Your Score:"+humanScore);
        console.log("Computer Score:"+computerScore);
    }else{
        console.log('Invalid input, check again');
    }
}

// const humanSelection=getHumanChoice().toLowerCase();
// console.log('hs:'+humanSelection)
// const computerSelection=getComputerChoice();
// console.log('cs:'+computerSelection)

function playGame() {
    for (let i=1; i<6; i++) {
        console.log('Round:'+i);
        playRound(getHumanChoice,getComputerChoice);
    }
    if (humanScore===computerScore) {
        console.log("It's a draw");
    }else if(humanScore>computerScore){
        console.log("Congratulations,you won the game");
    }else{
        console.log("You lost,try again")
    }
}

playGame();