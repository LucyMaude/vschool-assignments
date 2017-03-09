//var employees = [];
//
//function Employee(name, jobTitle, salary, status) {
//    this.name = name;
//    this.jobTitle = jobTitle;
//    this.salary = salary;
//    this.status = status || "Full time";
//    this.printEmployeeForm = function () {
//        console.log("Employee's Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
//    }
//
//}
//
//function addToForm(val) {
//    employees.push(val);
//}
//
//var firstEmployee = new Employee("Sam", "The Man", "A Can", "Eating Flan");
//var secondEmployee = new Employee("Human", "Existing", "Breath to Breathe", "...Existing");
//var thirdEmployee = new Employee("Blockus", "Unemployed", "No Monies", "student woop woop");
//
//firstEmployee.printEmployeeForm();
//secondEmployee.printEmployeeForm();
//thirdEmployee.printEmployeeForm();
//
//firstEmployee.status = "Part-Time";
//
//firstEmployee.printEmployeeForm();
//
//addToForm(firstEmployee);
//addToForm(secondEmployee);
//addToForm(thirdEmployee);
//



var dogs = [];

function Dogs(name, owner, isGood, gender) {
    this.name = name;
    this.owner = owner;
    this.isGood = isGood;
    this.gender = gender;
    this.takeForWalk = function () {
        if (this.isGood === "good") {
            console.log(this.name + " is such a " + this.isGood + " dog! " + this.owner + " and I are going to take " + this.gender + " for a walk today and take " + this.gender + " off the leash!")
        } else {
            console.log(this.name + " is such a " + this.isGood + " dog! " + this.owner + " and I are going to go on a lovely walk and leave " + this.gender + " on the leash " )
        }
    }
}

var candy = new Dogs("Candy", "Amanda", "bad", "her");
var finn = new Dogs("Finn", "Mary Hampton", "bad", "him");
var grimm = new Dogs("GrimmBOB", "Eli", "good", "him");
var piggy = new Dogs("Piggy", "Titus", "good", "her");

candy.takeForWalk();
finn.takeForWalk();
grimm.takeForWalk();
piggy.takeForWalk();