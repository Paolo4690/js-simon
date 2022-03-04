// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const numeri = document.querySelector('#numeri');
let randomNumber = [];
let arrUser = [];
let indovinati = [];

let tempoAttesaRimozione = 8000;
let timerAttesaPrompt = 500;

generateNumber(5);
console.log(randomNumber);
printNumber();
let timerRimozione = setInterval(removeNumber, tempoAttesaRimozione);



// FUNZIONE CHE METTE IN ARRAY NUMERI RANDOM UNICI
function generateNumber(num) {
    randomNumber = []
    for (let i = 0; randomNumber.length < num; i++) {
        let random = getRndInteger(1, 100)

        if (!randomNumber.includes(random)) {
            randomNumber.push(random)
        }
    }
}

// FUNZIONE CHE GENERA NUMERI RANDOM 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// FUNZIONE CHE STAMPA I NUMERI 
function printNumber() {
    numeri.innerHTML = 'I numeri da ricordare sono: ' + randomNumber
}

// FUNZIONE CHE RIMUOVE I NUMERI STAMPATI
function removeNumber () {
    numeri.innerHTML = '';
    clearInterval(timerRimozione);
    console.log('cleartimer')
    setTimeout(askNumber, timerAttesaPrompt);
}

// FUNZIONE CHE CHIEDE I NUMERI ALL'UTENTE E LI CONTROLLA
function askNumber () {
    for(let i = 0; arrUser.length < randomNumber.length; i++) {
        let ask = parseInt(prompt('inserisci i numeri nella sequenza vista, numero ' + (i+1) + ':'))
        if (arrUser.includes(ask)) {
            ask = parseInt(prompt('I numeri inseriti devono essere diversi, reinserisci il numero ' + (i+1) + ':'))
        }
        arrUser.push(ask)
    }
    console.log(arrUser)
    control()
}

// FUNZIONE CHE CONTROLLA SE I NUMERI INSERITI SONO GIUSTI
function control() {
    for(let i = 0; i <= arrUser.length; i++) {
        if (randomNumber.includes(arrUser[i])) {
            indovinati.push(arrUser[i])
        }
    }
    console.log(indovinati)
    numeri.innerHTML = 'Hai indovinato ' + indovinati.length + 'numeri: ' + indovinati;
}