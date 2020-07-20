
//Methods of Strings

//search
let str="Hey buddy how are you?";
console.log(str.search("are")); //searches given substring in the main string and returns the first index at which the given substring starts


//slice : extracts a part of a string and returns the extracted part in a new string.
let str1="Hi I am fine";
let slice1=str1.slice(2,7);
console.log(slice1);


//substring() : similar to slice but cannot accept negative indexes
let str2="Learning JS with LetsUpgrade";
let substr=str2.substring(4,8);
console.log(substr);


//substr() : works same as slice. The only difference is that teh second parameter specifies the length of the extracted part
let str3="Sai sir is the best teacher for Python"
let substr1=str3.substr(3,9);
console.log(substr1);


//replace() : Replaces the string contents
let str4="Sai sir has a good knowledge of JS";
let rep=str4.replace("Sai","Prasad");
console.log(rep);


//trim() : Removes white spaces from both sides of the string
let str5="      Hey LetsUpgrader         ";
console.log(str5.trim());


