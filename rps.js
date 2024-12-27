console.log('Hello World');
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);  // Numero casuale tra 0 e 2
   switch (randomChoice) {
    case 0:
        return 'Rock';
    case 1:
        return 'Paper';        
    case 2:
        return 'Scissors';        
        
   
    
   }
}
