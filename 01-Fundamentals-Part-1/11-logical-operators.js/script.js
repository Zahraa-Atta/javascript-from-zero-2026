/**
 * @file 11-logical-operators.js
 * @author Zahraa
 * @description Combining multiple boolean conditions using AND, OR, and NOT.
 */

const hasDriversLicense = true; // Variable A
const hasGoodVision = true;     // Variable B

// --- 1. Basic Logical Operators ---

// AND (&&): Returns true only if ALL conditions are true.
console.log(hasDriversLicense && hasGoodVision); // true && true -> true

// OR (||): Returns true if at least ONE condition is true.
console.log(hasDriversLicense || hasGoodVision); // true || true -> true

// NOT (!): Flips the boolean value (true becomes false, and vice versa).
console.log(!hasDriversLicense); // !true -> false

// --- 2. Taking Complex Decisions ---

const isTired = false; // Variable C

// Checking 3 conditions at once
console.log(hasDriversLicense && hasGoodVision && isTired); // true && true && false -> false

/**
 * Logic:
 * Sarah can drive IF:
 * (She has a license) AND (She has good vision) AND (She is NOT tired)
 */
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive! ✅');
} else {
  console.log('Someone else should drive... 🚗');
}