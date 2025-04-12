// class  Person {
//     constructor(name, phoneNumber, Address) {
//       this.name = name;
//       this.phoneNumber = phoneNumber;
//       this.Address = Address;
//       this.nameField = document.getElementById('name'); 
//       this.phoneNumberField = document.getElementById('phoneNumber');
//       this.AddressField = document.getElementById('Address');
//       this.submitButton = document.getElementById('submitButton');
//       }
//       initiate(){
//         this.submitButton.addEventListener('click', () => this.input())}

//       input(){
//             this.name = this.nameField.value;
//             this.phoneNumber = this.phoneNumberField.value;
//             this.Address = this.AddressField.value;
//             alert('Form submitted successfully!');
//         }
//     }
 
//     document.addEventListener('DOMContentLoaded',() => new Person());




class UserList{
  constructor(){
    this.users = []
    this.name = ""
    this.age = ""
    this.nameField = document.getElementById('name');
    this.ageField = document.getElementById('age');
    this.submitButton = document.getElementById('submitButton');
    this.resultBox = document.getElementById('resultBox');
    this.initalize()
  }
  initalize(){
    this.submitButton.addEventListener('click', () => this.input());
  }
  input(){
    this.name = this.nameField.value;
    this.age = this.ageField.value;
    this.users.push({ name:this.name, age:this.age});
    this.display();

  }
  display(){
    const ulComp = document.createElement('ul');
    this.users.forEach(items =>{
      const liComp = document.createElement('li');
      liComp.innerHTML = `Name: ${items.name}, Age: ${items.age}`;
      ulComp.appendChild(liComp);
    })
    this.resultBox.innerHTML = "";
    this.resultBox.appendChild(ulComp);
  }
}

document.addEventListener('DOMContentLoaded',() => new UserList());
