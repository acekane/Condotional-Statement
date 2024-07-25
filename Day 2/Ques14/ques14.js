let weight=prompt("Enter your weight (in kilograms):");
let height=prompt("Enter your height (in meters):");
weight=Number(weight);
height=Number(height);
let bmi=weight/(Math.pow(height,2));
console.log(bmi);
if(bmi<18.5){
    console.log("underweight")
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("Normal weight");
}
else if(bmi>=25 && bmi<29.9){
    console.log("Overweight");
}
else{
    console.log("obese");
}