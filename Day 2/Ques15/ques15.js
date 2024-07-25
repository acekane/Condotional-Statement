let bill=parseInt(prompt("Enter a Units: "));

bii=Number(n=bill)
if(bill>=0 && bill<=100){
   let bill_Amount=bill*1.5;
   console.log("this total",bill,"of bill is: ",bill_Amount);
}
else if(bill>100 && bill<=200){
    let bill_Amount=(100*1.5)+((bill-100)*2.0);
    console.log("this total",bill,"of bill is: ",bill_Amount);

}
else if(bill>200 && bill<=300){
    let bill_Amount=(100*1.5)+(200*2.0)+((bill-200)*3.0);
    console.log("this total",bill,"of bill is: ",bill_Amount);
}
