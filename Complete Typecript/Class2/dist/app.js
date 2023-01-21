"use strict";
const button = document.querySelector("button");
function log(data) {
    console.log("Clicked" + data);
}
button.addEventListener('click', log.bind(null, "hello"));
//CLASSES (BLUEPRINT)
class Student {
    constructor(n, rN) {
        this.skills = [];
        this.name = n;
        this.rollNo = rN;
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
    //get method
    getSkills() {
        return this.skills;
    }
}
const student1 = new Student("moin", 12345);
student1.addSkill("Javascript");
// this won't work console.log(student1.skills)
console.log(student1.getSkills());
console.log(student1);
//Shorthand Initialization & abstract class
class Employees {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Inheritance
class VStudent extends Student {
    constructor(name, rollNo) {
        super(name, rollNo);
        this.canVolunteerIn = [];
    }
    addVSkill(skill) {
        this.canVolunteerIn.push(skill);
    }
    get checkVolunteer() {
        return this.canVolunteerIn;
    }
    set checkVolunteer(skills) {
        //this.id not possible
        for (const skill in skills) {
            if (!skill) {
                return;
            }
        }
        this.canVolunteerIn = skills;
    }
}
VStudent.id = "abc-123";
const vstudent1 = new VStudent("Shahzaib", 54321);
vstudent1.addVSkill("Exams");
console.log(vstudent1);
console.log(vstudent1.checkVolunteer);
vstudent1.checkVolunteer = ["Apple"];
console.log(vstudent1.checkVolunteer);
console.log(VStudent.id);
//Used Abstract Class
class Manager extends Employees {
    constructor(name, age) {
        super(name, age);
    }
    addHobbies() {
        return ["Hello", "Hi"];
    }
}
//Singleton Class
class Human {
    constructor(name) {
        this.name = name;
    }
    static getObject(name) {
        if (this.object) {
            return this.object;
        }
        this.object = new Human(name);
        return this.object;
    }
}
const moin = Human.getObject("Moin");
console.log(moin);
const ali = Human.getObject("Ali");
console.log(ali);
//# sourceMappingURL=app.js.map