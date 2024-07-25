let side1 = parseFloat(prompt("Enter length of side 1"));
let side2 = parseFloat(prompt("Enter length of side 2"));
let side3 = parseFloat(prompt("Enter length of side 3"));

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles triangle");
} else {
  console.log("Scalene triangle");
}


