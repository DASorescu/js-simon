 /*Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// preparazione div vuoti in html 
// stilizzazione css 
// rimozione contenuto dei div 
// dichiarazione dei div in js attraverso get element
// quando il timer arriva a 0 far scomparire tutto e far apparire 5 prompt per far insserire all'utente 5 numeri 




// ?presa di elementi dal dom
const timerElement = document.getElementById('timer-div');
const numString = document.getElementById('number-string');

// ? Preparazione variabili 
const numbersArray = [];
const userNumbers = [];
let count = 3;
timerElement.innerText = count;


console.log( timerElement , numString , count );

// //FUNZIONI
// funzione che crea numeri casuali 
function randomNumbers(a , b ){
    return Math.floor(Math.random() * (b) + a);
}

// ciclo per riempire l'array con i numeri casualmente generati 
for(let i=0 ; i < 5 ; i++){
    
    let newNumber ;
    do{
        let newNumber = randomNumbers(1,100);
        numbersArray.push(newNumber);
    }while(numbersArray.includes(newNumber));
    
}

// ciclo for per assegnare i valori dell'array al nostro elemento nel dom 
let numbers = ''
for(i = 0 ; i < numbersArray.length ; i++){
    numbers += ` ${numbersArray[i]}`;
}
numString.innerText = numbers;


// //Cronometro

const timer = setInterval(() =>{
    timerElement.innerText = --count;
}, 1000);

if (count === 0){
    clearInterval(timer);
    // svuoto la stringa dei numeri
    numString.innerText = '';
    // chiedo all'utente 5 numeri 
    do{
        const userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
        userNumbers.push(userNumber);

    } while (userNumbers.length < 5)

}






