let marks=parseFloat(prompt("Enter marks:"));


//using conditional statements...
console.log("Using Conditional Statements...");
if(marks<=100 && marks>=80)
    console.log("A");
else if(marks<80 && marks>=60)
    console.log("B");
else if(marks<60 && marks>=40)
    console.log("C");
else
    console.log("Failed");



//Using ternary operator 
console.log("Using ternary..");
(marks<=100 && marks>=80) ? console.log("A") : (marks<80 && marks>=60) ? console.log("B") : (marks<60 && marks>=40) ? console.log("C") : console.log("Failed")
