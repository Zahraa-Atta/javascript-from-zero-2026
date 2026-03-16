/**
 * @file 04-basic-operators.js
 * @author Zahraa
 * @description Master basic Math, Assignment, and Comparison operators in JavaScript.
 */

// --- 1. Math Operators ---
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// Multiplication, Division, and Exponentiation (الأس)
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 (2 * 2 * 2 = 8)

// String Concatenation (دمج النصوص)
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// --- 2. Assignment Operators (=, +=, *=, ++, --) ---
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++;     // x = x + 1 = 101
x--;     // x = x - 1 = 100
x--;     // x = x - 1 = 99
console.log(x);

// --- 3. Comparison Operators (Return Boolean: true/false) ---
console.log(ageJonas > ageSarah); // true (Is 46 > 19?)
console.log(ageSarah >= 18);      // true

// Storing comparison results in variables
const isFullAge = ageSarah >= 18;

/**
 * PRECEDENCE (الأولوية):
 * In the line below, Math happens BEFORE Comparison.
 * (now - 1991) and (now - 2018) are calculated first.
 */
console.log(now - 1991 > now - 2018); // true