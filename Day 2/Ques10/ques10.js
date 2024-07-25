let num1 = parseFloat(prompt("Enter first number"));
let operator = prompt("Enter operator (+, -, *, /)");
let num2 = parseFloat(prompt("Enter second number"));

if (operator === '+') {
  let result = num1 + num2;
  console.log(`Result: ${num1} + ${num2} = ${result}`);
} else if (operator === '-') {
  let result = num1 - num2;
  console.log(`Result: ${num1} - ${num2} = ${result}`);
} else if (operator === '*') {
  let result = num1 * num2;
  console.log(`Result: ${num1} * ${num2} = ${result}`);
} else if (operator === '/') {
  if (num2 !== 0) {
    let result = num1 / num2;
    console.log(`Result: ${num1} / ${num2} = ${result}`);
  } else {
    console.log("Error: Division by zero is not allowed");
  }
} else {
  console.log("Invalid operator. Please enter +, -, *, or /");
}
