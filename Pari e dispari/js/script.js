// 1 - Creo prompt per chiedere tra pari e dispari
let ask = prompt('Scegli tra pari o dispari');

// 2 - Dichiaro le variabili pari e dispari
let pari = 'pari';
let dispari = 'dispari';

// 3 - Creo ciclo while in caso vengano scritti prompt errati
while (ask == 'pari' || ask == 'dispari' ) {
    console.log(`Hai scelto ${ask}`);
    ask++;
} 

// 4 - Creo prompt per far scegliere numero da 1 a 5 all'utente
let player_num = prompt('Scegli un numero da 1 a 5');
player_num = parseFloat(player_num);
console.log(`Il numero che hai scelto è: ${player_num}`);


// 5 - Creo una funzione che genera un numero random da 1 a 5 per il computer
function randomNumber(){
    pc_num = Math.floor(Math.random() * 5) + 1;
    console.log(pc_num);
    return pc_num;
}

// 6 - Porto fuori dalla funzione il numero random del computer
let computer_num = randomNumber();
console.log(`Il numero del computer è: ${computer_num}`);

// 7 - Funzione per somma dei due numeri
function sommaNumeri(player_num, computer_num){
    return parseFloat(player_num + computer_num);
}

let somma = sommaNumeri(player_num, computer_num);
console.log(`La somma dei numeri è: ${somma}`);

// 8 - Stabilire chi ha vinto con if/else
if(somma%2 == 0){
    console.log('Il pari ha vinto!')
}
else{
    console.log('Il dispari ha vinto!')
}
