/**
 * @file 05-operator-precedence.js
 * @author Zahraa
 * @description Understanding how JavaScript decides which operator to execute first.
 */

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// --- 1. Math vs. Comparison ---
/**
 * I learned that Math operators (+, -) have higher precedence than Comparison (>, <, >=).
 * So, (now - 1991) and (now - 2018) happen FIRST, then the comparison happens.
 */
console.log(now - 1991 > now - 2018); // true

// --- 2. Assignment Associativity (Right-to-Left) ---
/**
 * Most operators go from Left-to-Right.
 * BUT, Assignment (=) goes from Right-to-Left!
 */
let x, y;
x = y = 25 - 10 - 5; // 1. Math happens (10) -> 2. y becomes 10 -> 3. x becomes 10
console.log(x, y);   // 10 10

// --- 3. Grouping (The Power of Parentheses) ---
/**
 * Division (/) has higher precedence than Addition (+).
 * To calculate the average correctly, we MUST use parentheses ().
 */
// const averageAge = ageJonas + ageSarah / 2; // ❌ WRONG: It would divide Sarah's age only.
const averageAge = (ageJonas + ageSarah) / 2; // ✅ CORRECT: Sum first, then divide.

console.log(ageJonas, ageSarah, averageAge);