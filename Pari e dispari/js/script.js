// 1 - Creo prompt per chiedere tra pari e dispari
let ask = prompt('Scegli tra pari o dispari');

// 2 - Dichiaro le variabili pari e dispari
let pari = 'pari';
let dispari = 'dispari';

// 3 - Creo if/else in caso vengano scritti prompt errati
while (ask == 'pari' || ask == 'dispari' ) {
    console.log(`Hai scelto ${ask}`);
    ask++;
} 

// COME FACCIO A RIPETERE IL PROMPT NEL CICLO WHILE SE INSERIMENTO NON CORRETTO?

// 4 - Creo prompt per far scegliere numero da 1 a 5 all'utente
let player_num = prompt('Scegli un numero da 1 a 5');
console.log(player_num);

// STESSO PROBLEMA DI SU

// 5 - Creo una funzione che genera un numero random da 1 a 5 per il computer
function randomNumber(){
    pc_num = Math.floor(Math.random() * 5) + 1;
    console.log(pc_num);
    return pc_num;
}

randomNumber();