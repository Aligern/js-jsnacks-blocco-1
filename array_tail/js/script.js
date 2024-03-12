// we need to create an array and to ask the user how many items he wish to put inside it:

// we start by creating the empty list
let emptyList = [
];

// we ask the user how many items he wish to put inside with the prompt:
emptyList = parseInt(prompt("Quanti elementi vuoi inserire nella lista?"));

for ( let i = 0; i )


// randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};