//Create a simple Typescript Function
const input1 = document.getElementById("input1")! as HTMLInputElement;
const input2 = document.getElementById("input2")! as HTMLInputElement;
const button = document.querySelector("button")!;

function add(num1: number, num2: number){
    return num1 + num2;
}

button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
});

let moin: string;
moin = "moinuddin";

let people: string[] = [];
people.push("moin");
console.log(people);

//object
const person: {
    name: string;
    age: number;
    hobbies: string[];
    email: string
} = {
    name: "moin",
    age: 25,
    hobbies: ["cricket"],
    email: ""
}
person.email = "abc@email.com"
console.log(person);

//Custom Type for Object
type Person = {
    name: string;
    age: number;
    hobbies: string[];
    email: string
}

//Using Custom Type for array of Objects
let array1: Person[]= [];

const person1:Person = {
    name: "shahzaib",
    age: 21,
    hobbies: ["cricket"],
    email: "shahzaib@gmail.com"
}
array1.push(person1);
console.log(array1);

//Tuple
const tuple1:[string, number] = ["Page Not Found", 404];
// This way it does not accept tuple1[2] = "shehbaz"
// This way it accepts tuple.push("array") ; basically it is a bug

let id: string | number;

//Literal Types
function check(num1: number, num2: number, value: "add" | "subtract"){
    if (value == "add"){
        return num1 + num2;
    } else if (value == "subtract"){
        return num1 - num2;
    }
}
console.log(check(2,2,"add"));
//console.log(check(2,2,"divide")); this will give an Error due to literal types

let someFunc: () => void;
someFunc = () => {
    console.log("hello")
}

//Function Type with Callbacks
let myFunc: (x: number, y: number, z:(x: boolean) => void) => number;

function divide(num1: number, num2: number, cb:(x: boolean) => void){
    cb(true);
    return num1 / num2;
}

myFunc = divide;


