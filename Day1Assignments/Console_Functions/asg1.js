//alert("Click me to proceed")
console.log("Hey I am a javascript code");

var a= {name: "Puja", age:22, city:"Pune"};
var b= {name: "Kasturi", age:23, city:"Banglore"};
var c= {name: "Pushpa", age:22, city:"Solapur"}; 

console.log("hiiii");
console.error("An error has occurred"); //to give explicit error
console.warn("Oyye.. warning will be there"); //to give warning

console.time('Time taken'); //to start the timer

//
console.log(a);
console.log(b);
console.log(c);
//above method will print these a,b,c in very fishnet type way.. which is hard to understand

//so to avoid that we'll do below method
console.log({a,b,c});

console.table({a,b,c}); //to print all the contents in table format

//customize msg by using css.. 
//%c is nothing but we are adding css formatting to the console.log
console.log("%c Custom Msg","color:blue");

console.timeEnd('Time taken')
//Time and time-end are both the functions used to display that how much time is taken for execution till this point timeEnd
