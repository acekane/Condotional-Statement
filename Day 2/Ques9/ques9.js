let choice = prompt("Enter 'C' to convert Celsius to Fahrenheit or 'F' to convert Fahrenheit to Celsius");
let temperature = parseFloat(prompt("Enter temperature value"));

if (choice === 'C' || choice === 'c') {
  let fahrenheit = (temperature * 9/5) + 32;
  console.log(`${temperature}°C is equal to ${fahrenheit}°F`);
} else if (choice === 'F' || choice === 'f') {
  let celsius = (temperature - 32) * 5/9;
  console.log(`${temperature}°F is equal to ${celsius}°C`);
} else {
  console.log("Invalid choice. Please enter 'C' or 'F'.");
}