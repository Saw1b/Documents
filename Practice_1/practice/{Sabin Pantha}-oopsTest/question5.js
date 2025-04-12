class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        submitButton = document.getElementById('submitButton');
        this.instantiate();
    }
    instantiate() {
        submitButton.addEventListener('click', () => this.input());
  
    }
    input(){
        name = nameField.value;
        age = ageField.value;
        alert(`Name: ${name}, Age: ${age}`);
    }
    class Student extends Person {
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
        }
        getDetails() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
        }
        
    }
}

    
    
    const student1 = new Student("Alice", 20, "A");
    student1.getDetails();


 

