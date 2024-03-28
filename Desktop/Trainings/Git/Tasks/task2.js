/*
Task: Create a getDayOfWeek function that accepts a number from 1 to 7 and returns the name of the day of the week, where 1 is Monday and 7 is Sunday. 
If the entered number does not match any day of the week, the function should return a string with an error.
*/

const read = require("readline-sync");
const { error } = require("console");
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function getDayOfWeek(day)
{
    if(day >= 1 && day <= 7)
    {
        return res = week[+day - 1];
    }
    else
    {
        console.log("Day is outside the range of 1 to 7.\n");
        process.exit(1);
    }
}

let day = read.question("Please enter day of the week (1-7): ");
let result = getDayOfWeek(day);

console.log("\nSelected day",day,"is",result);