/**
 * Guess the number
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visa utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-box där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

 const cheatEl = document.querySelector('#cheat');
 const formGuessEl = document.querySelector('#formGuess');
 const inputGuessEl = document.querySelector('#inputGuess');
 const guessesEl = document.querySelector('#guesses');
 const turnoutEl = document.querySelector('#turnout');
 
 // Get a random number between 1-10
 const getRandomNumber = function(max = 10) {
     return Math.ceil( Math.random() * max );
 }

 let correctNumber;
 let guesses;

 const startGame = () => {
    correctNumber = getRandomNumber();
    guesses = 0;
    cheatEl.innerText = correctNumber;
 }

 const updateGuesses = (guesses) => {
    guessesEl.innerText = `${guesses} guesses`;
 }

 formGuessEl.addEventListener('submit', e => {
    e.preventDefault();

    const numberGuessed = Number(inputGuessEl.value);
    console.log(numberGuessed, "the number guessed");

    guesses++;

    updateGuesses(guesses);
    console.log(guesses, "nr of guesses")


    if (numberGuessed === correctNumber) {
        turnoutEl.innerText = `${numberGuessed} is correct 🥳`;
    } else if (numberGuessed < correctNumber) {
        turnoutEl.innerText = `${numberGuessed} is too low 👎`;
    } else if (numberGuessed > correctNumber) {
        turnoutEl.innerText = `${numberGuessed} is to high`;
    }
    inputGuessEl.value = "";
    inputGuessEl.focus();
 });

 formGuessEl.addEventListener('reset', () => {
    startGame();
    updateGuesses(guesses);
    turnoutEl.innerText = "";
 })

 startGame();