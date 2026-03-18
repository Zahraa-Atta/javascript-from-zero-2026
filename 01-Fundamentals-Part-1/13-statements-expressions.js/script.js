/**
 * @file 13-statements-expressions.js
 * @author Zahraa
 * @description Understanding the difference between Expressions and Statements.
 */

// --- 1. Expressions (تعبيرات) ---
/**
 * An expression is a piece of code that produces a VALUE.
 * Think of it like a word in a sentence.
 */
3 + 4                   // Expression (produces 7)
1991                    // Expression
true && false && !false // Expression (produces false)

// --- 2. Statements (جمل برمجية) ---
/**
 * A statement is a bigger piece of code that performs an ACTION.
 * It doesn't produce a value by itself. Think of it like a full sentence.
 */
if (23 > 10) {
  const str = '23 is bigger'; // The whole if block is a statement
}

// --- 3. Why does it matter? ---
/**
 * Template literals only accept EXPRESSIONS, not statements.
 */
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`); 
// Inside ${}, we can only put things that produce a value.