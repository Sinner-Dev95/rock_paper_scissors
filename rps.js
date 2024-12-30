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
      return 'Scissor';
    }
    else {
      return 'Elemento non valido';
    }
}

//ricordarsi che per chiamare la funzione non è necessario inserire un valore.


//Funzione ineerente alla scelta umana 

function getHumanChoice (){
  const scelta = window.prompt('Choose between rock paper or scissors!');
  if (scelta() === 'rock'){
    return 'Rock';
  }
  else if (scelta.toLowerCase() === 'paper'){
    return 'Paper';
  }
  else if (scelta.toLowerCase() === 'scissors')
    return 'Scissors';
  else {'Scelta non valida'}

  
}

const humanScore = 0;
const computerScore = 0;
//Funzione ineerente al round del gioco












