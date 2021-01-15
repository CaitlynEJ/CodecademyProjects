// Javascript Syntax, Part 1
// Magic Eight Ball

// Goal: Use Javascript to create a virtual magic eight ball, with random answers to a user's question. 


const userName = "Caitlyn";

userName ? console.log(`Hello ${userName}`) : console.log('Hello');

let userQuestion = "Will it rain tomorrow?"
console.log(`You asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() *8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    break;
  case 1:
    eightBall = "It is decidedly so.";
    break;
  case 2:
    eightBall = "Relpy hazy. Try again.";
    break;
  case 3:
    eightBall = "Cannot predict now.";
    break;
  case 4:
    eightBall = "Do not count on it.";
    break;
  case 5:
    eightBall = "My sources say no.";
    break;
  case 6: 
    eightBall = "Outlook not so good.";
    break;
  case 7: 
    eightBall = "Signs point to yes.";
    break;
};

console.log(eightBall);
