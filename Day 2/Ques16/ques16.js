let salary=prompt("Enter Your Annual Salar: ");
salary-Number(salary);
if(salary>=300000 && salary<=600000)
{
    let Income_Text=salary*5/100;
    console.log("Income text amount is: ",Income_Text);
}
else if(salary>600000 && salary<=900000){
    let Income_Text=salary*10/100;
    console.log("Income text amount is: ",Income_Text);
}
else if(salary>900000 && salary<=1200000){
    let Income_Text=salary*15/100;
    console.log("Income text amount is: ",Income_Text);
}
else if(salary>1200000 && salary<=1500000){
    let Income_Text=salary*20/100;
    console.log("Income text amount is: ",Income_Text);
}
else{
    let Income_Text=salary*30/100;
    console.log("Income text amount is: ",Income_Text);
}