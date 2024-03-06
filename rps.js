function getComputerChoice(){
   const choices=["Rock","Paper","Scissors"];
   const choice=choices[Math.floor(Math.random() * choices.length)];
   return choice
}

function play(playerSelection,computerSelection){
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
}else{
   result="Please input a valid input: rock, paper, scissors";
}
return result;

}

function playGame(){
   let i=0;
   while(i<5){
      result=play(prompt("Please choose one: Rock, Paper, Scissors"),getComputerChoice())
      if (result==="Please input a valid input: rock, paper, scissors"){
         i-=1;
      }
      console.log(result);
      i+=1;
   }
}

playGame();