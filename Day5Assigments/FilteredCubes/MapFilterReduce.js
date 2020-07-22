
const arr1=[];
len=prompt("Enter how many numbers do u want to enter:");
for(i=0;i<len;i++)
{
    arr1.push(prompt("Enter positive number:"));
}
console.log(arr1);

let cubes=arr1.filter((num)=>num>0).map(num=>num**3);
console.log("Cubes of positive numbers :"+cubes);