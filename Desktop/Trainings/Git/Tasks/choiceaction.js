/*
Task 2: Choice of action (solved using switch-case)
Task: You have a string with an operation ("add", "subtract", "multiply", "divide") and two numbers. 
Write a block of code that performs the selected operation on these numbers and outputs the result.
*/

const read = require("readline-sync");

let option = ["add","subtract","multiply","divide",10,20];
let op;


function init()
{
    return read.question("Please select one of the following operations\n(add,subtract,multiply,divide):  ");
}

function operation()
{
    op = init();

    switch(op)
    {
        case "add":
            return res = option[4] + option[5];
        break;

        case "subtract":
            return res = option[4] - option[5];
        break;

        case "multiply":
            return res = option[4] * option[5];
        break;

        case "divide":
            return res = option[4] / option[5];
        break;

        default:
            console.log("Invalid input.");
            operation();
        break;
    }
}

let result = operation();
console.log("Result for operation",op,"of number",option[4],"and",option[5],"is:",result);