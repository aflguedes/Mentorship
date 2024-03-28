/*Additional task. Guess the number

Write a guessNumber function that accepts a string from the user via prompt() and compares it to a randomly generated number between 1 and 10 (inclusive). 
The function should output 'Guessed!' if the user guessed the number, or 'Try again!' if not. Consider type conversions and conditional constructions.
 
The following functionality should also be added:
 
Limited number of attempts: The user has a limited number of attempts, for example 3 attempts to guess the number. Use recursion, not loops.
Hints: If the user enters a number that does not match the guess, but there are still attempts, the function gives a hint: "too big" or "too small".
Input Validation: Ensure that the user has entered a valid number in the correct range (1 to 10). 
If the entered value is invalid, please enter the number again without counting it as an attempt.
*/

const { randomInt } = require("crypto");
const read = require("readline-sync");
let attempts = 3;
let input;

function guessNumber(attempts)
{
    do{
        input = read.question("Please enter a number between 1 and 10 (inclusive): ");
    }while(input < 1 || input > 10);
    

    //Generate random number between 1 and 10
    let random_num = randomInt(1,10);

    if (input == random_num)
    {
        console.log("Guessed!\n");
        process.exit(1);
    }
    else if (attempts == 0)
    {
        console.log("Exceeded number of attempts!\n")
        console.log("random_num was:",random_num);
        process.exit(1);
    }
    else
    {
        console.log("Try again! Attempts left:",attempts);
        if (input < random_num)
        {
            console.log("Hint: too small");
        }
        else
        {
            console.log("Hint: too big");  
        }
        attempts--;
        //Using recursion to summon whole function again
        guessNumber(attempts);
    }
}

console.log("\nWelcome to Guess the number program.\n");
guessNumber(attempts);
