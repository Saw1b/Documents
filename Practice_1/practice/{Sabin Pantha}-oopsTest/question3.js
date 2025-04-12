class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    isSquare() {
        const Square = (this.length === this.width);
        return Square;
    }
}

const rectangle1 = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${rectangle1.getArea()}`);
console.log(`Width and Height Equal?: ${rectangle1.isSquare()}`);
const rectangle2 = new Rectangle(4, 4);
console.log(`Width and Height Equal?:: ${rectangle2.getArea()}`);
console.log(`${rectangle2.isSquare()}`);

