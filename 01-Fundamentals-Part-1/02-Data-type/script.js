/**
 * @file 02-data-types.js
 * @author Zahraa
 * @description Understanding Dynamic Typing and the 7 Primitive Data Types in JS.
 */

// --- SECTION 1: Dynamic Typing ---
/**
 * I learned that JavaScript has "Dynamic Typing": 
 * We don't define the type manually. The type is determined by the value stored in the variable.
 */
let javascriptIsFun = true;
console.log(javascriptIsFun); // true
console.log(typeof javascriptIsFun); // boolean

// Changing the value (and the type) of the same variable
javascriptIsFun = 'YES!'; 
console.log(typeof javascriptIsFun); // string (The type changed dynamically!)

// --- SECTION 2: Undefined vs. Value ---
/**
 * Undefined: A variable that is declared but not yet assigned a value.
 */
let year;
console.log(year);        // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(typeof year); // number

// --- SECTION 3: The JavaScript "Bug" ---
/**
 * NOTE: typeof null returns 'object'. 
 * This is widely regarded as a bug in JS, but it's kept for legacy reasons.
 * null should actually be its own type.
 */
console.log(typeof null); // object (Remember: This is a known bug! 🐞)

// --- QUICK SUMMARY OF PRIMITIVE TYPES ---
/*
 1. Number: Decimals & Integers.
 2. String: Sequence of characters.
 3. Boolean: Logical type (true/false).
 4. Undefined: Value taken by a variable that is not yet defined.
 5. Null: Empty value.
 6. Symbol (ES2015): Unique value (will learn later).
 7. BigInt (ES2020): For very large integers.
*/