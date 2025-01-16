

// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.



const biciDaCorsa = [
    { nome: "Bianchi Oltre XR4", peso: 9 },
    { nome: "Specialized Tarmac SL7", peso: 3 },
    { nome: "Pinarello Dogma F", peso: 6 },
    { nome: "Cannondale SuperSix EVO", peso: 7 },
    { nome: "Trek Émonda SLR", peso: 5 }
  ];


// Stampo tutti gli elementi di un array

let pesi = [];
let numeroPiccolo;
for(let i = 0; i< biciDaCorsa.length; i++){

    pesi.push(biciDaCorsa[i].peso) 
    
    
    
}

let numeroPiuPiccolo = Math.min(...pesi);
console.log(numeroPiuPiccolo);


















// Creo una funzione per generare un numero casuale

function randomNumber(min, max) {

    return Math.floor(Math.random() *max + min) 
 }

  let casuale = randomNumber(1, 10)
 
  