class Car{
    constructor(brand,color){
        this.brand = brand;
        this.color = color;
    }
    drive(){
        return`${this.color} ${this.brand} is driving!`;
    }
}
const car1= new Car('BMW','Red');
console.log(car1.drive());