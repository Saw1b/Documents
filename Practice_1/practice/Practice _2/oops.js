// class Vehicle{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     }
//     class Car extends Vehicle {
//         constructor(make, model, year, doors){
//             super(make, model, year);
//             this.doors = doors;
//         }
//         start(){
//             console.log(`Starting the ${this.make} ${this.model}`);
//         }
// }

// class BankAccount{
//     constructor(balance,accountNo){
//         this.balance = balance;
//         this.accountNo = accountNo;
//     }
//     if (balance = 0){
//         console.log("You have low balance.");
//         deposit(amount){
//         this.balance += amount;
//         console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
//     }
// }
// }

class UserForm {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.nameField = document.getElementById('name');
        this.emailField = document.getElementById('email');
        this.submitButton = document.getElementById('submitButton');
        this.initiate();
    }

    initiate() {
        this.submitButton.addEventListener('click', () => this.submit());
    }

    submit() {
        const name = this.nameField.value;
        const email = this.emailField.value;

        if (name && email) {
            alert('Form Submitted');
        }
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

const we = document.addEventListener("DOMContentLoaded", new UserForm("John", "john@example.com"));
console.log(we);



