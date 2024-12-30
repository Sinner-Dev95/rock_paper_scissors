console.log("Hello World");

//Funzione ineerente alla scelta del computer 

function getComputerChoice() {
    const Computerchoice = Math.floor(Math.random()*3); // consente di generare un numero tra 0 1 2 , floor serve per arrotondare il numero 
    if (Computerchoice === 0) {
      return 'Rock';
    }
    else if (Computerchoice === 1){
      return 'Paper';
    }
    else if (Computerchoice === 2){
      return 'Scissors';
    }
    else {
      return 'Elemento non valido';
    }
}

//ricordarsi che per chiamare la funzione non è necessario inserire un valore.


//Funzione ineerente alla scelta umana 

function getHumanChoice (){
  const scelta = window.prompt('Choose between rock paper or scissors!');
  if (scelta === 'rock'){
    return 'Rock';
  }
  else if (scelta.toLowerCase() === 'paper'){
    return 'Paper';
  }
  else if (scelta.toLowerCase() === 'scissors')
    return 'Scissors';
  else {return 'Scelta non valida'}

  
}

let humanScore = 0;
let computerScore = 0;
//Funzione ineerente al round del gioco

function playRound() {
  const humanChoice = getHumanChoice().toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();
  
  if (humanChoice === 'Scelta non valida'){
    return 'Devi scegliere tra Rock Paper o Scissors'
  }
  if (humanChoice === computerChoice ){
    humanScore++;
    computerScore++;
    return `Pareggio entrambi avete scelto ${humanChoice}!`
  }
  else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ){
    humanScore++; //serve ad incrementare score umano
    return `Complimenti ${humanChoice} batte ${computerChoice}`
  }
  else {
    computerScore++; //serve ad incrementare score computer
    return `Hai perso ${computerChoice} batte ${humanChoice}`
  }

}











