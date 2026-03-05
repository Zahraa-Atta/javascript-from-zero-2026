/**
 * @file 01-values-and-variables.js
 * @author Zahraa
 * @description My first steps in JavaScript: Learning values, variables, and naming rules.
 */

// --- SECTION 1: Values ---
// Printing raw data directly to the console
console.log('zahraa'); // String
console.log(24);       // Number

// --- SECTION 2: Variables (let & const) ---
let firstName = "zahraa";
let myAge = 26;

console.log(firstName);
console.log(myAge);

// --- SECTION 3: Variable Naming Conventions ---
/**
 * RULES I LEARNED:
 * 1. camelCase: Used for multiple words (e.g., zahraaSara , last_name).
 * 2. Reserved Words: Cannot use 'function' directly, so we use '$function'.
 * 3. Constants: Use PI for mathematical values.
 * 4. Clarity: Use descriptive names like 'myFirstJob' instead of 'job1'.
 */

let last_name = "atta"; 
let zahraaSara = 'ZS'; 
let $function = 2026; 

let person = 'zahraa';
let PI = 3.14;

let myFirstJob = 'Coder';
let myCurrentJob = 'Frontend Student';

// Descriptive vs Non-descriptive (Practice)
let job1 = 'programmer'; 
let job2 = 'teacher';