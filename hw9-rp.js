// COMP 484 – HW9 JavaScript Coding Exercises

// Exercise 1: Complex Arithmetic and Standard Rules
var finalResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:", finalResult);

// Exercise 2: Case Sensitivity Test

// Declare the variable with correct camel Case
var projectIdentifier = "COMP484";

// Attempt to reassign using incorrect casing
// ProjectIdentifier = "JS_Advanced"; 
// This will FAIL because of JavaScript being CASE-Sensitive.
// "ProjectIdentifier" is treated as a completely different variable name
// and since it has not been declared, it would show a ReferenceError instead.

// To fix it, correct reassignment using the proper variable name
projectIdentifier = "JS_Advanced";

// Log the final value
console.log("Exercise 2:", projectIdentifier);

// Exercise 3: String Quoting Challenge

var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3:", courseDescription);

// Exercise 4: Escaping and Console Output

var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4:", errorMessage);

// Exercise 5: Type Coercion with Non-Plus Operators

var valueA = 10;
var valueB = "4";

// Subtraction: string "4" is coerced into number 4
var resultSubtraction = valueA - valueB;

// Multiplication: string "4" is coerced into number 4
var resultMultiplication = valueA * valueB;

// Log results
console.log("Exercise 5 (subtraction):", resultSubtraction);
console.log("Exercise 5 (multiplication):", resultMultiplication);

// Show types
console.log("Type of resultSubtraction:", typeof resultSubtraction);
console.log("Type of resultMultiplication:", typeof resultMultiplication);

// ### Set 2: Operators and Type Theory

// Exercise 6: Understanding null and undefined Types

// Declare a variable without assigning a value → undefined
var unassignedVar;

// Declare a variable explicitly set to null
var explicitNull = null;

// Log the typeof results
console.log("Exercise 6 (unassignedVar):", typeof unassignedVar);
console.log("Exercise 6 (explicitNull):", typeof explicitNull);

/*
  Explanation:
  - A variable declared but not assigned a value defaults to `undefined`.
    So typeof unassignedVar → "undefined".

  - A variable explicitly assigned `null` is meant to represent "no value".
    However, typeof null → "object".
    This is a known bug in JavaScript:
    in the original implementation, values were stored with type tags,
    and null was represented with the same tag as objects.
*/

// Exercise 7: Boolean Assignment and Type Identification

// First assignment: boolean value true
var isBlocking = true;
console.log("Exercise 7 (boolean):", typeof isBlocking);

// Reassign to string value "true"
isBlocking = "true";
console.log("Exercise 7 (string):", typeof isBlocking);

// Exercise 8: Invalid Variable Naming

// var 1stVariable = "test"; 
// INVALID: Variable names cannot start with a number.

// var my variable = "test"; 
// INVALID: Variable names cannot contain spaces.

// var user!Name = "test"; 
// INVALID: Special characters like ! are not allowed in identifiers 
// (only letters, digits, underscores _, and dollar signs $ are permitted).

// Exercise 9: Chained Shorthand Arithmetic

// Initialize counterValue to 50
var counterValue = 50;

// First, divide by 5 using shorthand division assignment
counterValue /= 5;

// Then, subtract 3 using shorthand subtraction assignment
counterValue -= 3;

// Log the final result
console.log("Exercise 9:", counterValue);

// Exercise 10: Prefix vs. Postfix Unary Operators

// Step 1: Initialize x to 10
var x = 10;

// Step 2: Postfix increment (x++)
var y_post = x++;
console.log("Exercise 10 (postfix): y_post =", y_post, "x =", x);
// Explanation: y_post gets the OLD value of x (10).
// After assignment, x is incremented to 11.

// Step 3: Reinitialize x to 10
x = 10;

// Step 4: Prefix increment (++x)
var z_pre = ++x;
console.log("Exercise 10 (prefix): z_pre =", z_pre, "x =", x);
// Explanation: x is incremented FIRST (to 11), then assigned to z_pre.

//### Set 3: Advanced Logic and Comparisons

// Exercise 11: Loose Equality and Coercion

var testNumber = 0;       // numeric value
var testBoolean = false;  // boolean value

if (testNumber == testBoolean) {
  console.log("Exercise 11: testNumber and testBoolean are loosely equal.");
}

/*
  Explanation:
  - The loose equality operator (==) allows the type coercion.
  - In this case, false is coerced to the number 0.
  - So that the comparison becomes 0 == 0, which is true.
  - This explains why the if block executes and logs the message.
*/

