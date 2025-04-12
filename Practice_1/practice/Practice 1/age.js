//const students = [
    //{
        //name: "ram",
        //age: 20
    //},
    //{name: "shiva",
       /// age: 18
    //},
    //{name: "hari",
        //age: 22
    //},
    //{name: "crist",
        //age: 25
    //},
    //{name: "OM",
        //age: 16
    //},
    //{name: "krishna",//
      //age: 17
    //}
//]
//const filterStudents = students.filter(student => {
    //const yearofBirth = 2025 - student?.age
    //const thresholdYear = 2005;
    //if(yearofBirth > thresholdYear){
        //return student.year = yearofBirth
    //}
//})
//console.log("filteredStudents", filterStudents)

class Person {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
        this.todayDate = new Date().getFullYear();
        this.studentage = ""
    }
    calculateAge(){
        this.studentage = this.todayDate - new Date(this.dob).getFullYear();
        return this.studentage;
    }


}

class Student extends Person {
    constructor(name, dob, classNumber, rollno) {
        super(name, dob);
        this.classNumber = classNumber;
        this.rollno = rollno;
    }
    displayStudentData() {
        console.log(`Name: ${this.name}, Class: ${this.classNumber}, Roll No: ${this.rollno}`);
    }
} 

const Stu = new Student("Ram", "1998-01-01", "5", "21");
Stu.displayStudentData();
Stu.calculateAge();
console.log(Stu.studentage);

