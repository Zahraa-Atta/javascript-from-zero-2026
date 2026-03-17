/**
 * @file 08-type-conversion-and-coercion.js
 * @author Zahraa
 * @description Difference between manual Conversion and automatic Coercion.
 */

// --- 1. Type Conversion (Manual) ---
/**
 * When we explicitly convert one type to another.
 */
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 (Number), '1991' (String)
console.log(Number(inputYear) + 18);        // 2009

// What happens if we convert something that isn't a number?
console.log(Number('Jonas')); // NaN (Not a Number)
console.log(typeof NaN);      // number (Yes, NaN is technically a number type!)

console.log(String(23), 23);  // '23' (String), 23 (Number)

// --- 2. Type Coercion (Automatic) ---
/**
 * When JavaScript automatically converts types behind the scenes.
 */

// The '+' operator triggers coercion to STRINGS
console.log('I am ' + 23 + ' years old'); // 'I am 23 years old'

// The '-', '*', '/' operators trigger coercion to NUMBERS!
console.log('23' - '10' - 3); // 10
console.log('23' / '2');      // 11.5

// --- 3. The "n" Challenge ---
let n = '1' + 1; // It becomes '11' (String) because of '+'
n = n - 1;       // It becomes 10 (Number) because of '-'
console.log(n);  // 10