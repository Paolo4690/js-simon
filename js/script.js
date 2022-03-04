// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const numeri = document.querySelector('#numeri')
let getArrayNumber = []
let arrUser = []

let tempoAttesaRimozione = 5000
let timerAttesaPrompt = 8000

generateNumber(5);
console.log(getArrayNumber)
printNumber()
let timerRimozione = setInterval(removeNumber, tempoAttesaRimozione)
setTimeout(askNumber, timerAttesaPrompt)





// FUNZIONE CHE CHIEDE I NUMERI ALL'UTENTE E LI SALVA IN ARRAY
function askNumber () {
    for(let i = 0; arrUser.length < getArrayNumber.length; i++) {
        let ask = parseInt(prompt('inserisci i numeri nella sequenza vista, numero ' + (i+1) + ':'))
        if (arrUser.includes(ask)) {
            ask = parseInt(prompt('I numeri inseriti devono essere diversi, reinserisci il numero ' + (i+1) + ':'))
        }
        arrUser.push(ask)
    }
    console.log(arrUser)
}

// FUNZIONE CHE RIMUOVE I NUMERI STAMPATI
function removeNumber () {
    numeri.innerHTML = '';
    clearInterval(timerRimozione);
    console.log('cleartimer')
}

// FUNZIONE CHE STAMPA I NUMERI 
function printNumber() {
    numeri.innerHTML = 'I numeri da ricordare sono: ' + getArrayNumber
}

// FUNZIONE CHE GENERA NUMERI RANDOM 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// FUNZIONE CHE METTE IN ARRAY NUMERI RANDOM UNICI
function generateNumber(num) {
    getArrayNumber = []
    for (let i = 0; getArrayNumber.length < num; i++) {
        let random = getRndInteger(1, 100)

        if (!getArrayNumber.includes(random)) {
            getArrayNumber.push(random)
        }
    }
}