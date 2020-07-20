var num1=0;
var num2=0;
var num3=0;
var num4=0;
var nums;
function get1()
{
        num1=Number(prompt("Enter first number"));
        console.log(num1);
        num2=Number(prompt("Enter second number"));
        console.log(num2);
        return [num1,num2];
}
function get2()
{
        num3=Number(prompt("Enter marks obtained:"));
        console.log(num3);
        num4=Number(prompt("Enter total marks:"));
        console.log(num4);
        return [num3,num4];
}

let ch=Number(prompt(`1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Square root \n 6. Percentage \n 7.Exit \n Enter your choice:`));

switch(ch)
{
    case 1:
            nums=get1();
            num1=Number(nums[0]);
            num2=Number(nums[1]);
            let sum=num1+num2;
            console.log("Addition is: "+Number(sum));
            break;
    case 2:
            nums=get1();
            num1=Number(nums[0]);
            num2=Number(nums[1]);
            let sub=num1-num2;
            console.log("Subtraction is: "+sub);
            break;
    case 3:
            nums=get1();
            num1=Number(nums[0]);
            num2=Number(nums[1]);
            let mul=num1*num2;
            console.log("Multiplication is: "+mul);
            break;
    case 4:
            nums=get1();
            num1=Number(nums[0]);
            num2=Number(nums[1]);
            let div=num1/num2;
            console.log("Division is: "+div);
            break;
    case 5:
            nums=get1();
            num1=Number(nums[0]);
            num2=Number(nums[1]);
            let sqrt1=Math.sqrt(num1);
            let sqrt2=Math.sqrt(num2);
            console.log(`Square root of ${num1} is: ${sqrt1} \n Square root of ${num2} is: ${sqrt2}`)
            break;
        
    case 6:
            let nums1=get2();
            let marksObtained=Number(nums1[0]);
            let totalMarks=Number(nums1[1]); 
            //let sum2=num3+num4;
            let per=(marksObtained/totalMarks)*100;
            console.log("Percentage is: "+per);
            break; 
    case 7:
            console.log("You are exited!")
            break;
    default:
            alert("Wrong choice!! \n Try again...");
}

