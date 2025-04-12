class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.nameField = document.getElementById('name');
        this.ageField = document.getElementById('age');
        this.submitButton = document.getElementById('submitButton');
        this.instantiate();
    }
    instantiate() {
        this.submitButton.addEventListener('click', () => this.input());
    }
    input(){
        this.name = this.nameField.value;
        this.age = this.ageField.value;
    }
    
    }
    document.addEventListener('DOMContentLoaded',() => new Person());