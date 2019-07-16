//Wrong way of handling many data
var student1 = "abi";
var student2 = "suresh";
var student3 = "ice";

//Correct way of handing many data
var students = ["abi","suresh","ice"];
console.log(students);

console.log("----------------------------");

//Adding elements to the Array
var naughtyStudents = [];
naughtyStudents.push(students[0]);

console.log(naughtyStudents);

console.log("----------------------------");


//Removing Elements
var goodStudents = [];
goodStudents.push(students[1]);
goodStudents.push(students[2]);
goodStudents.push('Vijay');

console.log('Before removing elements : '+goodStudents+ ' and its size is '+goodStudents.length);
 var removingIndex = goodStudents.indexOf(students[2]);
if(removingIndex > -1) {
    goodStudents = goodStudents.slice(removingIndex,removingIndex+1) // Slice method is used to remove the specified elements. 
}

console.log('After removing elements : '+goodStudents+ ' and its size is '+goodStudents.length);