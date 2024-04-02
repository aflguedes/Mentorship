/* 
Problem 1: Classification of grades (solved using if-else)
Task: You have a grade from 1 to 100. Write a block of code that classifies the grade as "excellent" for grades 90 to 100, "good" for grades 70 to 89, 
"satisfactory" for grades 50 to 69, and "unsatisfactory" for scores below 50.
*/

const read = require("readline-sync");
let grade;

function input()
{
    return read.question("Please insert your grade: ");
}


function classification()
{
    grade = input();

    if (grade >= 0 && grade < 50)
    {
        return res = "unsatisfactory";
    }
    else if (grade >= 50 && grade <= 69)
    {
        return res = "satisfactory";
    } 
    else if (grade >= 70 && grade <= 89)
    {
        return res = "good";
    }
    else if (grade >= 90 && grade <= 100)
    {
        return res = "excellent";
    }
    else
    {
        console.log("Wrong input. Please enter a valid number.");
        classification();
    }
}

let result = classification();
console.log("Grade:",result);