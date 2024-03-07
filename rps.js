
const body=document.querySelector('body');

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
   }else if(playerSelection==="rock" && computerSelection==="paper"){
      result="You Lose! Paper beats Rock"
}

else if(playerSelection==="paper" && computerSelection==="rock"){
   result="You Win! Paper beats Rock"
}else if(playerSelection==="paper" && computerSelection==="scissors"){
   result="You Lose! Scissors beats Paper"
}

else if(playerSelection==="scissors" && computerSelection==="paper"){
   result="You Win! Scissors beats Paper"
}else if(playerSelection==="scissors" && computerSelection==="rock"){
   result="You Lose! Rock beats Scissors"
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
   resultScreen.textContent = roundResult;
}
