// chapter two
// Practice exercise 2.1
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);  // string
console.log(typeof str2);  // string
console.log(typeof val1);  // undefined
console.log(typeof val2);  // object
console.log(typeof myNum);  // number

// Practice exercise 2.1

const name = "Nimra";
const age = 23;
const canCodeJavaScript = true;

console.log(`Hello, my name is ${name}, I am ${age} years old, and I can code JavaScript: ${canCodeJavaScript}`);


// Practice exercise 2.3
// Get the values of the other two sides (a and b) from the user using prompt
const a = parseFloat(prompt("Enter the length of side 'a':"));
const b = parseFloat(prompt("Enter the length of side 'b':"));

// Check if the inputs are valid numbers
if (isNaN(a) || isNaN(b)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  // Calculate the square of a and b
  const aSquared = a * a;
  const bSquared = b * b;

  // Calculate the square of the hypotenuse (c) using the Pythagorean theorem
  const cSquared = aSquared + bSquared;

  // Calculate the square root of cSquared to get the hypotenuse
  const c = Math.sqrt(cSquared);

  // Print the result to the console
  console.log(`The length of the hypotenuse (c) is: ${c}`);
}
// practice exercise 2.4
let x = 10;
let y = 5;
let z = 3;

// Add b to a
x += y;

// Divide a by c
x /= y;

// Replace the value of c with the modulus of c and b
z %= y;

// Print all three numbers to the console
console.log(`a: ${x}`);
console.log(`b: ${y}`);
console.log(`c: ${z}`);

// Chapter project
// Miles-to-kilometers converter

const miles = 130;
const kilometers = miles * 1.60934;

console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles`);
