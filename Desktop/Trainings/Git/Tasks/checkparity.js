/*
Problem 3: Checking for parity (solved using the ternary operator)
Task: You have a number. Use the ternary operator to check a number for parity. 
Print "even" if the number is even, and "odd" otherwise.
*/

const read = require("readline-sync");

let number;


function calc(number)
{
    res = number % 2;
    if (res == 0)
    {
        return console.log("Number is even");
    }
    else
    {
        return console.log("Number is odd");
    }
}

number = read.question("Please insert a number: ");
calc(number);