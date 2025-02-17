const prompt = require('prompt-sync')();
let userName=prompt("Please Enter your name:")
let userAge=prompt("Please Enter Your age:")
console.log(`Hello ${userName}, you are ${userAge} years old!`);
let runningYear=2025;
let dateOfBirth=runningYear-parseInt(userAge)
console.log("Your date of birth is",dateOfBirth)
