// Javascript Syntax, Part 1
// Kelvin Weather

// Goal: Write a program that will convert Kelvin tempuratures into Celsius, and then finally into Fahrenheit. 

// a constant variable for kelvin
const kelvin = 0;

// converting kevlin to celsius
let celsius = kelvin - 273;

//converting celsius to fahrenheit
let fahrenheit = celsius*(9/5) + 32;

// round down the temperature from a decimal
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(newton);
