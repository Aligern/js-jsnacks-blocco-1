// we need to create an array and to ask the user how many items he wish to put inside it:

// we ask the user how many items he wish to put inside with the prompt:
let userNumber = parseInt(prompt("Quanti elementi vuoi inserire nella lista?"));

// we continue by creating the empty list
let userList = [
];

// we do a for loop defined by the user prompt
for (let i = 0; i <= userNumber; i++) {
    console.log(i,'index');
    let random =  getRndInteger(1,100);
    console.log(random,'random');
    userList.push(random);
};

let userEndList = parseInt(prompt("quanti elementi vuoi selezionare dalla fine?"));
let newArray = userList.slice(-userEndList);

if (isNaN(userEndList)) {
    console.log(userEndList);
}

console.log(newArray);


// randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};