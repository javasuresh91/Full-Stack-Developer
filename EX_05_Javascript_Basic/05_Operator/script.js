if(1 == 1) {
    console.log("We should see this");
}

var myAccountBalance = 300;
var nikeShoes = 79.23;
if(nikeShoes <= myAccountBalance) {
    myAccountBalance = myAccountBalance - nikeShoes;
    console.log("Shiez Pay,emt is done");
    console.log("Account BAlance : "+myAccountBalance)
}

console.log('------------------------------')
var smartWatch = 1000;
if(smartWatch <= myAccountBalance) {
    myAccountBalance = myAccountBalance - smartWatch;
    console.log("smartWatch Pay,emt is done");
    console.log("Account BAlance : "+myAccountBalance)
} else {
    console.log("insufficient Fund : "+myAccountBalance);
}

console.log('------------------------------')
// == Checks value is the Same
// === Checks value and type is the same

var age = 23;
var myAge = "23";

if(age ==  myAge) {
    console.log("Age is same using ==")
}

if(age ===  myAge) { //Best way of comparison
    console.log("Age is same using ===")
} else {
    console.log("Age is diff using ===")
}

//Logical Operators
console.log('------------------------------')
var a = 10;
var b = 100;

if(a===b && a <=  b) {
    console.log(a +" is lesser or equal to "+b)
} else {
    console.log(b +" is greater than "+a)
}

if(a===b || a<=b) {
    console.log(a +" is equal or niether lesser than "+b)
}
