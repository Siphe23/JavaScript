
//Data Types Operatores
//Exercise 1: Numbers
// 1. Declaring a number variable and assigning it to a value.
let numberVariable1 = 3;

// 2. Declare a number variable and assigning it  to  a floating number.
let numberVariable2 = 2.99;

// 3. Perform addition, subtraction, multiplication, division, modulus, and exponentiation.
let additionResult = numberVariable1 + numberVariable2;
let subtractionResult = numberVariable1 - numberVariable2;
let multiplicationResult = numberVariable1 * numberVariable2;
let divisionResult = numberVariable1 / numberVariable2;
let modulusResult = numberVariable1 % numberVariable2;
let exponentiationResult = numberVariable1 ** numberVariable2;

// 4. Printing all variables.
console.log("Number Variable 1:", numberVariable1);
console.log("Number Variable 2:", numberVariable2);
console.log("Addition Result:", additionResult);
console.log("Subtraction Result:", subtractionResult);
console.log("Multiplication Result:", multiplicationResult);
console.log("Division Result:", divisionResult);
console.log("Modulus Result:", modulusResult);
console.log("Exponentiation Result:", exponentiationResult);

 //Exercise 2: Boolean and Operators
 // 1. Use comparison operators to compare two numbers and store the results in boolean variables.
let num1 = 7;
let num2 = 10;

let result1 = num1 > num2; // result1 will be false
console.log(result1); // false
let result2 = num1 == num2; //result2 will be false
console.log(result2);
let result3 = num1 != num2; // result3 will be true
console.log(result3);


//2. Declare two variables x and y with the values 8 and 12 
let x = 8;
let y = 12;

//using comparison operators to check and print
 if (x > y) {
    console.log("x is greater than y");
 }
 if (x <= y) {
    console.log("x is less or equal  than y");
 }
 if (x == y) {
    console.log("x is equal to y");
 }

 if (x != y) {
    console.log("x is not equal to y");
 }  

//3.  Declare the variables a and b with values true and false
let a = true;
let b = false;

console.log("a AND b:", a && b); 
console.log("a OR b:", a || b); 
console.log("NOT a:", !a); 
 
// 4. Declare variable p and assign it a value of 10.

let p = 10;

p += 5; 
console.log("p after adding 5:", p); 

p -= 3; 
console.log("p after subtracting 3:", p); 

p *= 2; 
console.log("p after multiplying by 2:", p); 

p /= 4; 
console.log("p after dividing by 4:", p); 

p %= 3; 
console.log("p after taking modulo 3:", p); 
