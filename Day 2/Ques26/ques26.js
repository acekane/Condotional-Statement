let choies=prompt("Press 1 for USD to EUR\nPress 2 for EUR to USD\nPress 3 for USD to JPY.\nPress 4 for EUR To JPY.\n Press 5 for JPY to USD.\n Press 6 for JPY To EUR.");
choies=Number(choies);
const usdToEur = 0.92;    // 1 USD = 0.91 EUR
const usdToJpy = 135.52;  // 1 USD = 135.52 JPY
const eurToUsd = 1.10;    // 1 EUR = 1.10 USD
const eurToJpy = 147.85;  // 1 EUR = 147.85 JPY
const jpyToUsd = 0.0074;  // 1 JPY = 0.0074 USD
const jpyToEur = 0.0068;  // 1 JPY = 0.0068 EUR

if(choies==1){
    let amount=prompt("Enter the amount you want to convert:");
    amount=Number(amount);
    let convert=amount*usdToEur;
    console.log(convert);
}
else if(choies==2){
    let amount=prompt("Enter the amount you want to convert:");
    amount=Number(amount);
    let convert=amount*usdToEur;
    console.log(convert);
}
else if(choice==3){
    let amount=prompt("Enter the amount you want to convert:");
    amount=Number(amount);
    let convert=amount*usdToEur;
    console.log(convert);
}
else if(choies==4){
    let amount=prompt("Enter the amount you want to convert:");
    amount=Number(amount);
    let convert=amount*usdToEur;
    console.log(convert);
}
else if(choies==5){
    let amount=prompt("Enter the amount you want to convert:");
    amount=Number(amount);
    let convert=amount*usdToEur;
    console.log(convert);
    
}
else if(choies==6){
    let amount=prompt("Enter the amount you want to convert:");
    amount=Number(amount);
    let convert=amount*usdToEur;
    console.log(convert);
}
else {
    alert("Conversion not available for the selected currencies.");
}
