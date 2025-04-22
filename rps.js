console.log("Hello World");

//SCELTA DEL COMPUTER

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3); // consente di generare un numero tra 0 1 2 , floor serve per arrotondare il numero 
    console.log("Numero generato:", computerChoice);
  switch (computerChoice) {
    case 0:
     return 'rock';
      break;
   
      case 1:
      return 'paper';
      break;
      
      case 2:
      return 'scissor';
      break;
    
    default:
      return 'Valore non valido';
  }
  
}




//SCELTA UMANA 

function getHumanChoice (){
  const scelta = window.prompt('Choose between rock, paper or scissor');
  switch (scelta.toLowerCase()) {
    case 'rock':
      return 'rock';
      
    
      case 'paper':
      return 'paper';
      
      
      case 'scissor':
      case 'scissors':
      return 'scissor';
      
  
  
    default:
      return 'Scegli tra le opzioni disponibili';
      
  }
}




//SCORE OF ROUND
let humanScore = 0;
let computerScore = 0;


//MATCH

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  
  if (humanChoice === 'Scegli tra le opzioni disponibili') {
    return 'Devi scegliere tra rock paper o scissors';
  }
  
  if (humanChoice === computerChoice) {
    return `Pareggio entrambi avete scelto ${humanChoice}!`;
  }
  
  // Casi in cui l'umano vince
  if (
    (humanChoice === 'rock' && computerChoice === 'scissor') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissor' && computerChoice === 'paper')
  ) {
    humanScore++; 
    return `Complimenti! ${humanChoice} batte ${computerChoice}`;
  }
  
  // Casi in cui il computer vince
  if (
    (computerChoice === 'rock' && humanChoice === 'scissor') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissor' && humanChoice === 'paper')
  ) {
    computerScore++;
    return `Hai perso! ${computerChoice} batte ${humanChoice}`;
  }
  
  // Nel caso improbabile che si raggiunga questo punto
  return "Qualcosa è andato storto nella determinazione del vincitore.";
}










