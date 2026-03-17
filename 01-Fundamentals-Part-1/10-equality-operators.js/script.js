/**
 * @file 10-equality-operators.js
 * @author Zahraa
 * @description Difference between Strict (===) and Loose (==) equality, and handling prompts.
 */

// --- 1. Strict vs. Loose Equality ---
const age = '18';

/**
 * Strict Equality (===): No Type Coercion! 
 * It only returns true if BOTH value and type are the same.
 */
if (age === 18) console.log('You just became an adult :D (strict)'); // Won't run (String vs Number)

/**
 * Loose Equality (==): Performs Type Coercion!
 * It converts the string '18' to a number 18 and then compares. 
 * AVOID THIS: It leads to many bugs.
 */
if (age == 18) console.log('You just became an adult :D (loose)'); // Will run

// --- 2. Handling User Input (Prompt) ---
/**
 * prompt() always returns a STRING. 
 * We convert it to a Number manually (Type Conversion).
 */
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// --- 3. Else If Blocks ---
if (favourite === 23) { 
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

// --- 4. Not Equal Operator ---
/**
 * Strict Not Equal (!==): The opposite of (===).
 * Loose Not Equal (!=): The opposite of (==). (Avoid this too).
 */
if (favourite !== 23) console.log('Why not 23?');