let num1=prompt("Enter a Number to check positive, negative, or zero: ");
num1=Number(num1);
if(num1==0){
    console.log("this is zero Number.");
}
else if(num1>0){
    console.log("this Number is Positive.");
}
else if(num1<0){
    console.log("this number is negative.");
}
else{
    console.log("only enter a number.")
}