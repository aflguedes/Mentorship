/*
Task: Write a fibonacci function that accepts a number n as an argument and returns the nth number from the Fibonacci sequence. 
The sequence starts with 0 (the zero element) and 1 (the first element), and each subsequent number is the sum of the previous two numbers.
 
Examples of use:
 
For n = 0:
Login: fibonacci(0)
Output: 0
Description: The zero element of the Fibonacci sequence is 0.
 
For n = 4:
Input: fibonacci(4)
Output: 3
Description: The fourth element of the Fibonacci sequence (0, 1, 1, 2, 3) is 3 (1 + 2).
*/

const { error } = require("console");
const read = require("readline-sync");

let sequence = [0, 1];


function Fibonacci(n)
{
    if (n == 0)
    {
        return result = sequence[0];
    }
    else if (n == 1)
    {
        return result = sequence[1];
    }
    else if (n > 1)
    {
        for(i=2; i < n; i++)
        {
            sequence[i] = parseInt(sequence[i-1]) + parseInt(sequence[i-2]);
            //console.log("sequence is",sequence[i]);
        }
        return result = sequence[n-1];
    }
    else
    {
        return error;
    }   
}

let n = read.question("Insert the Fibonacci element number: ");
let number = Fibonacci(n);
console.log("Fibonacci number for the",n,"position is",number);
