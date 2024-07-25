let cost_Price=prompt("Enter a Price.");
let sellihn_Price=prompt("Enter a Selling Price.");
if(sellihn_Price>cost_Price){
    console.log("profit.");
}
else if(cost_Price>sellihn_Price){
    console.log("loss");
}
else{
    console.log("No profit no loss");
}