
let num = parseInt(prompt("Enter a number"));

if (num > 1) { 
  let isPrime = true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("This is a prime number");
  } else {
    console.log("This is not a prime number");
  }
} else {
  console.log("This is not a prime number");
}

