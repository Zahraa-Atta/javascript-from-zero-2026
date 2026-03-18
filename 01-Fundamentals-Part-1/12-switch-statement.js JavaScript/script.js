/**
 * @file 12-switch-statement.js
 * @author Zahraa
 * @description Comparing the Switch statement with if-else for multi-condition logic.
 */

const day = 'friday';

// --- 1. The Switch Statement (The Modern & Clean Way) ---
/**
 * The switch performs a STRICT EQUALITY (===) check.
 * 'break' is essential to stop the execution from falling to the next case.
 */
switch (day) {
  case 'monday': 
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday': // Multiple cases can execute the same code
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default: // Equivalent to 'else'
    console.log('Not a valid day!');
}

// --- 2. The Equivalent If-Else Structure ---
/**
 * This achieves the same result but is more "repetitive" and harder to read.
 */
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}