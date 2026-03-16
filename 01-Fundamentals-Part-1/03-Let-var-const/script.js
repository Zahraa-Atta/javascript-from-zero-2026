/**
 * @file 03-let-const-var.js
 * @author Zahraa
 * @description Understanding the difference between let, const, and var.
 */

// --- 1. let (Mutable) ---
/**
 * Used for variables that can change later (Re-assigning).
 */
let age = 30;
age = 31; // Perfect, we can mutate the variable.

// --- 2. const (Immutable) ---
/**
 * Used for variables that should NOT change.
 * It creates a "constant".
 */
const birthYear = 1991;
// birthYear = 1990; // ❌ Uncaught TypeError: Assignment to constant variable.

/**
 * NOTE: We cannot declare an empty const.
 */
// const job; // ❌ Uncaught SyntaxError: Missing initializer in const declaration.

// --- 3. var (Old Way) ---
/**
 * The old way of defining variables (ES6 before). 
 * Should be avoided in modern JS, but good to know for legacy code.
 */
var job = 'programmer';
job = 'teacher';

// --- 4. The "Global" Mistake ---
/**
 * Declaring a variable without let/const/var.
 * JS will create a property on the global object. 
 * BAD PRACTICE: Always declare your variables!
 */
lastName = 'Schmedtmann';
console.log(lastName);

// --- 💡 MY SUMMARY ---
/*
 - Use 'const' by default (it makes your code cleaner and safer).
 - Use 'let' only if you are sure the variable needs to change.
 - Avoid 'var' at all costs in modern projects.
*/