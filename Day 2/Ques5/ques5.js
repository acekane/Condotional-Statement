let Year=prompt("Enter a year: ");
if(Year%4==0){
   if(Year%100==0){
    if(Year%400==0){
        console.log("This is leap Year.");
    }
    else{
        console.log("This is not a leap year.");
    }
   }
   else{
    console.log("This is leap Year.");
   }
}
else{
    console.log("This is not a leap yaer.");
}