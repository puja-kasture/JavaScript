
//Methods of Arrays

//toString() : Converts array contents into String
let arr=['apple','ball','cat','dog'];
let arrstr=arr.toString();
console.log(arrstr);


//join() : Similar to the toString(). The only difference is that we can add separator by using join
let arr1=['one','two','three','four','five'];
arrjoin=arr1.join(" & ");
console.log(arrjoin);


//Replacing elements by using positions in array
let arr2=['Jan','Feb','Mar','May'];
arr2[3]="April";
console.log(arr2);


//length : It is property for appending element into array
let arr3=['Apple','Banana','Pineapple'];
arr3[arr3.length]="Kiwi"
console.log(arr3)


//Deleting elements from array
let arr4=[1,2,3,4,5];
delete arr4[3];
console.log(arr4); //it will leave that deleted space as empty hole


//splice(): adding new elements to an array
//returns an array with deleted elements
let arr5=[9,8,7,6];
arr5.splice(2,3,0,"hi","hello"); // first parameter defines position where elements to be added in array
//second parameter defines how many elements to be removed from array
//rest elements will be added in the array
console.log(arr5);


//slice() : Slices out elements from index of array into new array
let arr6=[1,2,3,"PK","SP","VK"];
let arrslice=arr6.slice(3);
console.log(arrslice);

