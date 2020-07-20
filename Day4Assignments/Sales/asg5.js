var sales=Number(prompt("Enter total sales:"));
var commision=0;
console.log("Total sales are: "+sales);
if(sales>=0 && sales<=5000)
{
    commision=(sales*2)/100;
    console.log("Commision is: "+commision);
}
if(sales>=5001 && sales<=10000)
{
    commision=(sales*5)/100;
    console.log("Commision is: "+commision);
}
if(sales>=10001 && sales<=20000)
{
    commision=(sales*7)/100;
    console.log("Commision is: "+commision);
}
if(sales>20000)
{
    commision=(sales*10)/100;
    console.log("Commision is: "+commision);
}