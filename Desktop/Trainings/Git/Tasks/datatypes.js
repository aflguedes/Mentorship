'number' + 3 + 3        //since the first element is a string, this expression concatenates string "number" with 3+3, which results in "number33"
 
null + 3                //null = 0, so result will be 0 + 3 = 3
 
5 && "qwerty"           //AND evaluates the truthiness of both operands, if true returns the value of second operand, if false returns first operand, since 5 is truthy then result will be "qwerty".
 
+'40' + +'2' + "intellias"  //If the string contains valid numeric characters, "+" will convert into a number, result will be "42intellias"
 
'10' - 5 === 6          //Subtraction will attempt to convert string "10" to a number and will subtract it, 10 - 5 = 5, which is !=6, result will be "false"
 
true + false            //"+" will convert bool to number, which will result in 1 + 0, result will be "1"
 
'4px' - 3               //As in previous steps, "-" will attempt to convert "4px" to a number, in case false results in "NaN", since "4px" is not a valid number result will be "NaN"
 
'4' - 3                 //"-" will convert "4" to a number (which is positive), result will be "1"
 
'6' + 3 ** 0            //In this particular case result will be 61 since "6" is a string and "+" will only concatenate strings, 3 ** 0 is power of 0 which equals to 1 
                        //If we want to sum as numbers the proper way is to re-write: "+'6' + 3 ** 0", this way will convert "6" to number and do the math, which results in "7"

12 / '6'                //Performs a division between 12 and 6, which results in 2
 
'10' + (5 === 6);      //Concatenates string 10 to result of (5 === 6), which is false, final result will be 10false
 
null == ''             //Operation "==" compares "null" to an empty string, 
 
3 ** (9 / 3);           //First comes division, so 9/3 = 3, then 3 power of 3 will result in 27
 
!!'false' == !!'true'  //"!!" double negation operator checks if value is true of false, in first step checks if value is really false, which is true and in second case checks if value is really true, which is also true
                       //So both results will be true, which will result as "true == true"  
 
0 || '0' && 1           //First logic OR operand, 0 with 0 is 0, second login AND, 0 with 1 is 0, final result is 0
 
(+null == false) < 1;       //"+null" converts to 0 and since false is 0, operation (+null == false) will result in true, and true bool is 1, so 1 < 1 is false
 
false && true  true         //
 
false && (false || true);   //false OR true results in true, now we have false AND true, which results in false
 
(+null == false) < 1 ** 5;      //same as above, operation (+null == false) will result in true, 1 power of 5 is 1, so again 1 < 1 is false

0 || ("0" && 1(+null == false) <1)      //sintax error because of "1", I will write again below

0 || ("0" && (+null == false) <1)       //(+null == false) results in true, we will get "0 || ("0" && true <1)", both "0" && "true" are truthy, so returns value of second operand "true" 
                                        //"0 || (1 < 1)"  -> "0 || false"  -> result: false