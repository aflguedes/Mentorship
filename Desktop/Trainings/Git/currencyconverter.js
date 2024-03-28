/*
Task: Write a convertCurrency function that accepts an amount in US dollars (USD) and the currency code to convert to ('EUR', 'UAH', 'GBP'). 
The function should return an amount in the specified currency using fixed exchange rates 
(for example, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). 
If the currency code is not supported, the function should return a string with an error.
*/

const { error } = require("console");
const read = require("readline-sync");

//Rates comparing to 1 USD
const eur_rate = 0.9;
const uah_rate = 35;
const gbp_rate = 0.8;
let isvalid = true;
let amount;

//Only numbers are accepted
function Validate(amount)
{
    let input = /^[0-9]+$/;

    if (input.test(amount))
    {
        return true;
    }
    else
    {
        //throw new Error("Invalid input. Only numbers are accepted.");
        console.log("Invalid input. Only numbers are accepted.\n");
        return false;
    }

}


function ConvertCurrency(amount, currency)
{
    switch(currency)
    {
        case currency = ("EUR"):
            return calc = amount * eur_rate;
        break;

        case currency = ("UAH"):
            return calc = amount * uah_rate;
        break;

        case currency = ("GBP"):
            return calc = amount * gbp_rate;
        break;

        default:
            return error;
    }
}

do{
    amount = read.question("Please enter the amount (USD) to convert: ");
    isvalid = Validate(amount);
}while(isvalid == false);

const currency = read.question("Currency to convert (EUR, UAH, GBP):  ");
let result = ConvertCurrency(amount, currency);

console.log("\n", amount, "USD", "are equal to", result, currency,"\n");