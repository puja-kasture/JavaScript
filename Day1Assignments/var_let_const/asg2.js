// var : containers for storing values with unique names.
// like as global variable.
// function scope variable
var name="Puja";  //String
var age=22; //number
var canfly=false; //boolean
var lang=['English','Hindi','Marathi'];  //array
var frnds={name: "Sai", hobby:"Python"}; //Object

var a; //In this scenario,when you print it in console, it will give as undefined.. variable is defined but value is not assigned
console.log("Below are the variables using var");
console.log(name);
console.log(age);
console.log(canfly);
console.log(lang);
console.log(frnds);
console.log(a);

//let : provide Block Scope variables, local variable
//means the scope will be remain upto that particular block of code only

{
    console.log("Below are the variables using let");
    let name="Kasture";
    console.log("Using let: ",name);
    name="PK";
    console.log("Using let: ",name);
}
console.log(name)



//const : constant... values can't change 
console.log("Below are constant variables")
const ab=10;
console.log("Constant value is: ",ab);
console.log("Here's what will happen if we are trying to change values of constant")
ab=11; //it'll give error
console.log(ab); 

