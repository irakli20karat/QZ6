// #1
let num = 1996;
const PI = 3.14;

// #2
let name = "Irakli Gabisonia";
let age = 16;
console.log(`Hi, my name is ${name}, and I'm ${age} years old!`);

let city = "Paris";
let country = "France";
console.log(`City: ${city}, Country: ${country}`);

// #3
let str = "45.8";
let convertedNum = Number(str) + 10;
console.log(`Original string was equal to ${str}, it was converted and now is`, convertedNum);

// #4
let sideA = 6;
let sideB = 8;
console.log(`The area of a rectangle with lengths ${sideA} & ${sideB} is`, sideA * sideB);

let a = 5;
let b = 9;
[a, b] = [b, a];

// #5
let rand = Math.floor(Math.random() * 100 % (20 - 1) + 1);
console.log("Random integer between 20 & 1:", rand);

let toRound = 7.81;
console.log(`${toRound} rounded up`, Math.ceil(toRound));
console.log(`${toRound} rounded down`, Math.floor(toRound));

let nums = [42, 17, 29, 5];
console.log(`The largest number amongst these is`, Math.max(...nums));
console.log(`The smallest number amongst these is`, Math.min(...nums));

// Bonus
/*
    let str = "7";
    let num = 2;
    console.log(str + num); <<< will output "72" ( + operator parses number as string and glues it with the other string )
    console.log(str * num); <<< will output 14 ( * parses string as number and multiplies it )
*/