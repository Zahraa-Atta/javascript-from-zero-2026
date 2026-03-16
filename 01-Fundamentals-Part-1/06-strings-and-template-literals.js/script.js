/**
 * @file 06-strings-and-template-literals.js
 * @author Zahraa
 * @description Comparing old-school string concatenation vs. modern Template Literals.
 */

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// --- 1. The Old Way (Concatenation) ---
/**
 * Using the '+' operator to join strings and variables.
 * It's easy to make mistakes with spaces like ' ' + ' '.
 */
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// --- 2. The Modern Way (Template Literals) ---
/**
 * Introduced in ES6. We use backticks (``) instead of quotes.
 * We use ${} to insert variables or expressions directly.
 */
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// You can use backticks for any regular string too
console.log(`Just a regular string...`);

// --- 3. Multi-line Strings ---
/**
 * Before ES6: We needed \n\ to create a new line.
 */
console.log('String with \n\
multiple \n\
lines');

/**
 * With Template Literals: Just press Enter! 
 * It respects the physical space you write.
 */
console.log(`String
multiple
lines`);