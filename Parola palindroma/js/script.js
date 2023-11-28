// 1 - Creare un prompt per pernmettere l'inserimento di una parola.
let word = prompt('Inserisci una parola');
console.log(word);

// 2 - Creare funzione per scomporre la parola
function wordLetters(word){
    word = word.toLowerCase();
    let reverse_word = word.split('').reverse().join('').toLowerCase();
    console.log(`la reverse word è: ${reverse_word}`);

    // 4 - Creo ciclo if/else per visualizzare in console il risultato
    if (reverse_word == word){
        console.log('La parola è palindroma!');
    }
    else{
        console.log('La parola NON è palindroma!');
    }
    return reverse_word;
}


// 3 - Richiamo la funzione
let reverse_word = wordLetters(word);

