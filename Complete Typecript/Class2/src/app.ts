const button = document.querySelector("button")!;
function log(data: string){
    console.log("Clicked" + data);
}
button.addEventListener('click', log.bind(null,"hello"));

//CLASSES (BLUEPRINT)
class Student {
    name: string;
    rollNo: number;
    private skills: string[] = [];

    constructor(n: string, rN: number){
        this.name = n;
        this.rollNo = rN;
        
    }

    addSkill(skill: string){
        this.skills.push(skill);
    }
    //get method
    getSkills(){
        return this.skills;
    }
}

const student1 = new Student("moin", 12345);
student1.addSkill("Javascript");
// this won't work console.log(student1.skills)
console.log(student1.getSkills());
console.log(student1);

//Shorthand Initialization & abstract class
abstract class Employees {
    constructor(public name: string, public age: number){

    }
    abstract addHobbies(hobby: string) : string[];
}

//Inheritance
class VStudent extends Student{
    private canVolunteerIn: string[] = [];
    static id: string = "abc-123";
    constructor(name: string, rollNo: number){
        super(name, rollNo)
    }
    addVSkill(skill: string): void {
        this.canVolunteerIn.push(skill);
    }
    get checkVolunteer(){
        return this.canVolunteerIn;
    }
    set checkVolunteer(skills: string[]){
        //this.id not possible
        for(const skill in skills){
            if(!skill){
                return;
            }
        }
        this.canVolunteerIn = skills;
    }
}
const vstudent1 = new VStudent("Shahzaib",54321);
vstudent1.addVSkill("Exams");
console.log(vstudent1);
console.log(vstudent1.checkVolunteer);
vstudent1.checkVolunteer = ["Apple"];
console.log(vstudent1.checkVolunteer);
console.log(VStudent.id);

//Used Abstract Class
class Manager extends Employees {
   
    constructor(name: string, age: number){   
        super(name, age)
    }
    addHobbies(){ 
        return ["Hello","Hi"]
    }
}

//Singleton Class
class Human{
    //Create Object within it
    static object: Human;
    private constructor(private name: string){

    }
    static getObject(name:string){
        if(this.object){
            return this.object;
        }
        this.object = new Human(name);
        return this.object;
    }
//const check = new Human(); //It won't work
}
const moin = Human.getObject("Moin");
console.log(moin);
const ali = Human.getObject("Ali");
console.log(ali);