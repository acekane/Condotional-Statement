let light_Color=prompt("Enter the color of the traffic light (red, yellow, green): ");
if(light_Color==="red"){
    console.log("Stop");
}
else if(light_Color==="yellow"){
    console.log("Get Ready");
}
else if(light_Color==="green"){
    console.log("GO");
}
else{
    console.log("Invalid color. Please enter 'red', 'yellow', or 'green'.");
}