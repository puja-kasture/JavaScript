let student={
    name: "Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript",
    },
}

console.log("Destructuring Object...")
const {name,age,projects:{diceGame}}=student;
console.log(` Name is: ${name},\n age is: ${age},\n diceGame is: ${diceGame}`);
