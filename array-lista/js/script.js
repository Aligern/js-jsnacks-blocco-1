// tuttiFrutti

// we have a fridge full of fruits:
let fridge = [
    'Banana',
    'Mela',
    'Pera',
    'Ciliegia',
    'Arancia',
    'Mandarino',
    'Cocomero',
    'limone',
    'Fragola'
];

// we also have a "Pesca", let's put it into the fridge:
fridge.push("Pesca");
console.log(fridge)
// tonight we want to do a cocktail based on "cocomero": let's verify if we have it in our fridge:

// found will be false untill we find our "Cocomero"
let found = false;
let watermelon = 'Cocomero';
// we search if we have our "Cocomero" in our fridge with a for loop:
for ( let i = 0; i < fridge.length; i++) {
    if (fridge[i] === watermelon ) {
        found = true;
    }
}

if (found) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
};
