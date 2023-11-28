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

