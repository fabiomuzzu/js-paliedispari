// 1 - Creo prompt per chiedere tra pari e dispari
let ask = prompt('pari o dispari?');

// 2 - Dichiaro le variabili pari e dispari
let pari = 'pari';
let dispari = 'dispari';

// 3 - Creo if/else in caso vengano scritti prompt errati
if (ask == 'pari' || ask == 'dispari' ) {
    console.log(`Hai scelto ${ask}`)
} 
else {
    console.log('Scegli tra pari o dispari!')
}