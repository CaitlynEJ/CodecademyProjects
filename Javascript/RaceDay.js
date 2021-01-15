// Javascript Syntax, Part 1
// Race Day

// Goal: Practe using if-else conditionals to output the correct response to runners based on age and registration status. 

let raceNumber = Math.floor(Math.random() * 1000);

let runRegEarly = true;
let runAge = 18;

if (runRegEarly && runAge >18) {
  raceNumber += 1000;
} 

if (runRegEarly && runAge > 18) {
  console.log(`You will race at 9:30 a.m. Your race number is ${raceNumber}.`);
} else if (runAge > 18) {
  console.log(`You will race at 11:00 a.m. Your race number is ${raceNumber}.`);
} else if (runAge < 18) {
  console.log(`You will race at 12:30 p.m. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
};
