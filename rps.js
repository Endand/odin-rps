
const body=document.querySelector('body');
let playerScore=0;
let cpuScore=0;


function getComputerChoice(){
   const choices=["Rock","Paper","Scissors"];
   const choice=choices[Math.floor(Math.random() * choices.length)];
   return choice
}

function playRound(playerSelection,computerSelection){
   playerSelection= playerSelection.toLowerCase();
   computerSelection=computerSelection.toLowerCase();
   let result=""
   if (playerSelection===computerSelection){
      result="Draw! Play Again!"
   }else if(playerSelection==="rock" && computerSelection==="scissors"){
      result="You Win! Rock beats Scissors"
      playerScore+=1;
   }else if(playerSelection==="rock" && computerSelection==="paper"){
      result="You Lose! Paper beats Rock"
      cpuScore+=1;
}

else if(playerSelection==="paper" && computerSelection==="rock"){
   result="You Win! Paper beats Rock"
   playerScore+=1;
}else if(playerSelection==="paper" && computerSelection==="scissors"){
   result="You Lose! Scissors beats Paper"
   cpuScore+=1;
}

else if(playerSelection==="scissors" && computerSelection==="paper"){
   result="You Win! Scissors beats Paper"
   playerScore+=1;
}else if(playerSelection==="scissors" && computerSelection==="rock"){
   result="You Lose! Rock beats Scissors"
   cpuScore+=1;
}

return result;

}
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');



rockButton.addEventListener('click',()=>{getResult('rock')});
paperButton.addEventListener('click',()=>{getResult('paper')});
scissorsButton.addEventListener('click',()=>{getResult('scissors')});


const resultScreen = document.createElement('div');
resultScreen.appendChild(document.createTextNode(''));
body.appendChild(resultScreen);

function getResult(choice) {
   const roundResult = playRound(choice, getComputerChoice());
   if(playerScore>=5){
      resultScreen.textContent ="You Won The Game! Congratulations!"
   }else if(cpuScore>5){
      resultScreen.textContent ="You Lost The Game, Try Again Next Time."
   }else{
   resultScreen.textContent = roundResult;
   }
}

