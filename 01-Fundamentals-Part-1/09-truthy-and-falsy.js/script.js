/**
 * @file 09-truthy-and-falsy.js
 * @author Zahraa
 * @description Understanding how JS converts non-boolean values into True or False.
 */

// --- 1. The 5 Falsy Values ---
/**
 * In JavaScript, there are only 5 values that become 'false' when converted to a Boolean:
 * 0, '', undefined, null, NaN
 * (And of course, 'false' itself).
 */
console.log(Boolean(0));          // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));         // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false

// Anything else is a "Truthy" value
console.log(Boolean('Jonas'));    // true (Any non-empty string)
console.log(Boolean({}));         // true (An empty object is still true!)

// --- 2. Implicit Coercion in Conditions ---
/**
 * JS automatically converts any value to a Boolean when used in an 'if' statement.
 */
const money = 100;
if (money) {
  // 100 is not 0, so it's truthy
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

// --- 3. The "Zero" Trap (فخ الصفر) ---
/**
 * This is a common bug: If a variable is 0, JS treats it as 'falsy'.
 */
let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  // Even though height is defined (it's 0!), this block will run
  console.log('Height is UNDEFINED (Logic Error)');
}