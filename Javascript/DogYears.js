// Javascript Syntax, Part 1
// Dog Years

// Goal: Write a program to covert a humans age into dog years.

// my current age
let myAge = 28;

// holds first two years, will change
let earlyYears = 2

earlyYears *= 10.5;

// my age minus first two years
let laterYears = myAge - 2;

// multiply later years
laterYears *= 4;

console.log(earlyYears, laterYears);

// my total dog years age
let myAgeInDogYears = earlyYears + laterYears;

// lowercase my name
let myName = 'Caitlyn'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}.`);
