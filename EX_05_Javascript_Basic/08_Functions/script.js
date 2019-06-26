//Bad Approach
var length1 = 12;
var width1 =19;
var area1 = length1 * width1;

console.log(area1);

var length2 = 14;
var width2 =67;
var area2=length2*width2;

console.log(area2);

console.log("=======================")

//Good Approach

function calculateArea(length,width) {
    return length*width;
}

var area3 = calculateArea(12,10);
console.log(area3);
var area4 = calculateArea(1,75);
console.log(area4);

var rectangles = [];
rectangles.push(calculateArea(1,9));
rectangles.push(calculateArea(23,54));
console.log(rectangles);

console.log("===============");
var calculate = function(length,width) {
    return length*width;
}

var area5 = calculate(12,67);
console.log(area5);