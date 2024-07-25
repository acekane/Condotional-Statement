let marks1 = prompt("Enter marks for Subject 1: ");
let marks2 = prompt("Enter marks for Subject 2: ");
let marks3 = prompt("Enter marks for Subject 3: ");
let marks4 = prompt("Enter marks for Subject 4: ");
let marks5 = prompt("Enter marks for Subject 5: ");
marks1 = Number(marks1);
marks2 = Number(marks2);
marks3 = Number(marks3);
marks4 = Number(marks4);
marks5 = Number(marks5);

const parcentage=40;
if(parcentage>=marks1 && parcentage>= marks2 && parcentage>=marks3 && parcentage>=marks4 && parcentage>=marks5){
   console.log("The student has passed.");
}
else{
    console.log("The student has failed.")
}