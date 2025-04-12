//class Person {
  //constructor(name,age,country) {
    //this.name = name;
    //this.age = age;
    //this.country = country;
  //}
  //greet(){
    //console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am from ${this.country}`);
//}

//}
//const display = new Person("sabin", 20, "Nepal");
//display.greet();

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area(){
        console.log(this.width * this.height);
    }
    perimeter(){
        console.log(2 * (this.width + this.height));
    }
}

const New = new Rectangle(10,20);
New.area();
New.perimeter();

const Newr = new Rectangle(100,2500);
New.area();
New.perimeter();
