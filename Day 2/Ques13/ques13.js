
let marks = [];
for (let i = 1; i <= 5; i++) {
  marks.push(parseFloat(prompt(`Enter marks for subject ${i} (out of 100)`)));
}

let choice = prompt("Enter 'P' to calculate percentage or 'G' to calculate grade");

if (choice === 'P' || choice === 'p') {
  let percentage = (marks.reduce((a, b) => a + b) / 500) * 100;
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
} else if (choice === 'G' || choice === 'g') {
  let grade;
  let totalMarks = marks.reduce((a, b) => a + b);
  if (totalMarks >= 450) {
    grade = 'A';
  } else if (totalMarks >= 350 && totalMarks < 450) {
    grade = 'B';
  } else if (totalMarks >= 250 && totalMarks < 350) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  console.log(`Grade: ${grade}`);
} else {
  console.log("Invalid choice. Please enter 'P' or 'G'.");
}
