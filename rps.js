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



//BUTTON GAME
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissor = document.querySelector('.scissor');

// RESULT AND SCORE 
const result = document.querySelector('#risultato');
const humanScoreSpan = document.querySelector('#human-score');
const computerScoreSpan = document.querySelector('#computer-score');


//SCELTA UMANA 
//scelta umana integrata in funzione playRound

// EVENTI BUTTON

btnRock.addEventListener('click', (e)=>{
 let sceltaRock = playRound('rock');
})

btnPaper.addEventListener('click', (e)=>{
  let sceltaPaper = playRound('paper');
})

btnScissor.addEventListener('click', (e)=>{
  let sceltaScissor = playRound('scissor'),
})


//SCORE OF ROUND
let humanScore = 0;
let computerScore = 0;


//MATCH

function playRound(humanChoice) {
  
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










