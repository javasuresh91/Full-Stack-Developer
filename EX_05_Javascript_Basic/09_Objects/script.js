
//WAY 1 : This is the Object
var student = {
    //these are the Object Property
    firstName : "Suresh",
    lastName : "R",
    age : 28,
    greeting : function() { // Function can be inside the object
        return "Good Moring...! "+this.firstName;
    }
}

console.log(student.firstName); //1. Way of accessing
console.log(student["firstName"]); //2. Way of accessing
console.log(student.greeting());

console.log("================");

//WAY 2 :Create a new empty object
var student1 = new Object();
student1.firstName = "Vimala";
student1.age = 25;
student1.greeting= function () {
    return "Good Moring...! "+this.firstName;
}

console.log(student1.firstName); 
console.log(student1["age"]); 
console.log(student1.greeting());

console.log("================");

//WAY 3 : 
var student2 = {};
student2.firstName = "XXXXXXXXXX";
student2.age = 5;

console.log(student2.firstName); 
console.log(student2["age"]); 

console.log("================");

var students = [];
students.push(student);
students.push(student1);
students.push(student2);

for(var i = 0; i<students.length;i++) {
    console.log(students[i]);
}
console.log("================");
for(var i = 0; i<students.length;i++) {
    console.log(students[i].firstName);
}

console.log("================");

//WAY 4 : Object Constructor

function vehicle (brand,model) {
    this.brandName = brand; //brandName is property of the object, we assigning the paramater value to the object property
    this.modelNumber = model; 
    this.greeting = function() {
        return "This car is belongs to "+this.modelNumber+" with in "+this.brandName;
    };
}
var v1 = new vehicle("Suzki","i10"); // using new Operator
console.log(v1);
console.log(v1.greeting());


console.log("================");
