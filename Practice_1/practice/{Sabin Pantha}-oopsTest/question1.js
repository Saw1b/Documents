class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails(){
        console.log(`${this.year} ${this.make} ${this.model}`);
    }

}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.getDetails();
const car2 = new Car("Honda", "Civic", 2021);
car2.getDetails(); 