let price=prompt("Enter Your Price: ");
price=Number(price);
console.log("Price: ",price);
let discount=0;
if(price>5000){
    discount=price*20/100;
    console.log("discount 20%: ",discount);
}
else if(price>2000){
    discount=price*15/100;
    console.log("discount 15%: ",discount);
}
else if(price>1000){
    discount=price*10/100;
    console.log("discount 10%: ",discount);
}
else if(price>500){
     discount=price*5/100;
    console.log("discount 5%: ",discount);
}
else{
     discount=price*0/100;
    console.log("discount 0%: ",discount);
}
let final_Amount=price-discount;
console.log("The final Amount: ",final_Amount);


