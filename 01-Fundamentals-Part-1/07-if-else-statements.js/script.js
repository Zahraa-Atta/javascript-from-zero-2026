/**
 * @file 07-if-else-statements.js
 * @author Zahraa
 * @description Controlling code flow using if/else conditions.
 */

const age = 15;

// --- 1. The if/else Control Structure ---
/**
 * SYNTAX:
 * if (condition) { 
 * // runs if condition is true 
 * } else { 
 * // runs if condition is false 
 * }
 */
if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// --- 2. Using Variables with if/else ---
const birthYear = 2012;

/**
 * We declare the variable outside first (using let) 
 * so it's accessible everywhere.
 */
let century; 
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`Born in the ${century}st century`);