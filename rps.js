console.log("Hello World");

//Funzione per  scelta casuale del computer
// Creare una funzione per la scelta del computer.
// Creare al suo interno una variabile che crei un numero     casuale tra 0 e 2
//creare uno switch che richiami la variabil.
// per ogni caso dare una scelta differente tra rock, paper and scissors.

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3); // Numero casuale tra 0 e 2
  switch (randomChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

//Funzione per la scelta dell' essere umano
//Creare switch per scelta tra le tre opzioni
function getHumanChoice(int) {
  switch (int) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

//Dichiarare le variabili per tener traccia del punteggio dei giocatori

