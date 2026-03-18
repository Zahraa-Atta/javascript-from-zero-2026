/**
 * @file 14-ternary-operator.js
 * @author Zahraa
 * @description Using the Ternary Operator as a shortcut for if/else.
 */

const age = 23;

// --- 1. The Syntax ---
/**
 * condition ? value_if_true : value_if_false
 * It's called "Ternary" because it has 3 parts.
 */
// age >= 18 ? console.log('Can drive 🚗') : console.log('Cannot drive 🚶‍♂️');

// --- 2. Ternary as an Expression ---
/**
 * Unlike if/else, the ternary operator is an EXPRESSION.
 * This means we can store its result in a variable!
 */
const activity = age >= 18 ? 'Driving 🚗' : 'Walking 🚶‍♂️';
console.log(activity);

// Compare this with the longer if/else way:
let activity2;
if (age >= 18) {
  activity2 = 'Driving 🚗';
} else {
  activity2 = 'Walking 🚶‍♂️';
}
console.log(activity2);

// --- 3. Use in Template Literals ---
/**
 * Since it's an expression, we can use it inside backticks!
 * We can decide what to print dynamically.
 */
console.log(`Today, I will go by ${age >= 18 ? 'Car 🚗' : 'Foot 🚶‍♂️'}`);

// Example with Coffee (Another clear expression)
const money = 50;
const order = money >= 20 ? 'Latte ☕' : 'Water 💧';
console.log(`My order is: ${order}`);