// Exercise 12: Strict Inequality Test

var versionA = 10.0;     // number
var versionB = "10.0";   // string

if (versionA !== versionB) {
  console.log("Exercise 12: version A and version B are NOT strictly equal.");
} else {
  console.log("Exercise 12: version A and version B ARE strictly equal.");
}

// Exercise 13: Logical OR and AND Combination

// Set up the boolean variables
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;

// Access is granted if:
// (isLoggedIn AND isSubscriber) OR (isLoggedIn AND NOT trialExpired)
// If isTrialExpired is true, and isSubscriber is false, then "Access denied".
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
  console.log("Exercise 13: Access granted.");
} else {
  console.log("Exercise 13: Access denied.");
}

// Exercise 14: Simulating XOR using Nested Conditionals

var conditionA = true;
var conditionB = false;

// XOR logic: true if either A or B is true, but not both (= fail)
if ((conditionA && !conditionB) || (!conditionA && conditionB)) {
  console.log("Exercise 14: XOR Success");
} else {
  console.log("Exercise 14: XOR Fail");
}

// Exercise 15: Converting IF/ELSE to Ternary Operator

// Initialize scriptLoadType
var scriptLoadType = "deferred";

// Standard if/else structure
var loadStatus;
if (scriptLoadType === "deferred") {
  loadStatus = "Non-blocking";
} else {
  loadStatus = "Potentially Blocking";
}
console.log("Exercise 15 (if/else):", loadStatus);

// Equivalent using the Ternary Operator
var loadStatusTernary = (scriptLoadType === "deferred") 
  ? "Non-blocking" 
  : "Potentially Blocking";

console.log("Exercise 15 (ternary):", loadStatusTernary);

//### Set 4: Integration and Application

// Exercise 16: Commenting and Code Structure

/*
  The calculateRenderTime function is intended to calculate
  the time taken for a website to render. This could have
  measuring how long it takes to do HTML, apply CSS, and
  execute JavaScript before the page is fully interactive.
*/
function calculateRenderTime() {
  // Told in instuctions to not include its body details
}

// Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)

// Create a new Date object for the current date
var today = new Date();

// Extract components
var month = today.getMonth() + 1; // Months are zero indexed, so add 1 so its accurate
var day = today.getDate();
var year = today.getFullYear();

// Build formatted string using string concatenation
var formattedDate = "Today is " + month + "/" + day + "/" + year;

// Log the result
console.log("Exercise 17:", formattedDate);

// Exercise 18: Mixed Type Arithmetic Explanation

var val1 = 20;     // number
var val2 = "5";    // string

// Perform addition and subtraction
var sumResult = val1 + val2;
var diffResult = val1 - val2;

// Log results
console.log("Exercise 18 (sumResult):", sumResult);
console.log("Exercise 18 (diffResult):", diffResult);

/*
  Explanation:
  - When using the + operator with a number and a string,
    JavaScript performs string concatenation instead of numeric addition.
    So 20 + "5" becomes "205" (a string).

  - When using other arithmetic operators like for ex. - (subtraction),
    JavaScript attempts to coerce the string into a number.
    So 20 - "5" becomes 15 (a number).

  - This showcases that the + operator is overloaded in JavaScript:
    it can mean either numeric addition or string concatenation,
    depending on the types of the operands.
*/

// Exercise 19: Conditional based on Type Check

var dataInput = 484; // numeric value if anything else is "new type is boolean"

if (typeof dataInput === "number") {
  console.log("Exercise 19: Input is numeric.");
} else {
  dataInput = true; // reassign to boolean
  console.log("Exercise 19: New type is", typeof dataInput);
}

// Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)

/*
  Timing Issue Explanation:
  If this script is placed inside the <head> of the HTML document
  without using the "defer" or "async" attributes, it will run
  immediately while the browser is still parsing the HTML.
  
  At that moment, the <body> (and its elements) may not appear to exist.
  Attempting to access document.body or set innerHTML on a node
  that hasn’t been parsed will result in an error like:
  
  "Cannot set property 'innerHTML' of null".
  
  To prevent this, you should:
  - Place the script at the end of the <body>, OR
  - Use the "defer" attribute so it executes after parsing, OR
  - Wrap DOM manipulation code inside a DOMContentLoaded event listener.
*/

// Standard JavaScript code to inject an <h1> element
var heading = document.createElement("h1");
heading.innerHTML = "Interactive Layer Loaded";

document.body.appendChild(heading);
