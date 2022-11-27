// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
 const button = document.querySelector("button")!;

// function add(num1: number, num2: number){
//     return num1 + num2;
// }

// button.addEventListener("click", () => {
//     console.log(add(+input1.value, +input2.value));
// });

//number
//string
//boolean


// const person = "Moin";

// let newPerson: string;
// newPerson = "Nadir";

// let names: string[] = [];
// names.push("5"); 

// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;

// function add(num1: number, num2: number){
//     return num1 + num2;
// }

// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value));
// });

// const names = ["Moin", "Ayan"];
// const newNames: string[] = [];

// type Person = {name: string; age: number; hobbies: string[]; email: string};

// let customers: Person[] = []

// const person1: Person = {
//     name: "Moin",
//     age: 21,
//     hobbies: ["Swimming"],
//     email: ""
// }
// person1.email = "abc@email.com"
// customers.push(person1);


// //tuples = fixed length array
// const roles:[number, string] = [0, "Admin"]

// //Union type
// let data: string | number; 
// data = "Moin";
// data = 2;

// function calculation(num1: number, num2: number, cond: "add" | "subtract"){
//     if(cond = "add") {
//         return num1 + num2;
//     } else if(cond = "subtract") {
//         return num1 - num2;
//     }
// }
// console.log(calculation(2, 8, "add"));

// let myFunc:(x: number, y: number) => number;

// function add(num1: number, num2: number): number{
//     return num1 + num2;
// }

// myFunc = add;

//to make project of tsc & carry it's configuration
// command : tsc --init

function log(data: string){
    console.log("Clicked " + data);
}
button.addEventListener("click", log.bind(null, "hello"));

//CLASSES
class Student {
    // name: string;
    // rollNo: number;
    private skills: string[] = [];

    // constructor(n: string, r: number) {
    //     this.name = n;
    //     this.rollNo = r;
    // }

    constructor(public name: string, public rollNo: number) { //Shorthand Initialization
    }

    addSkill(s: string) {
        this.skills.push(s);
    }
    getSkills() {
        return this.skills;
    }
}

class VStudent extends Student {
    canVolunteerIn: string[] = [];
    constructor(name: string, rollNo: number) { //Shorthand Initialization
        super(name, rollNo) //to access properties of parents
    }
    addVskill(s: string) {
        this.canVolunteerIn.push(s);
    }
}

const student1 = new Student("Moin", 12345);
const student2 = new VStudent("Shahzaib", 54321);
student1.addSkill("Javascript");
console.log(student1.getSkills());
//student1.skills[2] = "TS"
student2.addVskill("Security");
console.log(student1);
console.log(student2);