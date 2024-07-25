let a=prompt("Enter coefficient a: ");
let b=prompt("Enter coefficient b: ");
let c=prompt("Enter coefficient c: ");
a=Number(a);
a=Number(b);
a=Number(c);

let discriminant=b*b-4*a*c;
if(discriminant>0){
   let root1=(-b+Math.sqrt(discriminant))/(2*a);
   let root2=(-b+Math.sqrt(discriminant))/(2*a);
   console.log("The equation has two distinct real roots:");
            console.log("Root 1: ",root1);
            console.log("Root 2: ",root2);
}
else if(discriminant===0){
    let root=-b/(2*a);
    console.log("The equation has one real root (repeated root):");
            console.log("Root: ",root);
}
else{
    let realPart=-b/(2*a);
        let imaginaryPart=Math.sqrt(-discriminant)/(2*a);
        console.log("The equation has two complex roots:");
        console.log("Root 1: ",realPart," + ",imaginaryPart,"i");
        console.log("Root 2: ",realPart," - ",imaginaryPart,"i"); 
}