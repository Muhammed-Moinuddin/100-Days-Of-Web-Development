//Create a simple Typescript Function
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
var moin;
moin = "moinuddin";
var people = [];
people.push("moin");
console.log(people);
//object
var person = {
    name: "moin",
    age: 25,
    hobbies: ["cricket"],
    email: ""
};
person.email = "abc@email.com";
console.log(person);
//Using Custom Type for array of Objects
var array1 = [];
var person1 = {
    name: "shahzaib",
    age: 21,
    hobbies: ["cricket"],
    email: "shahzaib@gmail.com"
};
array1.push(person1);
console.log(array1);
//Tuple
var tuple1 = ["Page Not Found", 404];
// This way it does not accept tuple1[2] = "shehbaz"
// This way it accepts tuple.push("array") ; basically it is a bug
var id;
//Literal Types
function check(num1, num2, value) {
    if (value == "add") {
        return num1 + num2;
    }
    else if (value == "subtract") {
        return num1 - num2;
    }
}
console.log(check(2, 2, "add"));
//console.log(check(2,2,"divide")); this will give an Error due to literal types
var someFunc;
someFunc = function () {
    console.log("hello");
};
//Function Type with Callbacks
var myFunc;
function divide(num1, num2, cb) {
    cb(true);
    return num1 / num2;
}
myFunc = divide;
