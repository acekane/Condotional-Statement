    let grade1=prompt("Enter the grade for subject 1: ");
    let grade2=prompt("Enter the grade for subject 2: ");
    let grade3=prompt("Enter the garde for subject 3: ");
    grade1=Number(grade1);
    grade2=Number(grade2);
    grade3=Number(grade3);

    let total_Number=grade1+grade2+grade3;
    let total_subject=3;
    let gpa=total_Number/total_subject;

    if(gpa>=3.7){
        console.log("your GPA is: ",gpa);
            console.log("Grade Classification: A");
    }
    else if(gpa>=3.0){
        console.log("your GPA is: ",gpa);
        console.log("Grade Classification: B");
    }
    else if(gpa>=2.0){
        console.log("your GPA is: ",gpa);
        console.log("Grade Classification: C");
    }
    else{
        console.log("your GPA is: ",gpa);
        console.log("Grade Classification: D");
    }