/* do
{
    num=prompt("Enter a number greater than than or equal to 100:");
    if(num>=100)
    {
        console.log("Number is: "+num);
        break;
    }   
    else
        alert("Enter number greater than or equal to 100 only");
}while(1);
 */

var num;
pro();
function pro()
{
    num=prompt("Enter a number greater than 100")
}
let num1=num>=100 ? true : pro();
if(true)
    console.log("Number is: "+num);