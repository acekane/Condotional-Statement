let grade=prompt("Enter Your Marks: ");
if(grade>=60){
    if(grade>=90 && grade<=100){
        console.log("The Grade is A.");
    }
    else if(grade>=80 && grade<=89){
        console.log("The Grade is B.");
    }
    else if(grade>=70 && grade<=79){
        console.log("The Grade is C.");
    }
    else if(grade>=60 && grade<=69){
        console.log("The Grade is D.");
    }
}
else{
    console.log("The Grade is F.");
}