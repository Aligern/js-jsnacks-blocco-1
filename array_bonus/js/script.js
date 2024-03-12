// we need to create 2 array with differents lenghts:
let array1 = [
    1,
    2,
    3,
    4,
    5,
];
let array2 = [
    1,
    2,
    3,
];

// we define the difference between the two arrays we have via their lenght:
const difference = array1.length - array2.length;
console.log(difference);

// now we must add to the shortest array as much element as needed to reach the longest one:
for (let i = 0; i <= difference; i++) {
    //we make the push untill array2 reaches the same lenght of array1 with a condition
    if(array2.length < array1.length) {
        let randomPush = getRndInteger(1,100);
        //console.log(randomPush);
        array2.push(randomPush);
    };
};
console.log(array1,'array1');
console.log(array2,'array2');


// this is the randomizer function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};