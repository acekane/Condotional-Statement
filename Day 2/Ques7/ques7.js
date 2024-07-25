const age=prompt("Enter your age: ");
if(age>=0 && age<=12){
    console.log("You are a child.");
}
else if(age>=13 && age<=19){
    console.log("You are a Teenager.");
}
else if(age>=20 && age<=40){
    console.log("You are an Adult.");
}
else{
    console.log("Invaild Age.")
}