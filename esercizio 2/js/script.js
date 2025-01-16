// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// Creo un array di squadre da calcio


const squadreDiCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];

console.log(squadreDiCalcio);


// Creo un ciclo for per visualizzare tutti gli elementi di un array


for(let i= 0; i< squadreDiCalcio.length; i++){

    // Utilizzando la funzione creata prima, egenro dei numeri casuali e li sostituisco a quelli presenti in punti fatti e falli subiti
    squadreDiCalcio[i].puntiFatti = randomNumber(1, 6)
    squadreDiCalcio[i].falliSubiti= randomNumber(1, 4)
    
}
console.log(squadreDiCalcio);













// Creo una funzione per generare un numero casuale

function randomNumber(min, max) {

    return Math.floor(Math.random() *max + min) 
 }

  
  