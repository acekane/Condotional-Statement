let age=prompt("Enter Your Age: ");
age=Number(age);
if(age>=0 && age<18){
    console.log("Not eligible to vote.")
}
else{
    console.log("eligible to vote.");
}